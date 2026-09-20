'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Clock3, NotebookPen } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { getClosingCopy, getDimensionCopy, getDirectionCopy, getObserveCopy, getProfileCopy, getStuckCopy, getTotalCopy, getWhyCopy, questions, scoreQuiz, type Answer, type Answers } from '@/lib/quiz';
import './love.css';

type View = 'home' | 'quiz' | 'result';
const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

export default function Page() {
  const [view, setView] = useState<View>('home');
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [dialog, setDialog] = useState<'about' | 'deep' | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const question = questions[index];
  const result = scoreQuiz(answers);
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / questions.length) * 100);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view, index]);

  function begin() { setView('quiz'); }
  function choose(answer: Answer) { setAnswers((previous) => ({ ...previous, [question.id]: answer })); }
  function next() { if (!answers[question.id]) return; if (index === questions.length - 1) setView('result'); else setIndex((current) => current + 1); }
  const totalCopy = getTotalCopy(result.total);
  const profileCopy = getProfileCopy(result.parts);
  const closingCopy = getClosingCopy(result.total);
  const whyCopy = getWhyCopy(result.parts);
  const stuckCopy = getStuckCopy(result.parts);
  const directionCopy = getDirectionCopy(result.parts);
  const observeCopy = getObserveCopy(result.parts);

  return <main className={`app-shell ${view === 'quiz' ? 'question-shell' : ''} view-${view}`}>
    <header className="topbar">
      {view === 'home' ? <img className="brand brand-mark" src={asset('/find-mark.svg')} alt="find" /> : <button className="icon-button" aria-label={view === 'quiz' && index > 0 ? '上一题' : '返回首页'} onClick={() => view === 'quiz' && index > 0 ? setIndex((current) => current - 1) : setView('home')}><ArrowLeft size={21} /></button>}
      {view !== 'home' && <img className="brand brand-mark centered-brand" src={asset('/find-mark.svg')} alt="find" />}
      {view === 'quiz' ? <span className="counter" aria-label={`第${index + 1}题，共30题`}>{String(index + 1).padStart(2, '0')} <span>/ 30</span></span> : <span />}
    </header>

    {view === 'home' && <>
      <section className="home-intro"><h1 ref={heading} tabIndex={-1}>测测你有多喜欢TA？</h1><p>你对TA的喜欢，其实藏在很多小事里。</p></section>
      <div className="hero-art raised"><img src={asset('/soft-hero.jpg')} width={1448} height={1086} alt="粉色爱心与黄色、蓝色小花" fetchPriority="high" decoding="async" /></div>
      <section className="raised intro-card"><h2>请始终想着同一个人作答。</h2><p>30个日常情境，慢慢看清你的心意。</p></section>
      <button className="primary" onClick={begin}>{answered ? '继续看看我的心意' : '开始看看我的心意'} <ArrowRight size={20} /></button>
      <div className="facts raised"><span><NotebookPen size={17} />30 道情境题</span><i /><span><Clock3 size={17} />约 3–5 分钟</span></div>
    </>}

    {view === 'quiz' && <>
      <div className="minimal-progress"><div className="minimal-track" role="progressbar" aria-label="答题进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{width:`${progress}%`}} /></div><span className="minimal-percent">{progress}%</span></div>
      <section className="question-heading" key={`heading-${question.id}`}><h1 ref={heading} tabIndex={-1}>{question.text}</h1></section>
      <RadioGroup key={`answers-${question.id}`} aria-label="选择最接近你的反应" value={answers[question.id] ?? ''} onValueChange={(value) => typeof value === 'string' && 'ABCD'.includes(value) && choose(value as Answer)} className="answers">
        {question.options.map((option, optionIndex) => { const value = 'ABCD'[optionIndex] as Answer; const selected = answers[question.id] === value; return <label key={value} className={`answer raised ${selected ? 'selected' : ''}`} htmlFor={`answer-${question.id}-${value}`}><span className="answer-letter">{value}</span><span className="answer-text">{option}</span><RadioGroupItem id={`answer-${question.id}-${value}`} value={value} className="option-radio" />{selected && <Check size={17} className="selected-check" aria-hidden="true" />}</label>; })}
      </RadioGroup>
      <div className="question-bottom"><button className="primary" disabled={!answers[question.id]} onClick={next}>{index === questions.length - 1 ? '查看我的结果' : '下一题'} <ArrowRight size={20} /></button><p className="footnote">可以返回修改答案</p></div>
    </>}

    {view === 'result' && <>
      <section className="result-intro reveal reveal-1"><p className="report-kicker">你的心动报告</p><h1 ref={heading} tabIndex={-1}>{profileCopy.title}</h1><div className="result-summary"><span>这次结果</span><p>{profileCopy.body}</p></div></section>
      <section className="raised score-card reveal" style={{ '--delay': '2' } as React.CSSProperties}><div><p className="score-label">喜欢指数</p><div className="score-number">{result.total ?? '—'}<span>/ 100</span></div><p className="score-caption">来自你在 30 个日常情境中的选择。</p></div><div className="score-ring" style={{ '--score': `${result.total ?? 0}%` } as React.CSSProperties} aria-hidden="true"><span><img src={asset('/score-hero.jpg')} width={224} height={224} fetchPriority="high" decoding="async" alt="" /></span></div></section>
      <section className="result-summary total-verdict reveal" style={{ '--delay': '3' } as React.CSSProperties}><span>喜欢指数告诉你</span><h2>{totalCopy.title}</h2><p>{totalCopy.body}</p></section>
      <section className="dimensions" aria-label="你的三个指标结果">{result.parts.map((part, partIndex) => { const copy = getDimensionCopy(part.key, part.score); return <details className={`raised dimension-card ${part.color} reveal`} style={{ '--delay': `${partIndex + 2}` } as React.CSSProperties} key={part.key}><summary><div className="dimension-top"><span>{part.label}</span><strong>{part.score ?? '—'}</strong></div><p className="dimension-guide">{part.description}</p><Progress className={`metric ${part.color}`} value={part.score ?? 0} aria-label={`${part.label} ${part.score ?? 0} 分`} /><p className="dimension-result"><b>你的结果</b><span>{copy.title}</span></p><span className="expand-hint">看看具体表现 <ChevronDown size={14} /></span></summary><div className="dimension-detail"><span className="explain-label personal">你的回答里更接近这样</span><p>{copy.body}</p></div></details>; })}</section>
      <section className="insight-stack" aria-label="关于这份喜欢的解读">
        <article className="raised insight-card insight-why reveal" style={{ '--delay': '6' } as React.CSSProperties}><span>喜欢从哪里来</span><h2>{whyCopy.title}</h2><p>{whyCopy.body}</p></article>
        <article className="raised insight-card insight-stuck reveal" style={{ '--delay': '7' } as React.CSSProperties}><span>你现在卡在哪里</span><h2>{stuckCopy.title}</h2><p>{stuckCopy.body}</p></article>
        <article className="raised insight-card insight-direction reveal" style={{ '--delay': '8' } as React.CSSProperties}><span>下一步方向</span><h2>{directionCopy.title}</h2><p>{directionCopy.body}</p></article>
        <article className="raised insight-card insight-observe reveal" style={{ '--delay': '9' } as React.CSSProperties}><span>接下来观察什么</span><h2>{observeCopy.title}</h2><p>{observeCopy.body}</p></article>
      </section>
      <section className="raised closing-card reveal" style={{ '--delay': '10' } as React.CSSProperties}><span>给自己的话</span><h2>{closingCopy.title}</h2><p>{closingCopy.body}</p></section>
      <div className="result-actions reveal" style={{ '--delay': '11' } as React.CSSProperties}><button className="text-button" onClick={() => { setIndex(0); setView('quiz'); }}>回顾并修改答案</button><button className="text-button" onClick={() => setDialog('about')}>关于这份报告</button></div>
    </>}

    <Dialog open={dialog !== null} onOpenChange={(open) => !open && setDialog(null)}><DialogContent className="find-dialog">
      {dialog === 'about' && <><DialogTitle>关于这份报告</DialogTitle><DialogDescription>find 帮你从日常情境里，整理自己的心意。</DialogDescription><div className="about-content"><p>请始终想着同一个人。经历过的按真实反应选；没有经历过的，选最像自己的做法。</p><h3>分数如何得出</h3><p>30道题里，有一部分会整理你的持续关注指数、特别吸引指数和靠近意愿指数；其余问题帮助你回看自己的表达方式。</p><h3>这份结果想做什么</h3><p>它把你在不同场景里的反应放在一起，让你更容易看清自己的感受和下一步。</p></div></>}
      {dialog === 'deep' && <><DialogTitle>这段关系该怎么往前走？</DialogTitle><DialogDescription>你已经知道自己有多喜欢TA。接下来，看看你们现在走到哪一步了。</DialogDescription><div className="deep-content"><section><h3>TA对你的主动，是礼貌还是也有一点在意？</h3><p>从已有的互动里分清哪些只是一次热情，哪些才是持续、真实的靠近。</p></section><section><h3>你们为什么一直没有进展？</h3><p>看看是两个人都在等、你的信号太隐晦，还是一直只有你在推动联系。</p></section><section><h3>你下一步更适合怎么做？</h3><p>结合三个指数，判断现在更适合主动一点、继续观察，还是暂时停一停。</p></section><section><h3>做完以后，该看TA什么反应？</h3><p>TA会不会主动联系、安排见面、记得你说过的事，并用行动接住你的靠近。</p></section><button className="secondary-button" onClick={() => setDialog(null)}>回到我的结果</button></div></>}
    </DialogContent></Dialog>
  </main>;
}
