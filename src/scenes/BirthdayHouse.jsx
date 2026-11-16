import { useState } from 'react';
import { Check, House, LockKeyhole, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ObjectArt } from '../art/Objects';
import { RoomArt, roomLayouts } from '../art/RoomArt';
import { Guide, icons } from '../components/UI';
import { activities, letter } from '../data/activities';
import { birthdayContent as content } from '../data/birthdayContent';

function RoomLayout({ compact = false, progress, open }) {
  const layout = compact ? roomLayouts.tall : roomLayouts.wide;
  return <div className={`room-layout room-${compact ? 'tall' : 'wide'}`} style={{ '--room-ratio': `${layout.w}/${layout.h}` }}>
    <RoomArt compact={compact} birthday={content.intro.greeting.replace(/,$/, '') + ' ' + content.birthdayGirl.name + '!'}/>
    {activities.concat(letter).map((item, i) => {
      const [x, y, width] = layout.props[item.id];
      const locked = item.id === 'letter' && !progress.unlocked;
      const done = progress.discoveries.includes(item.id) || (item.id === 'letter' && progress.letterViewed);
      return <motion.button key={item.id}
        className={`room-object room-object-${item.id} stamp-${item.color} ${locked ? 'object-locked' : ''} ${item.id === 'letter' && !locked ? 'object-glowing' : ''}`}
        style={{ '--left': `${x / layout.w * 100}%`, '--top': `${y / layout.h * 100}%`, '--width': `${width / layout.w * 100}%`, '--wait': `${i * -.72}s` }}
        onClick={() => open(item.id, locked)}
        whileTap={{ scale: .92 }}
        aria-label={`${item.title}${locked ? ' (locked until four surprises are discovered)' : done ? ' (completed)' : ''}`}>
        <span className="object-picture"><ObjectArt type={item.id}/></span>
        <span className="object-label">{locked ? <LockKeyhole size={12}/> : done ? <Check size={13}/> : <span className="object-dot"/>}{item.roomLabel}</span>
      </motion.button>;
    })}
  </div>;
}

export default function BirthdayHouse({ progress, navigate }) {
  const [hint, setHint] = useState('');
  const [lockedTaps, setLockedTaps] = useState(0);
  const open = (id, locked) => {
    if (locked) {
      setHint(content.dialogue.locked);
      setLockedTaps(value => value + 1);
    } else navigate(id);
  };
  return <>
    <header className="house-header">
      <div>
        <span className="kicker"><House size={15}/> The birthday house</span>
        <h1 tabIndex={-1} data-scene-heading>Come on in, <em>{content.birthdayGirl.nickname}!</em></h1>
      </div>
      <div className="progress" aria-label={`${progress.discoveries.length} of ${activities.length} surprises discovered`}>
        <div className="progress-icons" aria-hidden="true">{activities.map(({ id, color }) => {
          const Icon = icons[id];
          return <span key={id} className={`stamp-${color} ${progress.discoveries.includes(id) ? 'discovered' : ''}`}>{progress.discoveries.includes(id) ? <Check size={15}/> : <Icon size={15}/>}</span>;
        })}</div>
        <strong>{progress.discoveries.length}/{activities.length}</strong> surprises discovered
      </div>
    </header>
    <div className={`house-card ${progress.unlocked ? 'house-unlocked' : ''}`}>
      <RoomLayout progress={progress} open={open}/>
      <RoomLayout compact progress={progress} open={open}/>
      <div className="house-footer">
        <Guide key={lockedTaps} expression={progress.unlocked ? 'happy' : hint ? 'surprised' : 'guide'} message={hint || (progress.unlocked ? content.dialogue.unlocked : progress.discoveries.length ? content.dialogue.solved : content.dialogue.house)}/>
        <p><Sparkles size={15}/>{progress.unlocked ? 'The final letter is unlocked!' : 'Tap an object to find its surprise.'}</p>
      </div>
    </div>
  </>;
}
