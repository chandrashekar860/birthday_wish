import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, Camera, Maximize2, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Back, Button, Guide, HeadingMark, PageTurn, Pager, Photo, SceneHeading } from '../components/UI';
import { ObjectArt } from '../art/Objects';
import { birthdayContent as content } from '../data/birthdayContent';
import { activities } from '../data/activities';

export default function MemoryAlbum({ navigate, complete, play }) {
  const [index, setIndex] = useState(-1);
  const [direction, setDirection] = useState(1);
  const [available, setAvailable] = useState(null);
  const zoom = useRef(null);
  const start = useRef(null);
  const pages = content.memories;
  const end = index === pages.length;
  const page = pages[index];

  useEffect(() => { if (end) complete('album'); }, [end, complete]);
  function change(next) {
    if (next < 0 || next > pages.length) return;
    setDirection(next < index ? -1 : 1);
    setIndex(next);
    setAvailable(null);
    play('page');
  }
  function startSwipe(event) {
    if (event.pointerType !== 'mouse') start.current = [event.clientX, event.clientY];
  }
  function endSwipe(event) {
    if (!start.current) return;
    const dx = event.clientX - start.current[0];
    const dy = event.clientY - start.current[1];
    start.current = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4 && index >= 0) change(index + (dx < 0 ? 1 : -1));
  }

  return <>
    <Back navigate={navigate}/>
    <SceneHeading activity={activities[0]} title="Our Memory Album"/>
    {index < 0 ? <div className="album-cover-wrap">
      <motion.div className="album-cover" initial={{ opacity: 0, rotate: -5 }} animate={{ opacity: 1, rotate: -2 }}>
        <span className="cover-spine"/><span className="cover-label">THE GOOD STUFF · VOL. 01</span>
        <ObjectArt type="album" className="cover-art"/><strong>Little moments,<br/>big feelings.</strong><span className="cover-mark"><Camera size={19}/></span>
      </motion.div>
      <Button icon={BookOpen} after={ArrowRight} onClick={() => change(0)}>Open the album</Button>
    </div> : <>
      <div className="scrapbook" onPointerDown={startSwipe} onPointerUp={endSwipe} onPointerCancel={() => { start.current = null; }}>
        <div className="book-binding" aria-hidden="true"/>
        <PageTurn pageKey={index} direction={direction} className="scrapbook-page">
          {end ? <div className="album-last"><HeadingMark type="heart"/><h2>{content.albumClosing}</h2><Guide expression="happy" message={content.dialogue.album}/></div> :
            <>
              <div className="memory-polaroid">
                <i className="washi" aria-hidden="true"/>
                <Photo key={page.id} src={page.image} alt={page.title || `Memory ${index + 1}`} variant="memory" onAvailable={(loaded) => { if (loaded) setAvailable(page.id); }}/>
                {available === page.id && <button className="zoom-button icon-button" aria-label="Enlarge photograph" onClick={() => zoom.current?.showModal()}><Maximize2 size={17}/></button>}
                <span className="polaroid-label">{page.date || `FROM THE ARCHIVES · ${String(index + 1).padStart(2, '0')}`}</span>
              </div>
              <div className="memory-copy"><span className="kicker">Memory no. {String(index + 1).padStart(2, '0')}</span>{page.title && <h2>{page.title}</h2>}<p>{page.caption}</p><span className="memory-doodle" aria-hidden="true">♡</span></div>
            </>}
        </PageTurn>
      </div>
      <Pager index={index} count={pages.length + 1} previous={() => change(index - 1)} next={() => change(index + 1)} previousLabel="Previous page" nextLabel="Next page"/>
      {end && <div className="center"><Button after={ArrowRight} onClick={() => navigate('house')}>Back to the house</Button></div>}
      {page && <dialog ref={zoom} className="modal photo-modal" aria-label={page.title || 'Enlarged photograph'} onClick={event => { if (event.target === event.currentTarget) zoom.current?.close(); }}>
        <form method="dialog"><button className="icon-button" aria-label="Close photograph"><X size={20}/></button></form>
        {available === page.id && <img src={page.image} alt={page.title || `Memory ${index + 1}`}/>}
      </dialog>}
    </>}
  </>;
}
