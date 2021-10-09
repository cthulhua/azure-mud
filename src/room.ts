import * as Server from '../server/src/rooms'
import { RoomNote } from '../server/src/roomNote'
import {RoomActivityStatus} from '../server/src/types'
export interface Room {
  name: string;
  shortName: string;
  id: string;
  description: string;
  users?: string[];
  videoUsers?: string[];
  noMediaChat: boolean;
  hidden?: boolean;
  hasNoteWall: boolean;
  noteWallData: Server.NoteWallData
  notes?: RoomNote[]
  specialFeatures?: Server.SpecialFeature[]
  active: boolean
}

export function convertServerRoomData (roomData: {
  [roomId: string]: Server.Room;
},
  roomActivityStatus: RoomActivityStatus): { [roomId: string]: Room } {
  const newObj = {}
  let now = Date.now();

  Object.keys(roomData).forEach((k) => {
    const room = roomData[k]
    console.log("Got room activity status");
    console.log(k);
    let lastActiveTime = roomActivityStatus.roomActivity[k];
    console.log(lastActiveTime);
    let active = false;
    if (lastActiveTime !== undefined) {
      active = lastActiveTime >= now - 60000
    }
    console.log(active);
    newObj[k] = {
      name: room.displayName,
      id: room.id,
      shortName: room.shortName,
      description: room.description,
      noMediaChat: room.noMediaChat,
      hasNoteWall: room.hasNoteWall,
      noteWallData: room.noteWallData,
      hidden: room.hidden,
      specialFeatures: room.specialFeatures,
      active: active
    }
  })

  return newObj
}
