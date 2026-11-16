import { useState } from 'react';
import { ArrowRight, Gift, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Back, Button, Confetti, Guide, PageTurn, Pager, Photo, SceneHeading } from '../components/UI';
import { ObjectArt } from '../art/Objects';
import { birthdayContent as content } from '../data/birthdayContent';
import { activities } from '../data/activities';

export default function GiftSurprise({ navigate, complete, play }) {
  const notes = content.loveNotes;
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);
  const [seen, setSeen] = useState([]);
  const [direction, setDirection] = useState(1);
  const revealed = seen.includes(index);
  const done = opened && seen.length >= notes.length;
  const atKeepsake = index === notes.length;

  function unwrap() {
    play('gift');
    setOpened(true);
    if (!notes.length) complete('gift');
  }

  function flip() {
    if (revealed) return;
    play('page');
    const updated = [...seen, index];
    setSeen(updated);
    if (updated.length === notes.length) complete('gift');
  }

  function change(next) {
    if (next < 0 || next >= notes.length + Number(done)) return;
    setDirection(next < index ? -1 : 1);
    setIndex(next);
    play('page');
  }

  return <>
    <Back navigate={navigate}/>
    <SceneHeading activity={activities[2]} title="A Mysterious Gift" description={opened ? 'A little stack of love notes, just for you.' : 'Someone left a very suspicious little present…'}/>
    <div className={`gift-stage ${opened ? 'gift-opened' : ''}`}>
      <div className="gift-pedestal">
        <span className="gift-orbit" aria-hidden="true"/>
        {opened ? <ObjectArt type="gift" opened className="gift-prop"/> :
          <button className="unwrap-target" onClick={unwrap} aria-label="Unwrap the present"><ObjectArt type="gift" className="gift-prop"/></button>}
        <Sparkles className="gift-sparkle" aria-hidden="true"/>
        {opened && <><Confetti burst/><Heart className="gift-flying-heart" aria-hidden="true"/></>}
        {!opened && <Button icon={Gift} onClick={unwrap}>Unwrap the present</Button>}
      </div>
      {opened && <div className="notes-stack">
        <PageTurn pageKey={index} className="note-page" direction={direction}>
          {atKeepsake ? <div className="gift-final">
            <div className="gift-polaroid"><Photo src={content.photos.gift} alt="A keepsake from the birthday gift" variant="heart"/></div>
            <h2>{content.giftClosing}</h2>
          </div> : <motion.button className={`note-card ${revealed ? 'note-revealed' : ''}`} aria-label={revealed ? 'Love note ' + (index + 1) + ': ' + notes[index] : 'Flip love note ' + (index + 1)} onClick={flip} whileTap={revealed ? undefined : { scale: .97 }}>
            <span className="note-inner">
              <span className="note-face note-front"><Heart size={35}/><strong>For your eyes only</strong><small>TAP TO FLIP · NO. {String(index + 1).padStart(2, '0')}</small></span>
              <span className="note-face note-back"><small>LOVE NOTE {String(index + 1).padStart(2, '0')}</small><strong>{notes[index]}</strong><Heart size={21}/></span>
            </span>
          </motion.button>}
        </PageTurn>
        {notes.length > 0 && <Pager index={index} count={notes.length + Number(done)} previous={() => change(index - 1)} next={() => change(index + 1)} previousLabel="Previous note" nextLabel={done && index === notes.length - 1 ? 'Keepsake' : 'Next note'}/>}
        {notes.length > 0 && <p className="notes-count" aria-live="polite">{seen.length} of {notes.length} notes read</p>}
      </div>}
    </div>
    {done && <div className="scene-end"><Guide expression="happy" message={content.dialogue.gift}/>{!atKeepsake && <Button kind="secondary" icon={Heart} onClick={() => change(notes.length)}>See the keepsake</Button>}<Button after={ArrowRight} onClick={() => navigate('house')}>Back to the house</Button></div>}
  </>;
}
