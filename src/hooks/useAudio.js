import { useEffect, useRef, useState } from 'react';
import { birthdayContent } from '../data/birthdayContent';
import { hasAsset } from '../components/assets';

const preference = 'bubu-birthday-audio';
const audio = birthdayContent.audio;
const getAudioPreference = () => {
  try { return window.sessionStorage.getItem(preference) === 'on'; }
  catch { return false; }
};

function startMusic(music) {
  if (!music || !music.paused) return;
  music.volume = .32;
  music.play().catch(() => {});
}

export function useAudio(scene) {
  const [enabled, setEnabled] = useState(getAudioPreference);
  const [failed, setFailed] = useState(new Set());
  const interacted = useRef(false);
  const current = useRef(null);
  const effect = useRef(null);
  const ending = scene === 'letter' && hasAsset(audio.ending) && !failed.has(audio.ending);
  const track = ending ? audio.ending : audio.background;
  const hasTrack = hasAsset(track) && !failed.has(track);
  const hasAudio = Object.values(audio).some(path => hasAsset(path) && !failed.has(path));

  useEffect(() => {
    const music = current.current;
    if (enabled && interacted.current) startMusic(music);
    return () => music?.pause();
  }, [enabled, track, hasTrack]);

  function activate() {
    if (!interacted.current) {
      interacted.current = true;
      if (enabled) startMusic(current.current);
    }
  }

  function toggle() {
    if (!hasAudio) return;
    const next = !enabled;
    interacted.current = true;
    setEnabled(next);
    // Call play directly from the gesture for mobile browser autoplay policies.
    if (next) startMusic(current.current);
    else { current.current?.pause(); effect.current?.pause(); }
    try { window.sessionStorage.setItem(preference, next ? 'on' : 'off'); }
    catch { /* Continue for this page. */ }
  }

  function play(id) {
    if (!enabled || !hasAsset(audio[id]) || failed.has(audio[id])) return;
    effect.current?.pause();
    const clip = new Audio(audio[id]);
    effect.current = clip;
    clip.volume = .5;
    clip.addEventListener('error', () => setFailed(previous => new Set([...previous, audio[id]])), { once: true });
    clip.play().catch(() => {});
  }

  return { enabled, hasAudio, track, hasTrack, current, activate, toggle, play, rejectTrack: () => setFailed(previous => new Set([...previous, track])) };
}
