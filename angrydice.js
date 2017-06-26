
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
	this.image =0;
	this.held = false;
	this.setVal = function () {
		if (!this.held) {
			this.val = Math.floor(Math.random() * 6) + 1;
			this.render();
		}
		switch (this.value) {
			case 1:
				//change button to one pip
			case 2:
				//change button to two pips
			case 3:

			case 4:

			case 5:

			case 6:
		}
	}
	this.render = function () {
		document.getElementById(this.id).innerHTML = this.val.toString();
	}
};

document.getElementById('roll').addEventListener('click', function (e){
	e.preventDefault();
	die1.setVal();
	die2.setVal();
	checkRound();
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


var die1 = new die('die1');
var die2 = new die('die2');
die1.setVal();
die2.setVal();


console.log(die1);
console.log(die2);
