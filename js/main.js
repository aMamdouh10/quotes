var arr =[
    `“Be yourself; everyone else is already taken.”
`,
`“You only live once, but if you do it right, once is enough.”
`,
`“Be the change that you wish to see in the world.”
`,
`“So many books, so little time.”
`,
`“If you tell the truth, you don't have to remember anything.”
`
]

var title =['― Oscar Wilde','― Mae West','― Mahatma Gandhi', 
'― Frank Zappa','― Mark Twain'
]

function generate(){
    document.getElementById('quote').innerHTML = arr[Math.trunc(Math.random()*arr.length)];
    document.getElementById('author').innerHTML = title[Math.trunc(Math.random()*title.length)];
}

















// let arr =[
//     `“Be yourself; everyone else is already taken.”
// ― Oscar Wilde`,
// `“You only live once, but if you do it right, once is enough.”
// ― Mae West`,
// `“Be the change that you wish to see in the world.”
// ― Mahatma Gandhi`,
// `“So many books, so little time.”
// ― Frank Zappa`,
// `“If you tell the truth, you don't have to remember anything.”
// ― Mark Twain`
// ]

// console.log(arr.length);
// console.log(Math.trunc(Math.random()*arr.length));
// console.log(arr[Math.trunc(Math.random()*arr.length)])

// function quots(){
//     // document.write(arr[Math.trunc(Math.random()*arr.length)])
//     document.getElementById('demo').innerHTML = arr[Math.trunc(Math.random()*arr.length)]
// }
// function display(){
//     var author = {"― Oscar Wilde":'"Be yourself; everyone else is already taken."',
//     "― Mae West":'"You only live once, but if you do it right, once is enough."',
//     "― Mahatma Gandhi":'"Be the change that you wish to see in the world."',
//     " ― Frank Zappa":'"So many books, so little time."',
//     "― Mark Twain":'"If you tell the truth, you dont have to remember anything."'
//     }

//     var author = Object.keys(display);
//     // console.log(author)

//     var author = author[Math.trunc(Math.random() * author.length)];
//     var quotes = quotes[author];
//     document.getElementById('quotes').innerHTML = quotes;
//     document.getElementById('title').innerHTML = author;
// }


// <--------------------------------------------------------------------------------------->

// function generate(){
//     var quotes = {"― Oscar Wilde" : '"Be yourself; everyone else is already taken."',"― Mae West" : '"You only live once, but if you do it right, once is enough."',"― Mahatma Gandhi" : '"Be the change that you wish to see in the world."'," ― Frank Zappa" : '"So many books, so little time."',"― Mark Twain" : '"If you tell the truth, you dont have to remember anything."'
//     }

//     var authors = Object.keys(quotes);
//     var author = authors[Math.floor(Math.random() * authors.length)];

//     var quote = quotes[author];


//     document.getElementById('quote').innerHTML = quote;
//     document.getElementById('author').innerHTML = author;

// }



















