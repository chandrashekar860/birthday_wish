import { useEffect, useRef, useState } from 'react';
import { Heart, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { Button, FocusScene } from './components/UI';
import { birthdayContent as content } from './data/birthdayContent';
import { useBirthdayProgress } from './hooks/useBirthdayProgress';
import { useAudio } from './hooks/useAudio';
import IntroScene from './scenes/IntroScene';
import BirthdayHouse from './scenes/BirthdayHouse';
import MemoryAlbum from './scenes/MemoryAlbum';
import RelationshipQuiz from './scenes/RelationshipQuiz';
import GiftSurprise from './scenes/GiftSurprise';
import BirthdayCake from './scenes/BirthdayCake';
import FinalLetter from './scenes/FinalLetter';

const scenes = { intro: IntroScene, house: BirthdayHouse, album: MemoryAlbum, quiz: RelationshipQuiz, gift: GiftSurprise, cake: BirthdayCake, letter: FinalLetter };
const readScene = () => {
  const scene = window.location.hash.slice(1);
  return Object.hasOwn(scenes, scene) ? scene : 'intro';
};

export default function App() {
  const progress = useBirthdayProgress();
  const [route, setRoute] = useState(readScene);
  const scene = route === 'letter' && !progress.unlocked ? 'house' : route;
  const audio = useAudio(scene);
  const resetModal = useRef(null);
  const [resetCount, setResetCount] = useState(0);
  const Scene = scenes[scene];

  function navigate(destination, replace = false) {
    const next = destination === 'letter' && !progress.unlocked ? 'house' : destination;
    audio.activate();
    audio.play('click');
    const url = next === 'intro' ? window.location.pathname + window.location.search : '#' + next;
    if (next !== readScene() || replace) window.history[replace ? 'replaceState' : 'pushState'](null, '', url);
    setRoute(next);
  }

  useEffect(() => {
    document.title = content.title;
    const sync = () => setRoute(readScene());
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => { window.removeEventListener('popstate', sync); window.removeEventListener('hashchange', sync); };
  }, []);

  return <MotionConfig reducedMotion="user">
    <div className={`app-wrap theme-${scene}`} onPointerDown={audio.activate}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') audio.activate();
        if (event.key === 'Escape' && !document.querySelector('dialog[open]') && scene !== 'intro' && scene !== 'house') navigate('house');
      }}>
      <a className="skip-to-content" href="#main-content" onClick={(event) => { event.preventDefault(); document.querySelector('[data-scene-heading]')?.focus(); }}>Skip to content</a>
      <div className="site-shell">
        <header className="site-bar">
          <button className="brand" aria-label={`Go to the invitation: ${content.club}`} onClick={() => navigate('intro')}>
            <span className="brand-icon"><Heart size={18} strokeWidth={2.1}/></span><span><strong>{content.club}</strong><small>THE BIRTHDAY MISSION</small></span>
          </button>
          <button className="music-toggle" type="button" aria-pressed={audio.enabled && audio.hasAudio} aria-label={audio.hasAudio ? 'Music and sound' : 'Music unavailable: no audio has been added'} disabled={!audio.hasAudio} onClick={audio.toggle}>
            {audio.enabled && audio.hasAudio ? <Volume2 size={17}/> : <VolumeX size={17}/>}<span>{audio.enabled && audio.hasAudio ? 'Sound on' : 'Sound off'}</span>
          </button>
          {audio.hasTrack && <audio key={audio.track} ref={audio.current} src={audio.track} preload="none" loop onError={audio.rejectTrack}/>}
        </header>
        <AnimatePresence mode="wait" initial={false}>
          <FocusScene key={scene === 'intro' ? 'intro-' + resetCount : scene} id={scene}>
            <Scene navigate={navigate} progress={progress} discoveries={progress.discoveries} complete={progress.complete} viewLetter={progress.viewLetter} play={audio.play}/>
          </FocusScene>
        </AnimatePresence>
        <footer className="site-footer">
          <span><Heart size={13}/> A little fan-made birthday adventure.</span>
          <button type="button" onClick={() => resetModal.current?.showModal()}><RotateCcw size={14}/> Reset adventure</button>
        </footer>
      </div>
      <dialog ref={resetModal} className="modal reset-modal" aria-labelledby="reset-title" onClick={event => { if (event.target === event.currentTarget) resetModal.current?.close(); }}>
        <span className="heading-mark"><RotateCcw size={24}/></span>
        <h2 id="reset-title">Start over?</h2>
        <p>This clears your discoveries and locks the final letter again.</p>
        <form method="dialog"><Button kind="secondary" value="cancel">Keep my progress</Button>
          <Button value="reset" onClick={() => { progress.reset(); setResetCount(count => count + 1); navigate('intro', true); }}>Reset adventure</Button></form>
      </dialog>
    </div>
  </MotionConfig>;
}
