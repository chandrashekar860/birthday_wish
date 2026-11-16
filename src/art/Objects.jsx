import { Heart, Star } from './Details';

export const ink = '#514034';
export const drawing = { stroke: ink, strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

function AlbumArt() {
  return <g {...drawing}>
    <ellipse cx="80" cy="83" rx="56" ry="9" fill="#534330" opacity=".19" stroke="none"/>
    <path d="m20 55 60-41 61 19v16L83 89 20 71Z" fill="#6d9b83"/>
    <path d="m24 57 57 20 56-39v11L82 86 24 68Z" fill="#fff0cc" strokeWidth="1.8"/>
    <path d="m20 54 60-41 61 19-59 44Z" fill="#a4c6aa"/>
    <path d="M32 47v24m0-24 59-31" stroke="#568873" opacity=".75"/>
    <path d="m56 43 32-22 31 10-31 23Z" fill="#faead0" strokeWidth="1.5"/>
    <Heart transform="translate(79 31) rotate(-21) scale(.74 .54)" fill="#d87569" strokeWidth="1.6"/>
    <path d="m42 54 18 6m43-10 19-13m-92 28 44 17" stroke="#777148" strokeWidth="1.3"/>
    <path d="m111 61 9-6v12l-5-2-4 6Z" fill="#df816e" strokeWidth="1.5"/>
  </g>;
}

function TelevisionArt() {
  return <g {...drawing}>
    <ellipse cx="83" cy="107" rx="61" ry="8" fill="#534330" opacity=".18" stroke="none"/>
    <path d="m71 28-16-22m17 19L100 6" fill="none"/><circle cx="55" cy="6" r="3" fill="#f3cb75"/><circle cx="100" cy="6" r="3" fill="#f3cb75"/>
    <path d="M39 92v15h12l5-13m49 0 5 13h12V92" fill="#704e46"/>
    <rect x="19" y="24" width="125" height="74" rx="16" fill="#9a82a9"/>
    <rect x="26" y="29" width="111" height="61" rx="12" fill="#b6a2c0" strokeWidth="1.6"/>
    <rect x="32" y="35" width="75" height="49" rx="13" fill="#536667"/>
    <rect x="39" y="40" width="62" height="38" rx="10" fill="#9abbb0" strokeWidth="1.6"/>
    <path d="m44 55 13-9m-12 16 21-16" stroke="#d3e1c9" strokeWidth="2"/>
    <Star transform="translate(67 49) scale(.76)" fill="#fff0b0" strokeWidth="1.4"/>
    <circle cx="121" cy="46" r="6" fill="#f7d082" strokeWidth="1.6"/><path d="m121 45 3-2" strokeWidth="1.4"/>
    <path d="M115 61h12m-12 5h12m-12 5h12m-12 5h12" strokeWidth="1.5"/>
    <circle cx="121" cy="84" r="2" fill="#df745c" stroke="none"/>
  </g>;
}

function GiftArt({ opened = false }) {
  return <g {...drawing}>
    <ellipse cx="80" cy="126" rx="58" ry="8" fill="#553e26" opacity=".15" stroke="none"/>
    <path d="m29 65 74-12 27 17v40l-28 14-73-16Z" fill="#e68676"/>
    <path d="m101 68 29 2v40l-28 14Z" fill="#c96353"/>
    <path d="m56 70 18 2v45l-18-4Z" fill="#f4c565" strokeWidth="1.8"/>
    <path d="m104 79 25-10v11l-25 12" fill="#efa151" strokeWidth="1.6" opacity=".65"/>
    <g className={opened ? 'gift-lid gift-lid-open' : 'gift-lid'}>
      <path d="m23 56 38-18 49 5 27 15-34 18Z" fill="#f2a194"/>
      <path d="m23 55 80 13 34-11v16l-34 12-80-15Z" fill="#e98170"/>
      <path d="m49 60 34-18 20 0-34 22v15l-19-3Z" fill="#ffe092" strokeWidth="1.7"/>
      <path d="m74 50 9-11 43 15-10 7Z" fill="#f5c466" strokeWidth="1.7"/>
      <g className={opened ? 'gift-ribbon gift-ribbon-loose' : 'gift-ribbon'}>
        <path d="M78 49Q49 13 42 25c-12 16 10 28 36 24Zm1 0q20-39 34-28c8 14-3 26-34 28Z" fill="#f8cc6e"/>
        <path d="M78 48q-27-5-30-17m31 17q22-8 27-20" fill="none" stroke="#ac7844" strokeWidth="1.6"/>
        <path d="M79 45q-5 9-2 23l11-6 10 5q-4-14-15-22" fill="#f9d17d" strokeWidth="1.6"/>
        <ellipse cx="80" cy="47" rx="8" ry="6" fill="#ffdf89" strokeWidth="1.8"/>
      </g>
    </g>
    <g fill="#f9b8a0" stroke="none" opacity=".8"><circle cx="40" cy="86" r="2"/><circle cx="46" cy="99" r="2"/><circle cx="86" cy="97" r="2"/><circle cx="87" cy="109" r="2"/><circle cx="118" cy="99" r="2"/></g>
  </g>;
}

export function CakeLayers() {
  return <g {...drawing}>
    <ellipse cx="160" cy="238" rx="133" ry="16" fill="#775744" opacity=".15" stroke="none"/>
    <path d="M50 216q7 24 111 24t111-24v-10H50Z" fill="#8fae91"/>
    <ellipse cx="161" cy="206" rx="111" ry="22" fill="#c5d2a7"/>
    <path d="M67 155h187v44q-2 24-93 25-93-1-94-25Z" fill="#df9f72"/>
    <path d="M67 184q34 19 94 19t93-19v9q-35 18-93 18t-94-18Z" fill="#f3bc86" stroke="none"/>
    <path d="M67 153c0-29 185-29 187 0v15q-4 19-14 14-9-2-10-11-5 21-16 15-7-5-7-11-9 23-21 17-6-2-8-10-11 19-23 11-6-3-6-11-18 18-26 6-5-4-4-10-16 14-25 2-3-5-2-8-17 6-25-8Z" fill="#f6c9bc"/>
    <ellipse cx="161" cy="146" rx="92" ry="26" fill="#ffe4d0"/>
    <path d="M97 108h128v33q-3 20-64 20-60-1-64-19Z" fill="#e9ad7a"/>
    <path d="M97 109q0-22 64-22 63-1 64 22v12q-7 15-17 6-5 15-17 9-5-3-5-8-12 17-24 6l-4-5q-12 13-23 4l-4-6q-15 13-22-3-11 4-12-6Z" fill="#f5c3b5"/>
    <ellipse cx="161" cy="104" rx="64" ry="21" fill="#ffe9d4"/>
    <path d="M103 187q60 15 115 1" fill="none" stroke="#fff0cc" strokeWidth="2" strokeDasharray="2 7"/>
    <path d="M113 105q11 9 28 9m38-10q11-2 20-7m-111 55q13 6 31 7m91-3q15-3 21-8" fill="none" stroke="#e8aeaa" strokeWidth="1.8"/>
    {[90, 120, 201, 232].map((x, i) => <g key={x} transform={`translate(${x} ${[142,155,154,141][i]})`}><path d="M-7 0q-3-11 5-11 4-4 8 2 7 2 2 9-6 10-15 0Z" fill="#df7568" strokeWidth="1.6"/><path d="M-3-10q1-6 8-5l-2 5 6 1" fill="#84a779" strokeWidth="1.4"/><path d="m-2-4 1-1m2 5 1-1" stroke="#ffd8ab" strokeWidth="1.4"/></g>)}
  </g>;
}

function CakeIcon() {
  return <g transform="translate(-2 -1) scale(.51)">
    <CakeLayers/>
    {[122,148,175,200].map((x,i) => <g key={x} transform={`translate(${x} ${i === 1 || i === 2 ? 0 : 8})`} {...drawing}><rect x="-4" y="61" width="8" height="43" rx="3" fill={i % 2 ? '#92b39c' : '#e98979'}/><path d="M0 40q-15 20 0 20 13-1 0-20Z" fill="#ffcb61"/><path d="m-3 75 6-3m-6 13 6-3m-6 13 6-3" stroke="#fff0ca" strokeWidth="2"/></g>)}
  </g>;
}

function LetterArt({ opened = false }) {
  return <g {...drawing}>
    <ellipse cx="80" cy="100" rx="56" ry="7" fill="#6e4a30" opacity=".18" stroke="none"/>
    <rect x="20" y="35" width="120" height="60" rx="7" fill="#edb394"/>
    <path d="M23 91 67 60h25l45 31" fill="#f6c4a6" strokeWidth="1.8"/>
    <g className={opened ? 'envelope-flap envelope-open' : 'envelope-flap'}>
      <path d="M21 39q0-4 7-4h105q6 0 6 4L87 70q-8 5-14 0Z" fill="#ffe0bc" strokeWidth="2"/>
      <circle cx="80" cy="70" r="12" fill="#c86459" strokeWidth="1.8"/>
      <Heart transform="translate(73 63) scale(.58)" fill="#f5a18d" stroke="none"/>
    </g>
    <path d="m31 83 17-12m80 11-12-9" stroke="#f5dbbd" strokeWidth="1.7"/>
  </g>;
}

const arts = { album: AlbumArt, quiz: TelevisionArt, gift: GiftArt, cake: CakeIcon, letter: LetterArt };
const bounds = { album: '7 4 146 96', quiz: '7 0 148 119', gift: '9 11 140 126', cake: '12 15 136 112', letter: '9 18 142 93' };
export function ObjectArt({ type, opened, className }) {
  const Art = arts[type];
  return <svg className={className} viewBox={bounds[type]} aria-hidden="true"><Art opened={opened}/></svg>;
}
