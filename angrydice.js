
'use strict';

var held = false;
var round = 1;
var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;
var six = 6;

function changeRound() {
	document.getElementById('roundNumber').innerHTML = round.toString();
	console.log(round);
}

function releaseHold () {
	die1.held = false;
	die2.held = false;
	document.getElementById(die1.id).style.borderColor = 'black';
	document.getElementById(die2.id).style.borderColor = 'black';
}

function checkRound() {
	if (die1.val === die2.val && die1.val ===3) {
		round = 1;
		changeRound();
		releaseHold();
	} else if (round === 1 && die1.val + die2.val === 3) {
		round = 2;
		changeRound();
		releaseHold();
	} else if (round === 2 && (Math.pow(die1.val, 2) + Math.pow(die2.val, 2) === 25)) {
		round = 3;
		changeRound();
		releaseHold();
	} else if (round === 3 && die1.val + die2.val === 11) {
	   round = 'win';
	   changeRound();
	   releaseHold();
	}	   
}
	
function die (id) {
	this.id = id;
	this.value = 1;	
	this.held = false;
	this.setVal = function () {
		if (!this.held) {
			this.value = Math.floor(Math.random() * 6) + 1;
			this.render();
		}
			
	}
	this.render = function () {
		document.getElementById(this.id).innerHTML = this.value.toString();
	}
};

var die1 = new die("die1");
var die2 = new die("die2");

function changeDicePic (die) {
	console.log(die.value);
	if (die.value == 1) {
		document.getElementById(die.id).src = "1.png";
	} else if (die.value == 2) {
		document.getElementById(die.id).src = "2.png";
	} else if (die.value == 3) {
		document.getElementById(die.id).src = "angry.png";
	} else if (die.value == 4) {
		document.getElementById(die.id).src = "4.png";
	} else if (die.value == 5) {
		document.getElementById(die.id).src = "5.png";
	} else if (die.value == 6) {
		document.getElementById(die.id).src = "6.png";
		}
};

document.getElementById('roll').addEventListener('click', function (e){
	e.preventDefault();
	die1.setVal();
	die2.setVal();
	changeDicePic(die1);
	changeDicePic(die2);
	checkRound();
//	console.log(die1.val);
//	console.log(die2.val);
});

document.getElementById('reset').addEventListener('click', function (e){
	e.preventDefault();
	releaseHold();
	die1.setVal();
	die2.setVal();
	document.getElementById('roundNumber').innerHTML = '1';
});



var dieDivs = document.getElementsByClassName('dieClick');

Array.from(dieDivs).forEach(function (element) {
	element.addEventListener('click', function () {
		console.log(this.id);
		if (this.id === 'die1' && !die1.held && !(this.val == 6)) {
			if (die1.held !== 6 ) {
			die1.held = true;
			this.style.borderColor = 'red';
			}
		} else if (this.id ==='die1' && die1.held) {
		  	die1.held = false;
			this.style.borderColor = 'black';
		} else if (this.id ==='die2' && !die2.held) {
			if (die2.val !==6) {
			die2.held = true
			this.style.borderColor = 'red';
			}
		} else if (this.id ==='die2' && die2.held) {
			die2.held = false;
			this.style.borderColor = 'black';
		}
	}
	//this.held = (this.val == 6) false;
	)
});





