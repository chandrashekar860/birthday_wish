// Start here. Text built from these three values updates throughout the app.
const name = 'Vino';
const nickname = 'Bubu';
const birthday = 'November 18';
const photo = (file) => `/assets/photos/${file}.jpg`;
const character = (file) => `/assets/characters/shinchan-${file}.png`;
const sound = (file) => `/assets/audio/${file}.mp3`;

export const birthdayContent = {
  title: 'Shinchan’s Secret Birthday Mission',
  club: `${nickname}’s birthday club`,
  birthdayGirl: { name, nickname, birthday },
  intro: {
    edition: 'A secret birthday mission',
    greeting: 'Happy Birthday,',
    invitation: `Someone has made a little world just for you, ${nickname}!`,
    teaser: 'Four little surprises are hiding inside. Come on in!',
    caption: 'One very special day. One very special girl.',
    action: 'Start My Adventure!',
    dialogue: [
      'Hmmm... something feels different today!',
      'WAIT A MINUTE!',
      `It’s ${birthday}!`,
      `That means it’s ${nickname.toUpperCase()}’S BIRTHDAY!!`,
    ],
  },
  characters: { guide: character('guide'), happy: character('happy'), surprised: character('surprised') },
  dialogue: {
    welcome: 'The birthday house is open!',
    house: `Pssst, ${nickname}! Try touching something!`,
    solved: 'Look at you, secret birthday detective!',
    locked: 'That one’s top secret. Find all four surprises first!',
    unlocked: `Okay ${nickname}… there’s one more thing! This one is from someone who loves you very much.`,
    album: 'Officially filed under: very cute.',
    quiz: 'Welcome to my show! The only prize is bragging rights.',
    quizDone: 'That’s a wrap! Ten out of ten for being cute.',
    gift: 'A present with another surprise inside? Excellent work.',
    cake: 'Excellent wishing technique. I give it five candles!',
  },
  photos: { intro: photo('intro-together'), gift: photo('gift-surprise'), final: photo('final-together') },
  // Add, remove, or reorder entries. Keep each id unique; date is optional.
  memories: [
    { id: '01', image: photo('memory-01'), title: 'The beginning', caption: 'Every good story starts somewhere. This is where ours begins.' },
    { id: '02', image: photo('memory-02'), title: 'My favorite smile', caption: 'The one that makes me forget what I was saying.' },
    { id: '03', image: photo('memory-03'), title: 'An ordinary day', caption: 'Funny how an ordinary day with you ends up being my favorite.' },
    { id: '04', image: photo('memory-04'), title: 'A tiny adventure', caption: 'Even a wrong turn feels like a good idea with you.' },
    { id: '05', image: photo('memory-05'), title: 'Just us being us', caption: 'Some jokes only make sense to the two of us. I like those best.' },
    { id: '06', image: photo('memory-06'), title: 'A moment to keep', caption: 'If I could tuck a little moment into my pocket, I’d pick this one.' },
    { id: '07', image: photo('memory-07'), title: 'The good kind of quiet', caption: 'There’s a kind of peace I only find next to you.' },
    { id: '08', image: photo('memory-08'), title: 'More of this, please', caption: 'Here’s to many more days that I wish would go a little slower.' },
  ],
  albumClosing: 'And these are only the beginning of our memories. ❤️',
  // Give both choices their own response. There is no scoring.
  quiz: [
    { id: 1, question: 'Who is cuter?', answers: [{ label: 'Me', response: `Nice try! But ${nickname} wins this one!` }, { label: nickname, response: 'Obviously! Everyone knows that!' }] },
    { id: 2, question: 'Who is more dramatic?', answers: [{ label: 'Me', response: 'And the award for Best Dramatic Sigh goes to… you!' }, { label: nickname, response: 'The judges appreciate a little theatrical flair.' }] },
    { id: 3, question: 'Who gets annoyed first?', answers: [{ label: 'Me', response: 'A snack break has been called by the committee.' }, { label: nickname, response: 'A tiny eye roll is a perfectly valid art form.' }] },
    { id: 4, question: 'Who misses the other more?', answers: [{ label: 'Me', response: 'The studio audience is making a collective “awww.”' }, { label: nickname, response: 'We checked the math. The answer is still “a lot.”' }] },
    { id: 5, question: 'Who is more stubborn?', answers: [{ label: 'Me', response: 'We prefer the technical term: enthusiastically certain.' }, { label: nickname, response: 'Fair, but I suspect this question is still up for debate.' }] },
    { id: 6, question: 'Who gives better hugs?', answers: [{ label: 'Me', response: 'Sounds like we’re going to need a live demonstration.' }, { label: nickname, response: 'Officially certified: extra cozy.' }] },
  ],
  loveNotes: [
    'I love your smile.',
    'You make even normal days special.',
    'I love how adorable you are.',
    'You make my world happier.',
    'Being with you is my favorite thing.',
    'I love the way we laugh at absolutely nothing.',
    'I love you for being you.',
  ],
  giftClosing: 'A little box could never fit all my favorite things about you.',
  cake: {
    greeting: `Make a wish, ${nickname}!`,
    finalMessage: `Happy Birthday, ${nickname}! ❤️`,
    wish: 'My wish is to keep making you smile.',
    candles: 5,
  },
  finalLetter: {
    title: `To my ${nickname},`,
    paragraphs: [
      `Happy Birthday, my ${nickname}. ❤️`,
      'I made this little world for you because I wanted to give you something that could make you smile.',
      'Every moment with you is special to me, and I hope this little surprise makes your birthday a little more beautiful.',
      'You deserve all the happiness in the world.',
      `Happy Birthday, ${name}.`,
    ],
    closing: 'I love you. ❤️',
    finale: `Happy Birthday, ${name} ❤️`,
    signature: `Made with love, just for ${nickname}.`,
    photoCaption: 'My favorite person.',
  },
  audio: {
    background: sound('background-music'), ending: sound('ending-music'),
    click: sound('click'), page: sound('page-flip'), gift: sound('gift-open'), celebration: sound('celebration'),
  },
};
