// pilots.js

let pilots = {
	"Rebellion": [
	    {
	      "name": "Luke Skywalker",
	      "ship": x_wing,
	      "initiative": 5,
	      "force_capacity": 2,
	      "limited": 1,
	      "upgrade_slots": "force",
	      "abilities": [
	        {
	          "text": "After you become the defender (before dice are rolled), you may recover 1 force"
	        }
	      ],
	      "cost": 62
	    },
	    {
	      "name": "Jek Porkins",
	      "ship": x_wing,
	      "initiative": 4,
	      "limited": 1,
	      "upgrade_slots": "talent",
	      "abilities": [
	        {
	          "text": "After you receive a stress token, you may roll 1 attack die to remove it. On a damage hit result, suffer 1 damage hit damage"
	        }
	      ],
	      "cost": 46
	    },
	    {
	      "name": "Red Squadron Veteran",
	      "ship": x_wing,
	      "initiative": 3,
	      "upgrade_slots": "talent",
	      "cost": 43
	    },
	    {
	      "name": "Blue Squadron Escort",
	      "ship": x_wing,
	      "initiative": 2,
	      "cost": 41
	    }
	],
	"Galactic Empire": [
	    {
	      "name": "Iden Versio",
	      "ship": tie_fighter,
	      "initiative": 4,
	      "charge_capacity": 1,
	      "limited": 1,
	      "upgrade_slots": "talent",
	      "abilities": [
	        {
	          "text": "Before a friendly TIE/In fighter at range 0-1 would suffer one or more damage, you may spend 1 charge. If you do, prevent that damage"
	        }
	      ],
	      "cost": 40
	    },
	    {
	      "name": "Valen Rudor",
	      "ship": tie_fighter,
	      "initiative": 3,
	      "limited": 1,
	      "upgrade_slots": "talent",
	      "abilities": [
	        {
	          "text": "After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action"
	        }
	      ],
	      "cost": 28
	    },
	    {
	      "name": "Black Squadron Ace",
	      "ship": tie_fighter,
	      "initiative": 3,
	      "upgrade_slots": "talent",
	      "cost": 26
	    },
	    {
	      "name": "\"Night Beast\"",
	      "ship": tie_fighter,
	      "initiative": 2,
	      "limited": 1,
	      "abilities": [
	        {
	          "text": "After you fully execute a blue maneuver you may perform an action focus action"
	        }
	      ],
	      "cost": 26
	    },
	    {
	      "name": "Obsidian Squadron Pilot",
	      "ship": tie_fighter,
	      "initiative": 2,
	      "cost": 24
	    },
	    {
	      "name": "Academy Pilot",
	      "ship": tie_fighter,
	      "initiative": 1,
	      "cost": 23
	    }
	]
};