import { Heart, Paw, Star } from './Details';
import { drawing } from './Objects';

function Window({ x, y, scale }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} {...drawing}>
    <rect x="14" y="21" width="188" height="137" rx="9" fill="#d4a071" opacity=".3" stroke="none"/>
    <rect x="13" y="13" width="182" height="138" rx="9" fill="#fff0cc"/>
    <rect x="24" y="23" width="159" height="117" rx="6" fill="#b8dce3" strokeWidth="2"/>
    <path d="M25 119q38-25 73-9 34-19 83-7v34H25Z" fill="#a9bd88" strokeWidth="1.5"/>
    <path d="M32 59q0-10 12-11 5-15 18-6 9-2 12 6 14 0 13 11Zm95-6q0-6 9-7 6-11 14-3 10-3 15 10Z" fill="#fff8e4" stroke="#789397" strokeWidth="1.4"/>
    <circle cx="145" cy="78" r="15" fill="#f6cd71" stroke="#dfac60" strokeWidth="1.5"/>
    <path d="M103 24v116m-80-59h160" stroke="#fff1cd" strokeWidth="6"/><path d="M103 24v116m-80-59h160" strokeWidth="1.1" opacity=".75"/>
    <path d="M0 13h209" stroke="#7a5943" strokeWidth="5"/><circle cx="0" cy="13" r="5" fill="#9b6b4d"/><circle cx="209" cy="13" r="5" fill="#9b6b4d"/>
    <path d="M6 17h45q3 37-17 69l-3 10q-1 31 11 45H2q12-53 4-124Zm150 0h43q-6 71 6 124h-41q11-18 11-45l-2-10q-21-29-17-69Z" fill="#8eab8d"/>
    <path d="M17 21q3 38-5 65m19-65q0 39-12 62m-1 14q0 20-8 38m157-114q0 38 16 66m7-66q-1 40 7 65m-14 9q0 25 7 39" fill="none" stroke="#577b65" strokeWidth="1.6"/>
    <path d="M6 91q14 6 28-2m140 0q13 8 25 1" fill="none" stroke="#f4ce79" strokeWidth="5"/>
    <path d="M5 143h198v13H5Z" fill="#edc590"/>
  </g>;
}

function Sofa({ x, y, scale }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} {...drawing}>
    <ellipse cx="154" cy="141" rx="150" ry="16" fill="#6d4d3a" opacity=".18" stroke="none"/>
    <path d="M37 117v28h15l8-25m180 0 8 25h15v-28" fill="#85573f"/>
    <rect x="26" y="13" width="255" height="100" rx="35" fill="#c97357"/>
    <rect x="31" y="4" width="244" height="95" rx="32" fill="#e99370"/>
    <path d="M152 8v64m-108-32q8-22 30-22m155 0q24 0 33 18" fill="none" stroke="#ba674f" strokeWidth="1.6"/>
    <path d="M29 76h249v53H29Z" fill="#d77b5d"/>
    <path d="M39 78q52-27 112-12 64-13 115 11v33H39Z" fill="#f1a886"/>
    <path d="M151 68v34m-108 2h219m-210 14h197" fill="none" stroke="#a75e4d" strokeWidth="1.7"/>
    <path d="M8 62q6-17 25-13 18 4 18 22v59H12q-7 0-7-10Zm252 10q0-17 16-22 23-6 27 16v54q0 10-9 10h-34Z" fill="#e48b68"/>
    <path d="M13 73q7-13 19-11 12 2 14 14m220 0q2-12 14-14 14-2 18 11" fill="none" stroke="#fad0a5" strokeWidth="2"/>
    <g transform="translate(57 34) rotate(-12 27 24)"><rect width="58" height="47" rx="12" fill="#f7ce74" strokeWidth="2"/><path d="M7 24q23-17 46 0-21 17-46 0Z" fill="none" stroke="#e0a75f" strokeWidth="1.3" strokeDasharray="3 3"/><Heart transform="translate(20 14) scale(.72)" fill="#e08968" stroke="none"/></g>
    <g transform="translate(204 30) rotate(13 23 24)"><rect width="51" height="48" rx="11" fill="#9eb799" strokeWidth="2"/><path d="m7 14 35 1M8 22l34 1M8 30l35 1M8 38l31 1" stroke="#c9d0a5" strokeWidth="1.5"/></g>
  </g>;
}

function Shelf({ x, y, scale }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} {...drawing}>
    <path d="m23 76 11 17 8-17m77 0 11 17 8-17" fill="#a36a4d"/>
    <rect x="8" y="67" width="146" height="12" rx="3" fill="#c38660"/>
    <path d="M17 67V34h15v33Zm15 0V44h14v23Zm15 0 4-36 13 1-4 35Z" fill="#c58e91" strokeWidth="1.8"/>
    <path d="M20 41h9m6 10h8m13-14 4 1" stroke="#ffdfaa" strokeWidth="1.5"/>
    <path d="M76 66V24h32v42Z" fill="#f7e0ac" strokeWidth="2"/><path d="M82 60V30h20v30Z" fill="#e8bbae" strokeWidth="1.4"/>
    <Heart transform="translate(85 39) scale(.62)" fill="#c8695c" stroke="none"/>
    <path d="M131 54q-4-21 9-25 3 16-9 25Zm0 0q-5-18-16-14 0 11 16 14Z" fill="#7e9f75" strokeWidth="1.6"/>
    <path d="M119 53h23l-4 14h-15Z" fill="#e79979" strokeWidth="1.8"/>
  </g>;
}

function Plant({ x, y, scale }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} {...drawing}>
    <ellipse cx="49" cy="132" rx="37" ry="9" fill="#73503a" opacity=".2" stroke="none"/>
    <path d="M48 98Q32 53 39 12m8 84q12-47 32-64m-31 58Q35 57 14 49" fill="none" stroke="#557357"/>
    <path d="M38 49Q11 14 41 3q21 26-3 46Zm15 18q-4-36 35-40 3 26-35 40Zm-12 5Q8 77 4 44q24-10 37 28Zm7 19q3-25 32-20-11 22-32 20Z" fill="#8fac78"/>
    <path d="M39 42 41 13m22 41 16-18M30 61 13 48" stroke="#668658" strokeWidth="1.5"/>
    <path d="M22 99h56l-9 34H31Z" fill="#db8f68"/>
    <rect x="19" y="91" width="62" height="13" rx="4" fill="#efad80"/><path d="M32 111q19 9 37 0" fill="none" stroke="#f4bc92" strokeWidth="3"/>
  </g>;
}

function Balloons({ x, y, scale }) {
  return <g className="balloon-bob"><g transform={`translate(${x} ${y}) scale(${scale})`} {...drawing}>
    <path d="M18 64q20 49 23 94M61 52q-7 71-20 106M91 80q-11 40-50 78" fill="none" stroke="#8f6855" strokeWidth="1.5"/>
    <ellipse cx="20" cy="35" rx="19" ry="28" fill="#ed9d90" transform="rotate(-16 20 35)"/>
    <ellipse cx="57" cy="23" rx="21" ry="29" fill="#f4cc76" transform="rotate(11 57 23)"/>
    <ellipse cx="88" cy="54" rx="21" ry="28" fill="#ab9db9" transform="rotate(21 88 54)"/>
    <path d="m21 62-3 7 10-3Zm34-11-4 7 10-1Zm25 27-7 5 10 3Z" fill="#d6958a" strokeWidth="1.5"/>
    <path d="M9 36q-2-11 4-16m34 2q1-13 9-15m22 49q3-11 9-15" fill="none" stroke="#fff0cc" strokeWidth="2.4"/>
  </g></g>;
}

function Garland({ width, text, compact }) {
  const length = compact ? width - 44 : width - 92;
  const count = compact ? 10 : 20;
  return <g {...drawing}>
    <path d={`M${(width-length)/2} 20 Q${width/2} 111 ${(width+length)/2} 20`} fill="none" strokeWidth="1.7"/>
    {Array.from({length:count},(_, i) => {
      const t=(i+.32)/count, x=(width-length)/2 + t*length, y=20+182*t*(1-t);
      return <path key={i} d={`M${x} ${y}l${compact ? 20 : 29} 0 -${compact ? 11 : 15} 19Z`} transform={`rotate(${(0.5-t)*40} ${x} ${y})`} fill={['#e78e79','#f5cb72','#97b39b','#bca9c9'][i%4]} strokeWidth="1.35"/>;
    })}
    <path transform={`translate(${width/2} 73)`} d="M-126 3q126 11 252 0l-8 18 8 16q-126 11-252 0l8-16Z" fill="#f7d38a" strokeWidth="1.8"/>
    <text x={width/2} y="103" fill="#674736" stroke="none" textAnchor="middle" className="room-banner-text">{text}</text>
  </g>;
}

function Cabinet({ x, y, scale }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} {...drawing}>
    <ellipse cx="92" cy="86" rx="90" ry="11" fill="#71513a" opacity=".16" stroke="none"/>
    <path d="M19 65v23h12l4-20m116 0 4 20h12V65" fill="#885c43"/>
    <rect x="14" y="7" width="156" height="66" rx="8" fill="#cc9468"/>
    <rect x="8" width="169" height="13" rx="4" fill="#e7b786"/>
    <rect x="25" y="22" width="62" height="40" rx="5" fill="#e1aa7b" strokeWidth="1.7"/>
    <rect x="98" y="22" width="60" height="40" rx="5" fill="#e1aa7b" strokeWidth="1.7"/>
    <circle cx="76" cy="42" r="3.2" fill="#835a45" stroke="none"/><circle cx="109" cy="42" r="3.2" fill="#835a45" stroke="none"/>
  </g>;
}

function CakeTable({ x, y, scale }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} {...drawing}>
    <ellipse cx="82" cy="87" rx="76" ry="9" fill="#77513a" opacity=".18" stroke="none"/>
    <path d="M17 22l8 68h10l6-63m78-2 6 65h11l9-67" fill="#a66f50"/>
    <path d="M4 9q78-11 156 0v16q-78 30-156 0Z" fill="#b97558"/>
    <ellipse cx="82" cy="13" rx="79" ry="15" fill="#e9ad7e"/>
    <path d="M50 9q36-8 75 0l-5 22q-42 15-68-1Z" fill="#f5d3ac" strokeWidth="1.6"/>
    <path d="m56 28 14 3m8 1 15 1m10-1 13-3" stroke="#d98d76" strokeWidth="1.4"/>
  </g>;
}

export const roomLayouts = {
  wide: { w: 1040, h: 500, floor: 292, props: { quiz:[103,243,142], album:[338,345,131], gift:[556,413,125], cake:[795,326,137], letter:[913,434,137] } },
  tall: { w: 480, h: 577, floor: 306, props: { quiz:[76,293,115], album:[311,327,110], gift:[123,450,106], cake:[352,453,112], letter:[246,531,114] } },
};

export function RoomArt({ compact, birthday }) {
  const { w, h, floor } = compact ? roomLayouts.tall : roomLayouts.wide;
  const id=compact ? 'portrait' : 'wide';
  return <svg viewBox={`0 0 ${w} ${h}`} className="room-art" aria-hidden="true">
    <defs>
      <linearGradient id={`wall-${id}`} x2="0" y2="1"><stop stopColor="#f7dfac"/><stop offset="1" stopColor="#f0ca9d"/></linearGradient>
      <pattern id={`wallpaper-${id}`} width="39" height="39" patternUnits="userSpaceOnUse"><path d="M19 16l3 3-3 3-3-3Z" fill="#a77c57" opacity=".23"/></pattern>
      <pattern id={`wood-${id}`} width="170" height="42" patternUnits="userSpaceOnUse"><path d="M0 1h170m-104 0v20M0 22h170m-30 0v20" fill="none" stroke="#ad7a5b" opacity=".52" strokeWidth="1.3"/><path d="M16 7q13 3 37 0m46 26q21-5 38-1m-98-2 24 2" fill="none" stroke="#bb8762" opacity=".58" strokeWidth="1.1"/></pattern>
    </defs>
    <path d={`M0 0h${w}v${floor}H0Z`} fill={`url(#wall-${id})`}/>
    <path d={`M0 0h${w}v${floor}H0Z`} fill={`url(#wallpaper-${id})`}/>
    <path d={`M0 0h${compact ? 35 : 95}v${floor-13}L0 ${floor+22}Z`} fill="#d9ad84" opacity=".6"/>
    <path d={`M${w-(compact ? 34 : 83)} 0h${compact ? 34 : 83}v${floor+20}l-${compact ? 34 : 83} -33Z`} fill="#d7a67d" opacity=".55"/>
    <path d={`M0 ${floor}h${w}v${h-floor}H0Z`} fill="#e6b487"/>
    <path d={`M0 ${floor+8}h${w}v${h-floor-8}H0Z`} fill={`url(#wood-${id})`}/>
    <path d={`M0 ${floor+16}l${compact ? 35 : 95} -25h${w-(compact ? 69 : 178)}l${compact ? 34 : 83} 25v10l-${compact ? 34 : 83} -24H${compact ? 35 : 95}L0 ${floor+26}Z`} fill="#b17b52" stroke="#8b5e46" strokeWidth="1.6"/>
    <g transform={compact ? 'translate(245 446) scale(.61 1.02)' : 'translate(521 399)'}><ellipse rx="308" ry="79" fill="#76503e" opacity=".14" transform="translate(4 7)"/><ellipse rx="309" ry="79" fill="#d08473" stroke="#875a51" strokeWidth="2"/><ellipse rx="290" ry="67" fill="#efb39b" stroke="#f6d1a9" strokeWidth="2.4"/><ellipse rx="269" ry="57" fill="none" stroke="#cd8877" strokeDasharray="4 6" strokeWidth="1.5"/><Paw transform="translate(176 10) scale(1.18)" fill="#c38073"/><Paw transform="translate(-137 21) scale(.7)" fill="#c38073"/><Paw transform="translate(-164 1) scale(.83)" fill="#c38073"/></g>
    <Window x={compact ? 143 : 429} y={compact ? 121 : 101} scale={compact ? .93 : .99}/>
    <Shelf x={compact ? 7 : 145} y={compact ? 123 : 97} scale={compact ? .73 : 1.01}/>
    <g transform={compact ? 'translate(383 151) rotate(7) scale(.71)' : 'translate(694 115) rotate(7)'} {...drawing}>
      <rect width="61" height="68" rx="4" fill="#c48c62"/><rect x="7" y="7" width="47" height="54" rx="2" fill="#fbebbf" strokeWidth="1.5"/><path d="M10 48q19-24 42-2v12H10Z" fill="#a5b481" stroke="none"/><Star transform="translate(19 14) scale(.92)" fill="#eebf68" stroke="none"/>
    </g>
    <Balloons x={compact ? 371 : 889} y={compact ? 58 : 86} scale={compact ? .68 : .93}/>
    <Garland width={w} text={birthday} compact={compact}/>
    <Sofa x={compact ? 132 : 377} y={compact ? 251 : 220} scale={compact ? .91 : 1.12}/>
    <Cabinet x={compact ? 12 : 27} y={compact ? 312 : 267} scale={compact ? .72 : .92}/>
    {!compact && <CakeTable x={280} y={351} scale={.69}/>}
    <CakeTable x={compact ? 287 : 717} y={compact ? 469 : 355} scale={compact ? .79 : .98}/>
    <Plant x={compact ? 22 : 953} y={compact ? 411 : 252} scale={compact ? .58 : .78}/>
    <g transform={compact ? 'translate(425 510) scale(.8)' : 'translate(718 418) scale(.95)'} fill="#ad7c61" opacity=".65"><Paw/><Paw transform="translate(-23 19) scale(.76)"/><Paw transform="translate(-44 39) scale(.73)"/></g>
    <g fill="#ffe6a2" opacity=".85"><Star transform={compact ? 'translate(112 193) scale(.62)' : 'translate(306 168) scale(.7)'}/><Star transform={compact ? 'translate(365 227) scale(.47)' : 'translate(801 202) scale(.64)'}/><Star transform={compact ? 'translate(47 230) scale(.46)' : 'translate(670 74) scale(.45)'}/></g>
  </svg>;
}
