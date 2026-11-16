import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Aperture, BookOpen, Check, ChevronLeft, ChevronRight, Gift, Heart as HeartIcon, Sparkles, Tv, CakeSlice } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { GuideArt, Heart, Star } from '../art/Details';
import { birthdayContent as content } from '../data/birthdayContent';
import { activities } from '../data/activities';
import { hasAsset } from './assets';

export const icons = { album: BookOpen, quiz: Tv, gift: Gift, cake: CakeSlice, letter: HeartIcon };

export function Button({ children, kind = 'primary', icon: Icon, after: After, className = '', ...props }) {
  return <button className={`button button-${kind} ${className}`} {...props}>{Icon && <Icon size={18} aria-hidden="true"/>}<span>{children}</span>{After && <After size={18} aria-hidden="true"/>}</button>;
}

export function Back({ navigate }) {
  return <Button kind="ghost" icon={ArrowLeft} onClick={() => navigate('house')}>Back to the house</Button>;
}

export function Guide({ expression = 'guide', message, className = '' }) {
  const [failed, setFailed] = useState(new Set());
  const paths = [...new Set([content.characters[expression], content.characters.guide])];
  const src = paths.find(path => hasAsset(path) && !failed.has(path));
  return <div className={`guide ${className}`}>
    <div className="guide-picture" aria-hidden="true">{src ? <img src={src} alt="" onError={() => setFailed(prev => new Set([...prev, src]))}/> : <GuideArt expression={expression}/>}</div>
    {message && <div className="speech" role="status">{message}</div>}
  </div>;
}

export function Photo({ src, alt, variant = 'landscape', className = '', onAvailable, eager = false }) {
  const [failed, setFailed] = useState(false);
  return <div className={`photo photo-${variant} ${className}`}>
    {hasAsset(src) && !failed ? <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onLoad={() => onAvailable?.(true)} onError={() => { setFailed(true); onAvailable?.(false); }}/> :
      (variant === 'memory' ? <svg viewBox="0 0 380 240" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="380" height="240" fill="#c5d9cd"/><circle cx="284" cy="68" r="30" fill="#f5d48b"/>
        <path d="M43 61q1-9 15-9 7-15 25-4 11-4 19 13Zm79 21q2-10 14-10 9-13 24 1 10 0 13 9Z" fill="#fff0cf"/>
        <path d="M0 169 88 104l62 40 57-62 118 86 55-43v115H0Z" fill="#a5bb95" stroke="#71866f" strokeWidth="2"/>
        <path d="M0 182q117-43 224 11 50 21 156-22v69H0Z" fill="#7f9d7b" stroke="#66866b" strokeWidth="2"/>
        <g transform="translate(162 123)" fill="#ffe9b8" stroke="#5e6551" strokeWidth="2.5"><rect x="0" y="0" width="57" height="43" rx="7"/><path d="M12 0 18-9h19l6 9Z"/><circle cx="28" cy="21" r="13" fill="#a3bba7"/><circle cx="46" cy="9" r="2.5" fill="#e38a73"/><Heart transform="translate(22 14) scale(.56)" fill="#e38a73" stroke="none"/></g>
        <path d="m36 211 12-3m254 4 20 4m25-12 13-2m-227 16 15 1" fill="none" stroke="#bac895" strokeWidth="2" strokeLinecap="round"/>
      </svg> : <svg viewBox="0 0 220 148" aria-hidden="true">
        <rect width="220" height="148" fill="#f0c6ad"/><circle cx="110" cy="74" r="49" fill="#f8ddbd"/><circle cx="110" cy="74" r="42" fill="none" stroke="#d18872" strokeDasharray="2 4"/>
        <Heart transform="translate(84 49) scale(2.2)" fill="#dc7968" stroke="#8a4b43" strokeWidth="1.05"/>
        <path d="M95 64q4-7 12-4" fill="none" stroke="#f9b7a5" strokeWidth="2.7" strokeLinecap="round"/>
        <Star transform="translate(42 44) scale(.64)" fill="#fff0cb"/><Star transform="translate(164 95) scale(.55)" fill="#fff0cb"/>
      </svg>)}
  </div>;
}

export function ChapterStamps({ progress }) {
  return <ol className="chapter-stamps" aria-label="The four surprises">
    {activities.map(({ id, number, title, color }) => {
      const Icon = icons[id];
      return <li className={`stamp stamp-${color}`} key={id}>
        <span className="stamp-icon">{progress?.includes(id) ? <Check size={18}/> : <Icon size={18}/>}</span>
        <span><small>CHAPTER {number}</small><strong>{title}</strong></span>
      </li>;
    })}
  </ol>;
}

export function SceneHeading({ activity, title, description, children }) {
  return <header className="scene-heading">
    <span className="kicker"><Sparkles size={14} aria-hidden="true"/> {activity.kicker}</span>
    <h1 tabIndex={-1} data-scene-heading>{title || activity.title}</h1>
    {description && <p>{description}</p>}
    {children}
  </header>;
}

export function Pager({ index, count, previous, next, previousLabel = 'Previous', nextLabel = 'Next' }) {
  return <nav className="pager" aria-label="Pages">
    <Button kind="secondary" icon={ChevronLeft} aria-label={previousLabel} onClick={previous} disabled={index <= 0}>{previousLabel}</Button>
    <span className="pager-count" aria-live="polite">{index + 1} <span>/</span> {count}</span>
    <Button kind="secondary" after={ChevronRight} aria-label={nextLabel} onClick={next} disabled={index + 1 >= count}>{nextLabel}</Button>
  </nav>;
}

export function FocusScene({ id, children }) {
  const main = useRef(null);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (id !== 'intro') main.current?.querySelector('[data-scene-heading]')?.focus({ preventScroll: true });
  }, [id]);
  const reduced = useReducedMotion();
  return <motion.main ref={main} id="main-content" className={`scene scene-${id}`} initial={reduced ? false : { opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -6 }} transition={{ duration: reduced ? 0 : .21 }}>{children}</motion.main>;
}

export function PageTurn({ pageKey, direction = 1, children, className = '' }) {
  const reduced = useReducedMotion();
  return <AnimatePresence mode="wait" initial={false} custom={direction}>
    <motion.div key={pageKey} className={className}
      custom={direction}
      variants={reduced ? undefined : {
        in: dir => ({ opacity: 0, x: 15 * dir, rotateY: -12 * dir }),
        active: { opacity: 1, x: 0, rotateY: 0 },
        out: dir => ({ opacity: 0, x: -13 * dir, rotateY: 10 * dir }),
      }}
      initial="in" animate="active" exit="out" transition={{ duration: .16 }}>
      {children}
    </motion.div>
  </AnimatePresence>;
}

export function HeadingMark({ type = 'sparkles' }) {
  const Icon = type === 'photo' ? Aperture : type === 'heart' ? HeartIcon : Sparkles;
  return <span className="heading-mark" aria-hidden="true"><Icon size={27}/></span>;
}

export function NextButton({ children, ...props }) {
  return <Button after={ArrowRight} {...props}>{children}</Button>;
}

const confettiColors = ['#cf6b53', '#e9aa42', '#7fa489', '#b99abe', '#e5918b'];
export function Confetti({ burst = false }) {
  return <div className={`confetti ${burst ? 'confetti-burst' : ''}`} aria-hidden="true">
    {Array.from({ length: burst ? 28 : 12 }, (_, i) => <i key={i} style={{
      '--x': `${(i * 37 + 7) % 100}%`, '--y': `${(i * 23 + 9) % 92}%`, '--delay': `${burst ? (i % 9) * .055 : -(i % 9) * .72}s`,
      '--angle': `${i * 41}deg`, '--color': confettiColors[i % confettiColors.length],
    }}/>)}
  </div>;
}
