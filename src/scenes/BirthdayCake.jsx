import { useState } from 'react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CakeLayers, drawing } from '../art/Objects';
import { Heart, Star } from '../art/Details';
import { Back, Button, Confetti, Guide, SceneHeading } from '../components/UI';
import { birthdayContent as content } from '../data/birthdayContent';
import { activities } from '../data/activities';

const positions = [[99, 83], [128, 53], [160, 87], [192, 53], [221, 83], [160, 30]];
const arrangements = { 1: [2], 2: [1, 3], 3: [0, 2, 4], 4: [0, 1, 3, 4], 5: [0, 1, 2, 3, 4], 6: [0, 1, 2, 3, 4, 5] };
const candleColors = ['#e68c80', '#8fb09a', '#e9bc66', '#a799bd', '#e68c80', '#82a69c'];

export default function BirthdayCake({ navigate, complete, play }) {
  const { cake, birthdayGirl } = content;
  const [out, setOut] = useState([]);
  const count = Math.max(1, Math.min(Math.round(Number(cake.candles)) || 5, 6));
  const candles = arrangements[count];
  const done = out.length >= count;

  function blow(id) {
    if (out.includes(id)) return;
    const next = [...out, id];
    setOut(next);
    if (next.length === count) {
      play('celebration');
      complete('cake');
    } else play('click');
  }

  return <>
    <Back navigate={navigate}/>
    <SceneHeading activity={activities[3]} title={cake.greeting} description="Tap each little flame to blow it out."/>
    <div className={`cake-stage ${done ? 'cake-done' : ''}`}>
      <div className="cake-spotlight" aria-hidden="true"/>
      <div className="cake-plate">
        <svg viewBox="0 0 320 259" className="cake-drawing" aria-hidden="true">
          <Star transform="translate(32 93) scale(.75)" fill="#e5ab5c"/><Star transform="translate(250 72) scale(.63)" fill="#d68675"/><Star transform="translate(267 142) scale(.46)" fill="#e4af69"/><Star transform="translate(46 185) scale(.49)" fill="#e4af69"/>
          <CakeLayers/>
          <g {...drawing}>
            {candles.map((id) => {
              const [x, y] = positions[id];
              const snuffed = out.includes(id);
              const base = id === 0 || id === 4 ? 113 : id === 2 ? 121 : id === 5 ? 91 : 101;
              const height = base - y - 8;
              return <g key={id} transform={`translate(${x} ${y})`}>
                <rect x="-4" y="8" width="8" height={height} rx="3" fill={candleColors[id]} strokeWidth="1.5"/>
                {Array.from({ length: Math.max(1, Math.floor(height / 9)) }, (_, i) => <path key={i} d={`m-3 ${15+i*9} 6-3`} fill="none" stroke="#ffefd4" strokeWidth="1.8"/>)}
                <path d="M0 8V3" strokeWidth="1.5"/>
                {snuffed ? <g className="candle-smoke"><path d="M0 1q13-9 0-16t3-14" fill="none" stroke="#8d7d72" strokeWidth="1.8"/><circle cx="3" cy="-31" r="3" fill="#a99282" opacity=".4" stroke="none"/></g> :
                  <g className="candle-flame" style={{ '--flicker': `${id * -.31}s` }}><circle cy="-3" r="16" fill="#ffd279" opacity=".38" stroke="none"/><path d="M0-15Q-15 2-2 4q13 1 2-19Z" fill="#ffcf62" stroke="#bf7653" strokeWidth="1.3"/><path d="M0-4q-6 6 0 7 6-1 0-7Z" fill="#fff5be" stroke="none"/></g>}
              </g>;
            })}
          </g>
          <rect x="124" y="158" width="73" height="27" rx="10" fill="#fff0cb" stroke="#a26351" strokeWidth="1.5"/>
          <text x="160" y="177" textAnchor="middle" className="cake-name" fill="#95594a" textLength={birthdayGirl.name.length > 7 ? 62 : undefined} lengthAdjust="spacingAndGlyphs">{birthdayGirl.name}</text>
          {done && <g className="cake-hearts"><Heart transform="translate(45 51) rotate(-15) scale(.86)" fill="#de8879"/><Heart transform="translate(245 25) rotate(12) scale(1.22)" fill="#da7566"/><Heart transform="translate(263 55) rotate(19) scale(.5)" fill="#e5a197"/></g>}
        </svg>
        {candles.map((id, i) => <motion.button key={id} className="candle-target" style={{ left: `${positions[id][0] / 320 * 100}%`, top: `${positions[id][1] / 259 * 100}%` }}
          aria-label={`Candle ${i + 1}${out.includes(id) ? ' is out' : ': blow it out'}`} aria-disabled={out.includes(id)} onClick={() => blow(id)} whileTap={out.includes(id) ? undefined : { scale: .84 }}/>)}
      </div>
      {done ? <><Confetti burst/><div className="cake-message" role="status"><h2>{cake.finalMessage}</h2><p>{cake.wish}</p></div></> :
        <div className="candle-count" aria-live="polite"><Sparkles size={15}/>{count - out.length} {count - out.length === 1 ? 'candle' : 'candles'} to go</div>}
    </div>
    {done && <div className="scene-end"><Guide expression="happy" message={content.dialogue.cake}/><Button kind="secondary" icon={RotateCcw} onClick={() => { setOut([]); play('click'); }}>Replay candles</Button><Button after={ArrowRight} onClick={() => navigate('house')}>Back to the house</Button></div>}
  </>;
}
