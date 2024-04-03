

//variables set for each timeslot textarea and button

var timeDisplayE1 = $('#time-display');
var btn9 = $('.btn9');
var area9 = $('.area9');
var btn10 = $('.btn10');
var area10 = $('.area10');
var btn11 = $('.btn11');
var area11 = $('.area11');
var btn12 = $('.btn12');
var area12 = $('.area12');
var btn1 = $('.btn1');
var area1 = $('.area1');
var btn2 = $('.btn2');
var area2 = $('.area2');
var btn3 = $('.btn3');
var area3 = $('.area3');
var btn4 = $('.btn4');
var area4 = $('.area4');
var btn5 = $('.btn5');
var area5 = $('.area5');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour1 = $('#hour-1');
var hour2 = $('#hour-2');
var hour3 = $('#hour-3');
var hour4 = $('#hour-4');
var hour5 = $('#hour-5');


//function to display current time in header.
function displayTime(){
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayE1.text(rightNow);
}

//function to display ticking seconds
setInterval(displayTime, 1000);



//sets text to local storage
btn9.on('click', function(){
  localStorage.setItem('Item9', area9.val());
})

btn10.on('click', function(){
  localStorage.setItem('Item10', area10.val());
})

btn11.on('click', function(){
  localStorage.setItem('Item11', area11.val());
})

btn12.on('click', function(){
  localStorage.setItem('Item12', area12.val());
})

btn1.on('click', function(){
  localStorage.setItem('Item1', area1.val());
})

btn2.on('click', function(){
  localStorage.setItem('Item2', area2.val());
})

btn3.on('click', function(){
  localStorage.setItem('Item3', area3.val());
})

btn4.on('click', function(){
  localStorage.setItem('Item4', area4.val());
})

btn5.on('click', function(){
  localStorage.setItem('Item5', area5.val());
})

//Storage Items retrieved
var text9 = localStorage.getItem('Item9');
var text10 = localStorage.getItem('Item10');
var text11 = localStorage.getItem('Item11');
var text12 = localStorage.getItem('Item12');
var text1 = localStorage.getItem('Item1');
var text2 = localStorage.getItem('Item2');
var text3 = localStorage.getItem('Item3');
var text4 = localStorage.getItem('Item4');
var text5 = localStorage.getItem('Item5');

//list items created with text retrieved from local storage
var listhour9 = $('#listHour9');

var list9 = [];

list9.push(text9);
listhour9.append(list9);


var listhour10 = $('#listHour10');

var list10 = [];

list10.push(text10);
listhour10.append(list10);

var listhour11 = $('#listHour11');

var list11 = [];

list11.push(text11);
listhour11.append(list11);

var listhour12 = $('#listHour12');

var list12 = [];

list12.push(text12);
listhour12.append(list12);

var listhour1 = $('#listHour1');

var list1 = [];

list1.push(text1);
listhour1.append(list1);

var listhour2 = $('#listhour2');

var list2 = [];

list2.push(text2);
listhour2.append(list2);

var listhour3 = $('#listHour3');

var list3 = [];

list3.push(text3);
listhour3.append(list3);

var listhour4 = $('#listHour4');

var list4 = [];

list4.push(text4);
listhour4.append(list4);

var listhour5 = $('#listHour5');

var list5 = [];

list5.push(text5);
listhour5.append(list5);