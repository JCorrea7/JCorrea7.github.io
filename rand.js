var pickButton;
var header;
var body;
var choice;
var aList;

var students = [
 ["Kevin", false],
 ["Jonathan", false],
 ["Angel", false],
 ["Eric", false],
 ["Janette", false],
 ["Desmond", false],
 ["Ashiya", false],
 ["Monica", false],
 ["Susana", false],
 ["Deborah", false],
 ["Thomas", false],
 ["Julissa", false],
 ["Kyla", false],
 ["John", false],
 ["Shonica", false],
 ["Krystal", false]
];

var colors = [
  'neongreen',
  'white', 0,
  'fuchsia',
  'yellow', 0,
  'purple', 0
];
var cur = 0;
var studentCount = students.length;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let ul = document.createElement('ul');
    ul.innerText = students[i];
    aList.append(ul);
  }
});

var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students[Math.floor(Math.random() * students.length)];
  var x = window.setInterval(() => {
    window.clearInterval(x);
    cur = 0;
    if(!rand[1])
  }
      choice.innerText = rand[0];
      rand[1] = true;
      studentCount--;
  }
   if(studentCount <= 0)
  choice.innerText = "All Students Picked!";
      return;
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var removeClicked = function(studentName)
   {
     let student =students.find(s =>

var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
    removeClicked(event.target.innerText);
  }
}
