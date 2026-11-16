import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Landscape } from '../art/Landscape';
import { Doily, Star } from '../art/Details';
import { Button, ChapterStamps, Confetti, Guide, Photo } from '../components/UI';
import { hasAsset } from '../components/assets';
import { birthdayContent as content } from '../data/birthdayContent';

export default function IntroScene({ navigate, discoveries }) {
  const { intro, birthdayGirl, photos } = content;
  const reduced = useReducedMotion();
  const [line, setLine] = useState(0);
  const ready = reduced || line >= intro.dialogue.length;
  const advance = () => setLine(value => Math.min(value + 1, intro.dialogue.length));

  useEffect(() => {
    if (ready) return;
    const timer = window.setTimeout(() => setLine(value => Math.min(value + 1, intro.dialogue.length)), [2300, 1300, 1600, 2000][line] || 2000);
    return () => window.clearTimeout(timer);
  }, [line, ready, intro.dialogue.length]);

  return <>
    <article className="intro-card">
      <div className="intro-meta">
        <span className="kicker"><span className="tiny-dot"/>{intro.edition}</span>
        {!ready && <button className="skip-link" onClick={() => setLine(intro.dialogue.length)}>Skip intro <ChevronRight size={15}/></button>}
        {ready && <span className="meta-edition">THE BIRTHDAY EDITION</span>}
      </div>
      <div className="intro-grid">
        <div className="intro-copy">
          <span className="date-stamp"><CalendarDays size={15}/> {birthdayGirl.birthday}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.h1 className="intro-title" key={ready ? 'birthday' : 'opening'} tabIndex={-1} data-scene-heading
              initial={reduced ? false : { opacity: 0, y: 8, scale: .975 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, y: -4 }} transition={reduced ? { duration: 0 } : { type: 'spring', duration: .42, bounce: .34 }}>
              {ready ? intro.greeting : 'A little world'}<br/><em>{ready ? `${birthdayGirl.name}!` : 'for you.'}<svg viewBox="0 0 230 15" preserveAspectRatio="none" aria-hidden="true"><path d="M2 10q108-13 226-4M21 14q128-13 195-3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></svg></em>
            </motion.h1>
          </AnimatePresence>
          <p className="intro-description">{intro.invitation} <span>{intro.teaser}</span></p>
          <Button after={ArrowRight} className="intro-cta" onClick={() => navigate('house')}>
            {discoveries.length ? 'Resume My Adventure' : intro.action}
          </Button>
          <p className="intro-caption"><Heart size={13}/> {intro.caption}</p>
        </div>
        <div className="intro-visual">
          <Confetti/>
          <Landscape title="An illustrated birthday cottage with a green front door, a winding path, and colorful flags"/>
          <svg className="intro-sparkle" viewBox="0 0 24 24" aria-hidden="true"><Star fill="#deaa50"/></svg>
          <div className="intro-guide">
            <Guide expression={ready ? 'happy' : line === 1 ? 'surprised' : 'guide'}/>
            {ready ? <div className="speech speech-welcome">{content.dialogue.welcome}</div> :
              <button type="button" className="speech dialogue-next" onClick={advance} aria-label="Advance intro dialogue">
                <span aria-live="polite">{intro.dialogue[line]}</span><ChevronRight size={15}/>
              </button>}
          </div>
          {hasAsset(photos.intro) ? <div className="intro-polaroid"><Photo src={photos.intro} alt={`${birthdayGirl.name} and her partner together`} variant="heart"/></div> : <Doily className="intro-doily"/>}
        </div>
      </div>
      <div className="intro-foot"><span><Sparkles size={14}/> An illustrated adventure</span><span>01 / The invitation</span></div>
    </article>
    <div className="chapter-area">
      <p className="chapter-label">A PEEK INSIDE <span/></p>
      <ChapterStamps progress={discoveries}/>
    </div>
  </>;
}
