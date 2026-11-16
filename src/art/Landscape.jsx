import { Heart, Star } from './Details';

const outline = '#554234';

function Cloud({ x, y, scale = 1, className }) {
  return <g className={className}><path transform={`translate(${x} ${y}) scale(${scale})`} d="M6 36q-5-16 13-20 7-1 13 2C39-6 71-4 82 16c11-6 27 1 30 13 15-3 27 5 25 14H15q-9 0-9-7Z" fill="#fffaf0" stroke="#6b8e79" strokeWidth="1.25"/></g>;
}

function Tree({ x, y, scale = 1, tint = '#8db377' }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={outline} strokeLinejoin="round" strokeWidth="2.6">
    <path d="M48 153 51 73l11-4 4 86" fill="#b6815e"/>
    <path d="M56 12C29-3 13 19 17 36-12 44-9 85 15 91c3 24 38 27 47 9 24 13 56-2 47-26 21-24-2-49-18-48C87 2 66 1 56 12Z" fill={tint}/>
    <path d="M17 73c14 17 25 8 25 8m29-35c12-7 23 0 26 5M58 89q16 5 24-4" fill="none" stroke="#54744c" strokeWidth="1.6"/>
    <path d="M35 35q5-11 17-11M14 61q1-7 7-10" fill="none" stroke="#e7e7aa" strokeWidth="2.6" strokeLinecap="round"/>
  </g>;
}

function Flowers({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} strokeLinecap="round">
    <path d="M0 22q-1-10-5-15m5 15q7-13 11-10m14 10q3-9 1-18m-1 16q-5-11-9-7m26 10q3-12 8-15m-8 15q-4-7-8-8" stroke="#58774d" strokeWidth="2" fill="none"/>
    <circle cx="-6" cy="5" r="3.7" fill="#ed8d76"/><circle cx="27" cy="4" r="4" fill="#ffe19a"/><circle cx="52" cy="7" r="3.8" fill="#fff2cc"/>
  </g>;
}

export function Landscape({ title }) {
  return <svg viewBox="0 0 760 520" className="landscape" role="img" aria-label={title} preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="sky-wash" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop stopColor="#b9dce4"/><stop offset="1" stopColor="#e8ebc5"/></linearGradient>
      <pattern id="roof-lines" width="29" height="16" patternUnits="userSpaceOnUse"><path d="M0 15h29M14 15V1" stroke="#9c5547" strokeWidth="1" opacity=".5"/></pattern>
    </defs>
    <path d="M17 262C20 137 111 62 210 61c104-2 142 15 207-17 109-53 262-11 301 82 24 56 34 126 20 190L556 442l-395-19C57 388 13 325 17 262Z" fill="url(#sky-wash)"/>
    <circle cx="583" cy="111" r="45" fill="#f9d475" opacity=".85"/>
    <circle cx="583" cy="111" r="53" fill="none" stroke="#fdf1bf" strokeWidth="1.2" strokeDasharray="2 5"/>
    <Cloud x={95} y={99} scale={.93} className="cloud"/><Cloud x={572} y={160} scale={.78} className="cloud cloud-two"/><Cloud x={425} y={65} scale={.6} className="cloud cloud-two"/>
    <path d="M28 300q88-108 203-43c56 30 96 7 150-15 94-39 183-65 270-13q48 26 88 78v44H50Z" fill="#a8bf88" stroke="#65835e" strokeWidth="2"/>
    <path d="M25 332q109-102 237-28 76 37 158 7c87-39 210-51 318 6-5 115-135 173-329 176C212 503 52 449 25 332Z" fill="#8faa71" stroke="#5e7b52" strokeWidth="2.2"/>
    <path d="M28 351q147-26 239 23t238 7q101-37 223-36c-39 103-130 143-309 147-190 8-327-31-391-141Z" fill="#a9bf83"/>
    <path d="M386 365c87 24-32 51 5 77 20 14 66 22 130 45q-85 14-175 7-74-28-44-60c34-34 129-50 64-65Z" fill="#edd5a0" stroke="#a18b65" strokeWidth="1.5"/>
    <path d="M389 447q28 12 69 22m-137-29 8-6m68-42 8-4" fill="none" stroke="#baa278" strokeWidth="1.2" strokeLinecap="round"/>
    <g transform="translate(118 235)" stroke={outline} strokeWidth="2" strokeLinejoin="round">
      <path d="M15 28h75v53H15Z" fill="#ffe6b2"/><path d="M0 32 44 0l63 30-6 8-56-24L7 40Z" fill="#9c837f"/><path d="M25 48h19v17H25Zm34 0h17v17H59Z" fill="#afd3d2"/><path d="M68 77h28" stroke="#67835a"/>
    </g>
    <Tree x={595} y={188} scale={1.06}/><Tree x={91} y={247} scale={.69} tint="#91b681"/>
    <g stroke={outline} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="406" cy="377" rx="181" ry="22" fill="#596943" opacity=".24" stroke="none"/>
      <path d="M471 170v-64h34v87Z" fill="#d18c70"/><path d="M466 105h44v14h-44Z" fill="#f1ae86"/><path d="M479 132h12m-4 16h17" stroke="#a96153" strokeWidth="1.6"/>
      <path d="M223 232 363 128l151 97 50 29v113H223Z" fill="#f8dfaa"/>
      <path d="m514 228 50 26v113h-50Z" fill="#e7bd87"/><path d="M230 274h284m-284 34h284m-284 36h284m8-47 40 4m-38 36 38 2" stroke="#b48761" strokeWidth="1.3" opacity=".65"/>
      <path d="m199 233 163-119 21-3 199 126-16 20-195-117-151 111Z" fill="#b35d48"/>
      <path d="m202 230 161-119 21-1 195 123-21 12-185-111-153 110Z" fill="#d97961"/>
      <path d="m202 230 161-119 21-1 195 123-21 12-185-111-153 110Z" fill="url(#roof-lines)" stroke="none"/>
      <path d="M226 234 370 125l151 91" fill="none" stroke="#f3a68c" strokeWidth="2"/>
      <path d="M337 365v-87a33 33 0 0 1 66 0v87Z" fill="#639082"/><path d="M345 357v-78a25 25 0 0 1 50 0v78Z" fill="#73a298" strokeWidth="1.7"/>
      <path d="M351 280a19 19 0 0 1 38 0v17h-38Z" fill="#cce6dd" strokeWidth="2"/><path d="M370 263v34m-18-13h35" strokeWidth="1.5"/><circle cx="385" cy="321" r="4" fill="#f9cd74" strokeWidth="1.6"/>
      <path d="M331 357h78v13h-78Z" fill="#b87f61"/><path d="M323 370h94v8h-94Z" fill="#d0a283"/>
      <rect x="258" y="264" width="55" height="58" rx="10" fill="#f9f0ce"/><rect x="266" y="272" width="39" height="42" rx="5" fill="#aad0d0" strokeWidth="2"/>
      <path d="M285 272v43m-19-20h39m-32-7 8-8m10 27 8-8" strokeWidth="1.5"/>
      <rect x="434" y="264" width="54" height="57" rx="9" fill="#f9f0ce"/><rect x="442" y="272" width="38" height="42" rx="4" fill="#aad0d0" strokeWidth="2"/>
      <path d="M461 273v42m-19-20h38m-30-6 7-7" strokeWidth="1.5"/>
      <path d="M252 321h66l-5 14h-57Zm177 0h65l-5 14h-56Z" fill="#bb775b" strokeWidth="2"/>
      <path d="M259 321q5-14 12-5 9-13 16 0 10-10 21 5m129 0q5-14 12-5 9-13 16 0 10-10 21 5" fill="#82a46a" strokeWidth="1.5"/>
      <circle cx="370" cy="192" r="22" fill="#fbefca"/><Heart transform="translate(359 181) scale(.92)" fill="#d97865" strokeWidth="1.5"/>
      <path d="M238 241q131 43 265-1" fill="none" strokeWidth="1.4" />
      {['#f5bc55','#e18473','#83a992','#a69aba','#f5bc55','#e18473','#83a992','#a69aba'].map((c, i) => {
        const x = 248 + i * 31; const y = 246 + (4 - Math.abs(3.5 - i)) * 4;
        return <path key={x} d={`M${x} ${y}l19 2-11 15Z`} fill={c} strokeWidth="1.4"/>;
      })}
    </g>
    <g stroke={outline} strokeWidth="1.7" strokeLinejoin="round">
      {[['M143 371h91m-91 8h91', 147], ['M530 369h110m-110 8h110', 534]].map(([lines, x], i) => <g key={x}><path d={lines} stroke="#f7e3af" strokeWidth="6"/>{Array.from({length: i ? 6 : 5}, (_, n) => <path key={n} d={`M${x+n*19} 388v-26l5-5 5 5v26Z`} fill="#fbebc2"/>)}</g>)}
    </g>
    <path d="M44 390q9-34 30-16 4-25 23-18 14 3 16 22 19-15 31 12Zm579 2q9-27 25-20 3-26 24-23 15 1 18 20 17-12 31 7l-7 16Z" fill="#75915e" stroke="#5c774a" strokeWidth="1.8"/>
    <Flowers x={152} y={412}/><Flowers x={511} y={420} scale={.9}/><Flowers x={631} y={402} scale={.75}/><Flowers x={223} y={374} scale={.55}/>
    <g fill="none" stroke="#668153" strokeWidth="1.5" strokeLinecap="round" opacity=".8"><path d="m92 405 17 1m-7-5 12 1m121 45 20 2m-14-8 18 1m291-11 16-1m-7 6 15-2m-26-31 12-3m-334 5 13-1m378 27 15-3"/></g>
    <Star transform="translate(90 157) scale(.78)" fill="#f6cd72" stroke="#98754e" strokeWidth="1"/><Star transform="translate(656 94) scale(.58)" fill="#fff2c6"/><Star transform="translate(492 51) scale(.52)" fill="#fff2c6"/><Star transform="translate(183 179) scale(.48)" fill="#fff2c6"/>
    <path d="M520 139q7-7 14 0 7-7 14 0m-355 11q6-5 11 0 5-5 11 0" fill="none" stroke="#637f75" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>;
}
