export function Heart({ fill = '#df654e', ...props }) {
  return <path d="M12 21 3 12C-3 5 6-1 12 6c6-7 15-1 9 6Z" fill={fill} strokeLinejoin="round" {...props}/>;
}

export function Star({ fill = '#f8cb63', ...props }) {
  return <path d="M12 0q1.7 9.8 12 12-10.3 1.8-12 12Q10 14 0 12 10 10 12 0Z" fill={fill} {...props}/>;
}

export function Paw({ fill = 'currentColor', ...props }) {
  return <g fill={fill} {...props}><ellipse cx="5" cy="8" rx="2.7" ry="3.6" transform="rotate(-28 5 8)"/><ellipse cx="11" cy="4" rx="2.7" ry="3.6"/><ellipse cx="17" cy="5" rx="2.7" ry="3.6" transform="rotate(15 17 5)"/><ellipse cx="21" cy="10" rx="2.5" ry="3.4" transform="rotate(29 21 10)"/><path d="M5 17q2-5 6-6 5-1 9 6 2 5-3 5l-5-1-4 1q-6 0-3-5Z"/></g>;
}

export function Doily({ className = '' }) {
  return <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="36" fill="currentColor"/>
    {Array.from({ length: 18 }, (_, i) => <circle key={i} cx="50" cy="14" r="7" fill="currentColor" transform={`rotate(${i * 20} 50 50)`}/>)}
    <circle cx="50" cy="50" r="33" fill="none" stroke="#fffaf0" strokeWidth="1" strokeDasharray="2 3"/>
    <Heart transform="translate(35 35) scale(1.25)" fill="#fff7df"/>
  </svg>;
}

export function GuideArt({ expression }) {
  return <svg viewBox="0 0 145 152" aria-hidden="true" className="guide-svg">
    <g stroke="#46382b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M105 114c20 3 28-11 32-6 10 30-15 38-35 25Z" fill="#a66846"/><path d="m121 117 5 14" stroke="#684a36"/>
      <ellipse cx="69" cy="143" rx="53" ry="6" fill="#433c27" opacity=".14" stroke="none"/>
      <path d="M41 116q-11 4-17-3l-6-9q-7-3-9 3c-2 15 19 26 35 22M88 111q15-1 23 10 3 8-5 9l-18-8" fill="#b87c52"/>
      <path d="M42 130q-10 8-5 12c6 4 15 1 22-5m18 1q7 7 17 5 6-4-3-12" fill="#714d39"/>
      <path d="M40 107q17-7 54 0l2 27q-24 10-58 0Z" fill="#e88456"/>
      <path d="m43 116 51 8m-54 1 55 7" stroke="#b85d46" strokeWidth="1.6"/>
      <path d="m48 102-3 17 25-5 18 6 4-17" fill="#f9ce6d"/>
      <path d="M35 42Q20 22 34 13c8-5 18 0 23 14m33 2q16-20 28-11c10 7 6 20-4 32" fill="#b67c50"/>
      <path d="M39 36q-8-12-3-15 4-3 13 7m54 3q12-9 13-4 2 5-4 11" fill="#eca697" strokeWidth="2"/>
      <path d="M29 57c0-21 18-33 41-34 28 0 45 13 48 35 16 11 13 35-4 43-18 12-62 13-85-1C11 89 12 67 29 57Z" fill="#dba473"/>
      <path d="M26 75q20-25 42-9l6 4q21-20 45 5 7 15-10 23-39 14-74 0-13-6-9-23Z" fill="#ffe2ac" stroke="none"/>
      <path d="M36 60q14-14 28 2-12 22-29 17-9-4 1-19Zm46 2q11-16 25-5 14 18 2 22-15 5-27-17Z" fill="#946042" stroke="none"/>
      <path d="M42 54q7-6 14-4m34 0q7-4 15 3" fill="none"/>
      {expression === 'happy' ? <path d="M44 70q5-8 11 0m37 0q5-8 11 0" fill="none"/> : <g fill="#46382b" stroke="none"><ellipse cx="50" cy="68" rx="3.4" ry="5.4"/><ellipse cx="97" cy="68" rx="3.4" ry="5.4"/></g>}
      <ellipse cx="73" cy="77" rx="5.5" ry="3.4" fill="#46382b" stroke="none"/>
      {expression === 'surprised' ? <ellipse cx="73" cy="90" rx="4" ry="5" fill="#b95145"/> : <path d="M64 86q9 8 17 0" fill="none" strokeWidth="2.2"/>}
      <path d="m36 85 4-3m2 5 4-3m55 1 3 3m3-6 4 3" stroke="#d78073" strokeWidth="2"/>
      <path d="M50 24q13-17 31-13l-3 6q7-4 14-1l-5 10" fill="#527656"/>
      <path d="M72 25q1-7 8-15" fill="none" strokeWidth="1.5"/>
    </g>
  </svg>;
}
