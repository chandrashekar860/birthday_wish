import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, CakeSlice, Heart, MailOpen } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Doily, Heart as HeartArt } from '../art/Details';
import { ObjectArt } from '../art/Objects';
import { Back, Button, Guide, Photo, SceneHeading } from '../components/UI';
import { birthdayContent as content } from '../data/birthdayContent';
import { letter } from '../data/activities';

function Hearts() {
  return <div className="letter-hearts" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <svg key={i} viewBox="0 0 24 24" style={{ '--x': `${(i * 27 + 13) % 97}%`, '--y': `${(i * 33 + 8) % 93}%`, '--wait': `-${i * 1.22}s`, '--size': `${10 + i % 4 * 4}px` }}><HeartArt fill={i % 2 ? '#efaf97' : '#c87367'}/></svg>)}</div>;
}

export default function FinalLetter({ navigate, viewLetter, play }) {
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(0);
  const last = useRef(null);
  const reduced = useReducedMotion();
  const note = content.finalLetter;
  const paragraphs = [...note.paragraphs, note.closing].filter(Boolean);
  const done = opened && visible >= paragraphs.length;

  useEffect(() => { if (done) viewLetter(); }, [done, viewLetter]);

  useEffect(() => {
    if (visible < 3) return;
    const paragraph = last.current;
    if (paragraph && paragraph.getBoundingClientRect().bottom > window.innerHeight - 125) {
      paragraph.scrollIntoView({ block: 'center', behavior: reduced ? 'instant' : 'smooth' });
    }
  }, [visible, reduced]);

  function unseal() {
    if (opened) return;
    play('page');
    setOpened(true);
    setVisible(1);
  }

  function reveal() {
    setVisible(value => Math.min(value + 1, paragraphs.length));
    play('page');
  }

  return <>
    <Back navigate={navigate}/>
    <SceneHeading activity={letter} title="One last thing…"/>
    <div className={`letter-stage ${opened ? 'letter-stage-open' : ''}`}>
      <Hearts/>
      {!opened && <div className="sealed">
        <Doily className="letter-doily"/>
        <button className="sealed-prop" onClick={unseal} aria-label="Break the seal"><ObjectArt type="letter"/></button>
        <Guide message={content.dialogue.unlocked}/>
        <Button icon={MailOpen} onClick={unseal}>Break the seal</Button>
      </div>}
      {opened && <>
        <div className="open-envelope"><ObjectArt type="letter" opened/></div>
        <motion.article className="letter-paper" initial={reduced ? false : { opacity: 0, y: 32, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: reduced ? 0 : .27, duration: .38 }}>
          <span className="letter-paper-date">{content.birthdayGirl.birthday} · WITH LOVE</span>
          <h2>{note.title}</h2>
          <div className="letter-paragraphs" role="log" aria-label="Birthday letter">
            {paragraphs.slice(0, visible).map((paragraph, i) => <motion.p ref={i === visible - 1 ? last : undefined} key={i} initial={reduced ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .27 }}>{paragraph}</motion.p>)}
          </div>
          {!done && <Button kind="secondary" after={ArrowRight} onClick={reveal}>Keep reading</Button>}
          {done && <motion.figure className="letter-polaroid" initial={reduced ? false : { opacity: 0, rotate: 2 }} animate={{ opacity: 1, rotate: -3 }}><Photo src={content.photos.final} alt={`${content.birthdayGirl.name} and her partner together`} variant="heart"/><figcaption>{note.photoCaption} <Heart size={14}/></figcaption></motion.figure>}
        </motion.article>
      </>}
      {done && <motion.div className="final-moment" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }}><h2>{note.finale}</h2><p>{note.signature}</p>
        <div className="final-actions"><Button onClick={() => navigate('house')}>Return to the house</Button><Button kind="secondary" icon={BookOpen} onClick={() => navigate('album')}>Revisit memories</Button><Button kind="secondary" icon={CakeSlice} onClick={() => navigate('cake')}>Replay celebration</Button></div>
      </motion.div>}
    </div>
  </>;
}
