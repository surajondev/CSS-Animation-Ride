let cards = [
  {
    artName: 'Round and Round',
    pageLink: './Animations/davidbru/index.html',
    imageLink: './Animations/davidbru/roundAndRound.gif',
    author: 'davidbru',
    githubLink: 'https://github.com/davidbru'
  },

  {
    artName: 'Bulbasaur-Button',
    pageLink: './Animations/Bulbasaur-Button/index.html',
    imageLink: './Animations/Bulbasaur-Button/bulbutton.gif',
    author: 'HarshJa1n',
    githubLink: 'https://github.com/HarshJa1n'
  },
  
  {
    artName: 'Bouncing ball',
    pageLink: './Animations/pavankumarraju13/index.html',
    imageLink: './Animations/ball_bounce_.gif',
    author: 'pavankumarraju13',
    githubLink: 'https://github.com/pavankumarraju13'
  }
];

let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([
    `<li class="card">` +
      `<a href='${c.pageLink}'>` +
      `<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
      `</a>` +
      `<div class="flex-content">` +
      `<a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a>` +
      `<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
      `</div>` +
      `</li>`,
  ]);
});

document.getElementById("cards").innerHTML = contents;

function Shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
