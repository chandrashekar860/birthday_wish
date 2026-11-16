import { useCallback, useEffect, useState } from 'react';
import { activities } from '../data/activities';

const key = 'bubu-birthday-progress-v1';
const ids = new Set(activities.map(({ id }) => id));
const empty = () => ({ discoveries: [], letterViewed: false });

function read() {
  try {
    const value = JSON.parse(window.localStorage.getItem(key));
    if (value?.version !== 1 || !Array.isArray(value.discoveries)) return empty();
    const discoveries = [...new Set(value.discoveries.filter(id => ids.has(id)))];
    return { discoveries, letterViewed: discoveries.length === ids.size && value.letterViewed === true };
  } catch { return empty(); }
}

export function useBirthdayProgress() {
  const [progress, setProgress] = useState(read);
  const unlocked = progress.discoveries.length === ids.size;
  useEffect(() => {
    try {
      if (progress.discoveries.length || progress.letterViewed) {
        window.localStorage.setItem(key, JSON.stringify({ version: 1, ...progress }));
      } else window.localStorage.removeItem(key);
    } catch { /* Private browsing can block storage. */ }
  }, [progress]);
  const complete = useCallback((id) => {
    if (!ids.has(id)) return;
    setProgress(previous => previous.discoveries.includes(id) ? previous : { ...previous, discoveries: [...previous.discoveries, id] });
  }, []);
  const viewLetter = useCallback(() => {
    setProgress(previous => previous.letterViewed || previous.discoveries.length !== ids.size ? previous : { ...previous, letterViewed: true });
  }, []);
  const reset = () => setProgress(empty());
  return { ...progress, unlocked, complete, viewLetter, reset };
}
