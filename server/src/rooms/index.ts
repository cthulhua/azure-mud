import northShowcaseHall from './northShowcaseHall'
import southShowcaseHall from './southShowcaseHall'
import eastShowcaseHall from './eastShowcaseHall'
import westShowcaseHall from './westShowcaseHall'
import { unconference, minetown, oracle, tower, castle, sokoban, astralPlane } from './unconfRooms'
import theater from './theater'
import { loungeDungeonRoomData } from './loungeDungeon'

export interface NoteWallData {
  roomWallDescription: string
  noteWallButton: string
  addNoteLinkText: string
  addNotePrompt: string
  noteWallDescription: string
}

export enum SpecialFeature {
  RainbowDoor = 'RAINBOW_DOOR',
  DullDoor = 'DULL_DOOR',
  FullRoomIndex = 'FULL_ROOM_INDEX',
  VendingMachine = 'VENDING_MACHINE'
}

export interface Room {
  // e.g. "kitchen"
  id: string

  // e.g. "GitHub HQ: Kitchen"
  displayName: string

  // e.g. "the kitchen"
  shortName: string

  description: string

  // If true, webRTC audio/video chat can happen
  allowsMedia?: boolean

  // Indicates whether the room should let users place post-it notes
  // As we add more pieces of one-off functionality,
  // having a bunch of ad-hoc flags like this will probably get frustrating quickly.
  // We may want to eventually refactor to something resembling an ECS.
  hasNoteWall?: boolean
  noteWallData?: NoteWallData

  // If true, don't show the room in the side list
  hidden?: boolean

  specialFeatures?: SpecialFeature[]
}

const indexRoomData: { [name: string]: Room } = {
  theater,
  northShowcaseHall,
  eastShowcaseHall,
  southShowcaseHall,
  westShowcaseHall,
  unconference,
  minetown,
  oracle,
  tower,
  castle,
  sokoban,
  astralPlane,
  kitchen: {
    id: 'kitchen',
    displayName: 'Kitchen',
    shortName: 'the kitchen',
    description: `A series of long picnic tables made of rustic wood abut a stainless steel kitchen island. There are empty samovars of coffee and tea sitting on the counter and a well-picked-over catering tray that, based on the crumbs, once contained pastries.<br/><br/>
    There is, however, a curious-looking vending machine labelled "Munxip's Magnifient Munchies" and a button you can press marked [[Get Random Food->generateFood]].
    <br/><br/>
      There are three tables you can sit at, labelled [[A->kitchenTableA]], [[B->kitchenTableB]], and [[C->kitchenTableC]]. You can also walk over to the [[lounge]], the [[bar]], the [[dance floor->danceFloor]], the [[@-sign statue->statue]] or grab a seat in the [[main theater area->theater]]. Finally, you can climb into the [[shipping container->shippingContainer]].`,
    allowsMedia: true,
    hasNoteWall: true
  },
  kitchenTableA: {
    id: 'kitchenTableA',
    displayName: 'Kitchen Table A',
    shortName: 'table A in the kitchen',
    description: `A rustic wooden picnic table in the kitchen.
      From here, you can see tables [[B->kitchenTableB]] or [[C->kitchenTableC]], and the [[general kitchen area->kitchen]]`,
    allowsMedia: true
  },
  kitchenTableB: {
    id: 'kitchenTableB',
    displayName: 'Kitchen Table B',
    shortName: 'table B in the kitchen',
    description: `A rustic wooden picnic table in the kitchen.
      From here, you can see tables [[A->kitchenTableA]] or [[C->kitchenTableC]], and the [[general kitchen area->kitchen]]`,
    allowsMedia: true
  },
  kitchenTableC: {
    id: 'kitchenTableC',
    displayName: 'Kitchen Table C',
    shortName: 'table C in the kitchen',
    description: `A rustic wooden picnic table in the kitchen.
      From here, you can see tables [[A->kitchenTableA]] or [[B->kitchenTableB]], and the [[general kitchen area->kitchen]]`,
    allowsMedia: true
  },
  bar: {
    id: 'bar',
    displayName: 'Bar',
    shortName: 'the bar',
    description: 'A beautiful long bar with hundreds of bottles spanning up to the ceiling. A friendly bartender will happily make you whatever you want. A laminated sign on the bartop advertises tonight\'s specials: the Tourist (a non-alcoholic drink with lots of fruit and a fun umbrella), the Berlin Interpretation (a mojito made with some sort of hyper-caffeinated soda), and the Walls Are Shifting (a Long Island Iced Tea).<br/><br/>You\'re a stone\'s throw away from the [[kitchen]], the [[@-sign statue->statue]], the [[dance floor->danceFloor]], and the [[North Showcase Hall->northShowcaseHall]]. You can also crawl into the [[shipping container->shippingContainer]].',
    allowsMedia: true
  },
  lounge: {
    id: 'lounge',
    displayName: 'Lounge',
    shortName: 'the lounge',
    description: 'A chill space to hang away from the hustle and bustle of the main space. Comfy chairs, TVs showing video footage of roguelikes, and a fridge full of La Croix. <br/><br/>From here, you can get to the [[drawing room->loungeDungeonDrawingRoom]], the [[dance floor->danceFloor]], or the [[kitchen]].',
    allowsMedia: true
  },
  statue: {
    id: 'statue',
    displayName: '@-sign Statue',
    shortName: 'the statue',
    description: `A memorial to countless adventurers who have helped build this social space.<br/><br/>A plaque on the statue shows a list of <a href="https://github.com/lazerwalker/azure-mud/graphs/contributors" target="_blank" rel="noreferrer">code contributors</a>.<br/>There's also a suggestion wall for people to add comments about the social space.
      From here, you can reach the [[kitchen]], the [[bar]], the [[theater]], or the [[North Showcase Hall->northShowcaseHall]]. You can also climb into the [[shipping container->shippingContainer]].`,
    hasNoteWall: true,
    allowsMedia: true
  },
  danceFloor: {
    id: 'danceFloor',
    displayName: 'Dance Floor',
    shortName: 'the dance floor',
    description: 'The ping-pong table has been pushed to the side for a makeshift dance floor. A DJ booth is set up where chiptunes are playing.<br/><br/>From here, you can reach the [[lounge]], the [[kitchen]], or the [[bar]].'
  },
  shippingContainer: {
    id: 'shippingContainer',
    displayName: 'Shipping Container',
    shortName: 'the shipping container',
    description: `
      It's not quite clear why there's a shipping container in the middle of the space. Seems pretty chill, though? Somebody's set up a makeshift bench.<br/><br/>
      After you climb out, you can get back to the [[bar]], the [[theater]], the [[kitchen]], or the [[@-sign statue->statue]].`,
    allowsMedia: true
  },
  entryway: {
    id: 'entryway',
    displayName: 'Registration Desk',
    shortName: 'the registration desk',
    description: 'A big banner reads \'Welcome to Roguelike Celebration 2020!\' Once you\'ve got your bearings about you, you can move to the [[foyer]].',
    hidden: true
  },
  foyer: {
    id: 'foyer',
    displayName: 'Haunted Foyer',
    shortName: 'the haunted foyer',
    description: `A grand opulent foyer leading into the theater. A chill runs down your spine as you walk in; something just feels ~off~ about this place.<br/><br/>
    You can see a [[swag table->swag]] in the corner, and can also leave to the [[theater]] or the [[west showcase hall->westShowcaseHall]].`,
    specialFeatures: [SpecialFeature.RainbowDoor, SpecialFeature.DullDoor]
  },
  swag: {
    id: 'swag',
    displayName: 'Swag Table',
    shortName: 'the swag table',
    description: `A table covered in a giant messy pile of mismatched swag. At the top of the pile, you see items such as [[Roguelike Celebration socks->item]], [[a +1 longbow->item]], [[an unidentified scroll->item]], and (surprisingly!) [[a tiny puppy->item]].
    <br/><br/>
    From here, you can walk back to the rest of the [[foyer]].`
  },
  atelier: {
    id: 'atelier',
    displayName: 'Artists\' Atelier',
    shortName: 'the artists\' atelier',
    description: `A bright sun-lit space for an artist to work. In the corner of the room are crates full of [[fresh pixels->item]] of all colors, waiting to be placed on a canvas. In the middle of the room is a giant contraption made of various [[pieces of scrap metal->item]]; you can't honestly tell whether it's intended to be art or just leftover scrap.<br/><br/>
    From here, you can get to the [[west showcase hall->westShowcaseHall]], the [[engineer's work room->workbench]], or the [[proc-gen study->study]].`
  },
  study: {
    id: 'study',
    displayName: 'Procedural Generation Study',
    shortName: 'the proc-gen study',
    description: `A comfy and cozy library that is curiously shaped like a hexagon. One side of the room has a couple of well-worn leather armchairs, while the other four walls are filled top-to-bottom with books. The majority of them are apparent gibberish, but many of them contain insightful writings about the art of procedural content generation.<br/><br/>
    From here, you can get to the the [[engineer's workbench->workbench]] or the [[artists' atelier->atelier]].`
  },
  workbench: {
    id: 'workbench',
    displayName: 'Engineer\'s Workbench',
    shortName: 'the engineer\'s workbench',
    description: `A cluttered workspace that clearly belongs to someone who loves to tinker. A dim hum fills the room from server racks sitting in the corner, and there are blinking lights coming from every crevice. A blueprint sitting on the workbench outlines intricate plans for something called an 'entity-component system'.<br/><br/>
    From here, you can get to the [[proc-gen study->study]] or the [[artists' atelier->atelier]].`
  },
  hiddenPortalRoom: {
    id: 'hiddenPortalRoom',
    displayName: 'Portal Room',
    shortName: 'the portal room',
    description: `In the center of the room is a shimmering portal. Next to the portal is a pedestal with an open book. To your right is a table with a sign hung behind it, reading "Lending Table" in flowery wizard script. On the table you can see [[a wand of digging->item]], [[a Proof of Stremf->item]], [[a pair of seven league boots->item]], and [[Planepacked->item]], the legendary limestone statue.<br/><br/>
      Once you've finished here, you can [[leap into the shimmering portal->statue]]`,
    specialFeatures: [SpecialFeature.FullRoomIndex],
    hidden: true
  }
}

export const roomData: { [name: string]: Room } = {
  ...indexRoomData,
  ...loungeDungeonRoomData
}
