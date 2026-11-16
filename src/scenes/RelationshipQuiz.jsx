import { useState } from 'react';
import { ArrowRight, Check, Radio, RotateCcw, Tv } from 'lucide-react';
import { Back, Button, Guide, PageTurn, SceneHeading } from '../components/UI';
import { birthdayContent as content } from '../data/birthdayContent';
import { activities } from '../data/activities';

export default function RelationshipQuiz({ navigate, complete, play }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [show, setShow] = useState(0);
  const questions = content.quiz;
  const current = questions[index];
  const done = index >= questions.length;

  function next() {
    if (answer === null) return;
    if (index + 1 >= questions.length) complete('quiz');
    setIndex(index + 1);
    setAnswer(null);
    play('click');
  }

  function restart() {
    setAnswer(null);
    setIndex(0);
    setShow(value => value + 1);
    play('click');
  }

  return <>
    <Back navigate={navigate}/>
    <SceneHeading activity={activities[1]} title="Shinchan’s Love Quiz"/>
    <div className="tv-stage">
      <div className="tv-aerial" aria-hidden="true"><i/><i/></div>
      <div className="tv-body">
        <div className="tv-screen">
          <div key={show} className="tv-static" aria-hidden="true"/>
          <p className="broadcast"><Radio size={15}/> LIVE <span/> BIRTHDAY CHANNEL</p>
          <PageTurn pageKey={index} className="quiz-page">
            {done ? <div className="quiz-finish">
              <span className="heading-mark"><Tv size={29}/></span><h2>That’s a wrap!</h2><p>Zero wrong answers. Maximum cute points.</p>
              <Button kind="secondary" icon={RotateCcw} onClick={restart}>Restart quiz</Button>{!questions.length && <Button onClick={() => { complete('quiz'); navigate('house'); }}>Finish quiz</Button>}
            </div> : <>
              <p className="question-count">QUESTION {index + 1} / {questions.length}</p>
              <h2>{current.question}</h2>
              <div className="quiz-options">
                {current.answers.map((option, i) => <button type="button" key={i} className={`quiz-choice ${answer === i ? 'chosen' : ''}`} aria-pressed={answer === i} onClick={() => { setAnswer(i); play('click'); }}><span aria-hidden="true">{answer === i ? <Check size={14}/> : String.fromCharCode(65+i)}</span>{option.label}</button>)}
              </div>
              <div className="quiz-response">
                {answer !== null && <><p role="status">{current.answers[answer].response}</p><Button after={ArrowRight} onClick={next}>{index + 1 === questions.length ? 'Finish quiz' : 'Next question'}</Button></>}
              </div>
            </>}
          </PageTurn>
        </div>
        <div className="tv-sidebar" aria-hidden="true"><div className="tv-dial"/><div className="tv-dial tv-dial-small"/><div className="tv-speaker"/><i/></div>
      </div>
      <div className="tv-legs" aria-hidden="true"><i/><i/></div>
    </div>
    <div className="scene-end"><Guide expression={done ? 'happy' : 'guide'} message={done ? content.dialogue.quizDone : content.dialogue.quiz}/>{done && questions.length > 0 && <Button after={ArrowRight} onClick={() => navigate('house')}>Back to the house</Button>}</div>
  </>;
}
