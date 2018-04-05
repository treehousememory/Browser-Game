
console.log(null);

/* --------------------------------------------------- Start Global Objects -------------------------------------------------------------- */

/* ------------------------------ Game Data ------------------------------ */
var game = { 
	time: 0,
	date: 0,
	location: null,
	inCombat: false
};

/* ------------------------------ Weapons -------------------------------- */

// Ranged Weapons
var gun = {name: "Gun", type: "r", damage: 8};
var melee = {sword: sword};

// Melee Weapons
var sword = {name: "Sword", type: "m", damage: 10};
var ranged = {gun: gun};

/* ------------------------------ Armor ---------------------------------- */

var pants = {dt: 1, dr: 20, s: 5, f: 0, exposed: []};
var bottoms;

var shirt = {dt: 1, dr: 20, s: 5, f: 0, exposed: []};
var tops;

var hat = {dt: 1, dr: 20, s: 5, f: 0};
var headWear;

var gloves = {dt: 1, dr: 20, s: 5, f: 0};
var armWear;

var shoes = {dt: 1, dr: 20, s: 5, f: 0};
var footWear;

var special1 = {dt: 1, dr: 20, s: 5};
var specialWear;

var topUnderWear; 

var bottomUnderWear;

var Armor =  {bottoms: bottoms, tops: tops, headWear: headWear, armWear: armWear, footWear: footWear, specialWear: specialWear, topUnderWear: topUnderWear, bottomUnderWear: bottomUnderWear};

/* ------------------------------ Potions -------------------------------- */

/* ------------------------------ Special -------------------------------- */

/* ------------------------------ NPCs ----------------------------------- */

/* ------------------------------ Enemies -------------------------------- */

var bandit = {name: "Bandit", weapon: melee.sword, inventory: {gold: 10, sword: melee.sword}};



/* ------------------------------ Regions -------------------------------- */
var regions = { 
	pineForest:		{ enemies: [], pickUps: []},
	rainForest: 	{ enemies: [], pickUps: []},
	desert: 		{ enemies: [], pickUps: []},
	winterTundra: 	{ enemies: [], pickUps: []}
};


/* --------------------------------------------------- Start Player Data -------------------------------------------------------------- */

var player = {
	name: "Default", 
	stats: { strength: 3, perception: 3, endurance: 3, charisma: 3, intelligence: 3, agility: 3, luck: 3},
	perks: [],
	effects: [],
	// TODO: add statuses (Hunger, etc)
	status: {
		
	},
	level: 0,
	xp: 0,
	inventory: { 
		capacity: 50, coins: 0,
		weapons: {melee: [], ranged: [], special:[]}, 
		consumables: {potions: [], poisons: []},
		armor: {head: [], chest: [], arms: [], legs: []},
		special: []},
	equipped: {
		weapon: null, 
		head: null, 
		chest: null, 
		arms: null, 
		legs: null, 
		feet: null, 
		special: [] }, 
	accesories: { 
		neck: null,
		rings: [],
		ears: null,
		lips: null,
		mouth: null,
		nose: null,
		belly: null,
		bracelet: null,
		anklet: null }
};

/* --------------------------------------------------- Start Combat Functions -------------------------------------------------------------- */

var combatButtons = ["<div class = "actionbutton" id = "button1">





/* Determines the initiative order of all combatants
*  Takes an array of enemies and allies and uses the player variable
*/
function initiative(combatants) {
	var order = [];
	var max;
	var maxIndex;
	var tempInit
	
	combatants.push(player);
	
	for (i = 0; i < combatants.length - 1; i++) {
		max = Number.MIN_VALUE;
		for (j = i; j < combatants.length; j++) {
			// Calculate initiative
			tempInit = null;
			
			if (tempInit > max) {
				maxIndex = j;
				max = tempInit;
			}
		}
		order.push(combatants[maxIndex]);
	}
	order.push(combatants[combatants.length]);
	
	return order;
}


/* Repeats until the battle is over.
*  
*/
function battle(combatants, hostiles) {
	var order = initiative(combatants);
	var i = 0;
	
	while (hostiles > 0){
		if (order[i] == player) {
			playerCombatAction();
		} else {
			npcCombatAction(order[i]);
		}
		
		if (i = combatants.length) {
			i = 0;
		}
	}

}

function npcCombatAction(combatant) {
	
}

function playerCombatAction() {
	
}


function takeDamage() {
	
}

function attack( attacker, defender) {
	
}

/* --------------------------------------------------- Start Something Else -------------------------------------------------------------- */


/* ------------------------ Random -------------------------- */
function randomObject(list, n) {
	var keys = Object.keys(list);
	var hold;
	
	var index;
	var indexes;
	
	for (var i = 0; i < n; i ++) {
		index = Random() * keys.length;
		if indexes.indexOf(index) != -1)
		  i --;
		else
			indexes.push(index);
	}
	for (var i in indexes) {
		hold.push(list[keys[i]]);
	}	
	
}
	

function printGarbage () {
	console.log("garbage");
}


var text = ["Hello","Hello\nHello", "Goodbye"];
var i = 0;

$("avatar").click(function(){
    $("#sidemenu").html(text.getElementById("text1").html);
});


$(function() {
	
	$("#maindisplaybutton").click(function() {
		$("#maindisplaybutton").html(text[i % 2]);
		i++;
	});
	
	/* $(".actionbutton").hover(
		function() {
			$(this).fadeTo(80, 0.5);
		},
		function() {
			$(this).fadeTo(80, 1);
		}
	); */
	
	$("#avatar").hover(
		function() {
			$(this).fadeTo(80, 0.5);
		},
		function() {
			$(this).fadeTo(80, 1);
		}
	);
	
	
	
});