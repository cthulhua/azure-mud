// To do: make whole section no-video
/* eslint-disable quotes */

export const oldHubRoomData = {
  ASCII: {
    id: 'ASCII',
    displayName: 'The Hash Mark Dungeon',
    shortName: '# dungeon',
    description: 'The entire square tile you are standing on vibrates, and the world around you changes - you have entered an older time. The walls are made out of #, you can easily see the . at your feet, and your old powers of audio and video do not work here.</br></br>A row of twelve headstones stand in a line. They are all blank, except for the seventh, which is engraved with \'7 - A\'. Behind them stand three statues - a hobbit, a tree, and a crocodile. Each has a riddle engraved in its base.</br></br>A door behind you leads through the twisty passages, back to the [[Space Hanger->sfHub]].',
    hasNoteWall: true,
    hidden: true,
    noMediaChat: true,
    noteWallData: {
      roomWallDescription: 'Do you want your possessions identified?',
      noteWallButton: 'y/n/q',
      addNoteLinkText: 'Tell a story',
      addNotePrompt: 'Tell us of yet another sad/silly/surprising death you\'ve experienced in any roguelike.',
      noteWallDescription: 'Tales of sad, silly, and surprising deaths in roguelikes of all kinds!'
    },
    riddles: [
      'There once was a roguelike programmer,\nWhose game worked procedurally;\nThe output was same-y:\nThe play of the game-y,\nWas ten thousand bowls of me.',
      'Before I went a-questing,\nI was but a simple tree;\n\'Til once an artificer came,\nAnd cut myself from me;\nThe energies in me infused,\nI cannot understand;\nBut take my firmly in thy grip,\nAnd lightning you\'ll command.',
      'I don\'t quite belong here,\nThat much is clear;\nThe brochure understated,\nThe peril and fear;\nBut I set to make the best of it,\nAnd site-see what I can;\nI took lots of photos,\nOf the things from which I ran.'
    ]
  },
  Oracle: {
    id: 'Oracle',
    displayName: 'Oracle',
    shortName: 'oracle',
    hidden: true,
    noMediaChat: true,
    description: 'This peaceful space is decorated with burbling fountains, stately marble columns, and finely carved statues of centaurs in various poses. A small temple is the focal point. There is a bowl of fortune cookies labeled [["minor consultations"->getFortune]], or head back to the [[dungeon you came from->ASCII]].'
  },
  jelly: {
    id: 'jelly',
    displayName: 'Gelatinous Throne',
    shortName: 'jelly throne room',
    description: 'Get yourself a slime friend here! Or go [[back->ASCII]].',
    noMediaChat: true,
    hidden: true
  },
  wildchaospit: {
    id: 'wildchaospit',
    displayName: 'The Wild Chaos Pit',
    shortName: 'wild chaos pit',
    hidden: true,
    noMediaChat: true,
    description: `You invoke the spell you've discovered and the world melts around you. You had been standing in the conference hall; now you're floating in an endless abyss. No, that's not right: you're *falling through* it, from the material plane to a realm of pure, elemental chaos. Wild, fantastical shapes emerge from swirling mists as you descend, nightmares made real that advance upon you only to be torn apart and dissolve back into mist. Eventually your hellish journey ends and you land, with essentially no fanfare, at the very center of the Wild Chaos Pit.
    </br></br>You're in a small room with off-white walls and no exits. There's a desk with some kind of demon in a poorly fitted suit, typing away on a computer terminal. It spares you a glance as you enter and greets you in a droning monotone. ""Oh, hello. Welcome to the Wild Chaos Pit. Cower in fear at our terrifying splendor."" The demon gestures to an inspiration poster of a skeleton hanging from a telephone wire as evidence of this. ""We would like to take this opportunity to thank you for your assistance in our mission. The forces of Chaos have had a great quarter, and we could not have succeeded in meeting our operational goals without the dedication and support of you, the player. Please avail yourself of our fabulous facilities before returning to your realm."" The demon, their speech finished, turns their attention back to the computer. Without looking up, they drone: ""Oh, my apologies. Before returning to your realm, *mortal*.""
    </br></br>Apart from the desk and skeleton poster, the room is minimally furnished. Beneath a banner that says ""Division Leaders 3Q21! Grab your Swag!"" there's a large pile of what appear to be Orbs of Zot. Another, even bigger pile contains what must be thousands of Amulets of Yendor, and the third ""pile"" is a single, already-opened box of 8 crayons.</br></br>""Exit through the gift shop,"" says the demon. ""Emphasis on exit."" They nod at the other end of the room, where four pentagrams are etched into the floor.
    </br></br>One pentagram looks very [[high tech->pentagramHighTech]]. Another is more [[minimalist and austere->pentagramMinimalist]]. A third is [[wavey and almost comical->pentagramComical]]. The last pentagram seems somehow [[extremely normal->pentagramNormal]].`
  },
  wand: {
    id: 'wand',
    displayName: 'Wand',
    shortName: 'The Wand',
    hidden: true,
    noMediaChat: false,
    description: `You're transported to a grove of impossibly tall silver trees. Golden leaves the size of your head float gently down from distant boughs. The air feels thick with some kind of energy that makes your hair stand on end and your teeth buzz. An alter of hewn stone sits ahead of you, and on it rests a single Tarot card depicting a hand emerging from a thundercloud to grasping a single branch: the Ace of Wands. Someone has affixed three more tarot cards to trees lining the clearing with brass pins: the Five of Swords, the Nine of Pentacles and the Page of Cups. On closer inspection, there's a riddle scrawled on each of these cards.`,
    riddles: [
      "Be careful, brave adventurer, should you and I e'er meet;\nFor e'en should you vanquish me (to be clear: quite the feat);\nI shan't e'en then be through with you; I'll catch you unawares;\nTake caution all who'd wield my flesh: thine enemy is stairs.",
      "Thou scurrilous rogue!\nThou trecherous rake!\nThou shouldst not do over-\nThou didst a mistake!\nBut hark- thou hast backups?\nThen so mote it be.\nThou sullied thine honor,\nWhen thou performed me.",
      "Value me as you do life,\nFor what I am is you;\nAnd if perchance some loot should drop,\nWe'll both get something new;\nI may be limited in scope,\nOr by what you'll endure;\nIn either case our goal's the same:\nTo live is to procure."
    ]
  },
  identify: {
    id: 'identify',
    displayName: 'Identify',
    shortName: 'Identify',
    hidden: true,
    noMediaChat: false,
    description: `You're in a room dominated by a single large tome on a table. On the cover of the book, letters inlaid with gold leaf read "It Is What It Is, Part 2: Clear Potion through Frotz, Scroll of". Flipping through the book you find it's filled with thousands of tables allowing you to look up any object based on its weight, appearance, general shape, and what merchants might offer for it (so long as the item is in its alphabetical range). You're struck with the notion that some might seek to sit down and memorize the thing in full.`
  },
  losing: {
    id: 'losing',
    displayName: 'Losing',
    shortName: 'losing',
    hidden: true,
    noMediaChat: false,
    description: `You find yourself in the remains of a once-might fortress of the dwarves. Signs of struggle are everywhere. Struggle, and a truly staggering amount of lava. Really, whose idea was all the lava? You get the sense that maybe it was meant to be a defensive measure but it clearly backfired spectacularly. Oh well, it was probably Fun while it lasted. Admist the ruins you find an intact marble chair, finely crafted, and embellished with what appear to be scenes of the invasion that destroyed the fortress. The art conveys a fell mood and relates to the number 3.`
  },
  dungeon: {
    id: 'dungeon',
    displayName: 'Dungeon',
    shortName: 'The Dungeon',
    hidden: true,
    noMediaChat: false,
    description: `You find yourself in a maze of twisty little passages, all alike. From down some of the corridors you can hear distant echoing noises that suggest there may be more than just riddle-solving adventurers lurking in these halls. The dungeon is damp, and dark, and your torch only illuminates a few dozen feet away from you before the darkness takes over. An shelf set into the wall here holds 4 candles. There are also two tomes. The leather cover of one has what appears to be a tower embossed in it; the other is absolutely blank.`,
    riddles: [
      `Tis not thy hands that move, but mine;
      To beat the march of death.
      And while I shan't count minutes;
      Thou shalt count thine every breath.
      A goblin's dirk's is deadly, yes-
      But once they're slain, benign.
      I'll motivate thy progress, friend:
      Starvation takes its time.`,
      `Before thou shuffle thyself off,
      Of yonder mortal coil;
      Consider thee thine life so far,
      A path of strife and toil;
      Unique; alone; a one-off trek
      No mortal should endure it.
      Fear not- thou shalt but start again.
      In fact, I will ensure it.`
    ]
  },
  hunger: {
    id: 'hunger',
    displayName: 'Hunger',
    shortName: 'Hunger',
    hidden: true,
    noMediaChat: false,
    description: `In a flash you are in a village square. Everything is muted brown and gray. A cold, dry wind blows, and pushes gentle waves of dust across the cobblestones at your feat. In the distance, beyond the village, you can see what must once have been verdant, fertile fields, dried out and dead. Above you, towering over the remains of a church, is a tower clock. The minute hand must have been lost long ago, perhaps stolen, but the hour hand remains stuck on 6. The dark, billowing clouds above you offer no rain: only a nebulous and unstated threat. Your stomach growls; it feels like ages since you've had a bite to eat.`
  },
  oatmeal: {
    id: 'oatmeal',
    displayName: 'Oatmeal',
    shortName: 'Oatmeal',
    hidden: true,
    noMediaChat: false,
    description: `Wow, this place is... something. You're in an endless pool of oatmeal, stretching from horizon to horizon. The area near you has some raisins in it. A little further off you can see that the surface of the oatmeal is dusted with cinnamon. But it's all oatmeal. The only features of note are within the small island you find yourself on, a large, looping pile of loose, dry oats in the shape of a figure 8. Floating in each hollow of the 8 is a bowl of cereal; it looks like the kind where each piece is a letter of the alphabet? Perhaps they have a message for you.`,
    riddles: [
      `Some call me a game;\n
      Some call me a chore;\n
      Some call me a risk;\n
      Some call me a bore;\n
      Without me you cannot,\n
      Know what is in store;\n
      'Til you quaff that potion,\n
      You will not be sure.`,
      `When the ceilings collapsed,\n
      When the barricades fell,\n
      When the lava pipes burst,\n
      And the halls turned to hell;\n
      When the arrows of kobolds,\n
      Blotted out the noon sun,\n
      Said one dwarf to the other:\n
      Well, *this* is fun.`
    ]
  },
  savescum: {
    id: 'savescum',
    displayName: 'Savescum',
    shortName: 'savescum',
    hidden: true,
    noMediaChat: false,
    description: ''
  },
  permadeath: {
    id: 'permadeath',
    displayName: 'Permadeath',
    shortName: 'permadeath',
    hidden: true,
    noMediaChat: false,
    description: `You have a sudden vision of archaeological dig, the sun hot above you, the remnants of ancient Babylon below. On a table in front of you, one of your research assistants has laid out a series of stone tablets. The medium was a demanding one for the written word; any mistake would be immutable, as eternal as the stone itself. The original author seemed to be working towards something, but each time made a mistake in the telling and was forced to start over. Despite this, you notice differences in each attempt; the stories, despite the same goal, diverged as the stone carver repeatedly attempted to complete their tale. "How many tablets did we find?" you ask your assistant. The grad student responds, "We found 10, professor."`
  },
  inventory: {
    id: 'inventory',
    displayName: 'Inventory',
    shortName: 'inventory',
    hidden: true,
    noMediaChat: false,
    description: ''
  }
}
/* eslint-enable quotes */
