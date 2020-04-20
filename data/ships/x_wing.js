let x_wing = {
  "name": "T-65 X-Wing",
  "image_key": "x_wing",
  "stats": {
    "arc": "front",
    "weapon": 3,
    "agility": 2,
    "hull": 4,
    "shield": 2
  },
  "actions": ["focus", "lock", "barrel_roll"],
  "size": "s",
  "upgrade_slots": ["torpedo", "astromech", "modification", "configuration"],
  "maneuvers": [
    "S4w",               "K4r",
    "S3w", "B3w", "T3w", "R3r",
    "S2b", "B2b", "T2w",
    "S1b", "B1b"
  ],
  "configurations": [
    {
      "name": "Servomotor S-foils (Open)",
      "abilities": [
        {
          "text": "Before you activate, you may flip this card"
        }
      ],
      "cost": 0
    },
    {
      "name": "Servomotor S-foils (Closed)",
      "abilities": [
        {
          "text": "While you perform a primary attack, roll 1 fewer attack die"
        },
        {
          "text": "Before you activate, you may flip this card"
        },
        {
          "text": "Add Action: action boost"
        },
        {
          "text": "Add Action: action focus -> action boost red"
        }
      ]
    }
  ]
}