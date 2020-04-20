let upgrades = {
  "talents": [
    {
      "name": "Elusive",
      "size": "sm",
      "charge_capacity": 1,
      "abilities": [
        {
          "text": "While you defend, you may spend 1 charge to reroll 1 defense die"
        },
        {
          "text": "After you fully execute a red maneuver, recover 1 charge"
        }
      ],
      "cost": 3
    },
    {
      "name": "Outmaneuver",
      "abilities": [
        {
          "text": "While you perform a front arc attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die"
        }
      ],
      "cost": 6
    },
    {
      "name": "Predator",
      "abilities": [
        {
          "text": "While you perform a primary attack, if the defender is in your arc bullseye, you may reroll 1 attack die"
        }
      ],
      "cost": 2
    }
  ],
  "forces": [
    {
      "name": "Heightened Perception",
      "abilities": [
        {
          "text": "At the start of the Engagement Phase, you may spend 1 force. If you do, engage at initiative 7 instead of your standard initiative value this phase"
        }
      ],
      "cost": 3
    },
    {
      "name": "Instinctive Aim",
      "abilities": [
        {
          "text": "While you perform a special attack, you may spend 1 force to ignore the action focus or action lock requirement"
        }
      ],
      "cost": 2
    },
    {
      "name": "Sense",
      "abilities": [
        {
          "text": "During the System Phase, you may choose 1 ship at range 0-1 and look at its dial. If you spend 1 force, you may choose a ship at range 0-3 instead"
        }
      ],
      "cost": 6
    },
    {
      "name": "Supernatural Reflexes",
      "size": "s",
      "abilities": [
        {
          "text": "Before you activate, you may spend 1 force to perform an action barrel roll or action boost action. Then, if you performed an action you do not have on your action bar, suffer 1 damage hit damage"
        }
      ],
      "cost": [4, 4, 4, 8, 16, 24, 32]
    }
  ],
  "torpedoes": [
    {
      "name": "Proton Torpedoes",
      "stats": {
        "weapon": 4,
        "arc": "front",
        "range_min": 2,
        "range_max": 3,
        "range_bonus": false
      },
      "charge_capacity": 2,
      "abilities": [
        {
          "text": "Attack (action lock): Spend 1 charge. Change 1 damage hit result to a damage crit result"
        }
      ],
      "cost": 12
    }
  ],
  "astromechs": [
    {
      "name": "R2 Astromech",
      "charge_capacity": 2,
      "abilities": [
        {
          "text": "After you reveal your dial, you may spend 1 charge and gain 1 disarm token to recover 1 shield"
        }
      ],
      "cost": 4
    },
    {
      "name": "R2-D2",
      "faction": "Rebel",
      "charge_capacity": 3,
      "limited": 1,
      "abilities": [
        {
          "text": "After you reveal your dial, you may spend 1 charge and gain 1 disarm token to recover 1 shield"
        }
      ],
      "cost": 6
    },
    {
      "name": "R3 Astromech",
      "abilities": [
        {
          "text": "You can maintain up to 2 locks. Each lock must be on a different object"
        },
        {
          "text": "After you perform a Target Lock action, you may acquire a lock"
        }
      ],
      "cost": 3
    },
    {
      "name": "R5 Astromech",
      "charge_capacity": 2,
      "abilities": [
        {
          "text": "Action: Spend 1 charge to repair 1 facedown damage card"
        },
        {
          "text": "Action: Repair 1 faceup Ship damage card"
        }
      ],
      "cost": 4
    },
    {
      "name": "R5-D8",
      "faction": "Rebel",
      "charge_capacity": 3,
      "limited": 1,
      "abilities": [
        {
          "text": "Action: Spend 1 Charge to repair 1 facedown damage card"
        },
        {
          "text": "Action: Repair 1 faceup Ship damage card"
        }
      ]
    }
  ],
  "modifications": [
    {
      "name": "Afterburners",
      "size": "s",
      "charge_capacity": 2,
      "abilities": [
        {
          "text": "After you fully execute a speed 3-5 maneuver you may spend 1 charge to perform an action boost action, even while stressed"
        }
      ],
      "cost": 6
    },
    {
      "name": "Hull Upgrade",
      "abilities": [
        {
          "text": "+1 hull"
        }
      ],
      "cost": [2, 3, 5, 7]
    },
    {
      "name": "Shield Upgrade",
      "abilities": [
        {
          "text": "+1 shield"
        }
      ],
      "cost": [3, 4, 6, 8]
    }
  ]
};