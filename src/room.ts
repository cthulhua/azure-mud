// TODO: This conversion shouldn't be necessary
// But I don't understand how we're using/populating `notes`.
// There should be a clean refactor here
// (although this file will probably still exist to be the single point of importing
// the Server room and just exporting a 'clean' definition)

import * as Server from "../server/src/rooms";
import { RoomNote } from "../server/src/roomNote";
import { RoomActivityStatus } from "../server/src/types";
export interface Room {
  displayName: string;
  shortName: string;
  id: string;
  description: string;
  users?: string[];
  videoUsers?: string[];
  mediaChat?: boolean;
  hidden?: boolean;
  hasNoteWall?: boolean;
  noteWallData?: Server.NoteWallData;
  notes?: RoomNote[];
  active: boolean;
  specialFeatures?: string[];
  riddles?: string[];
}

export function convertServerRoom(room: Server.Room): Room {
  return {
    displayName: room.displayName,
    id: room.id,
    shortName: room.shortName,
    description: room.description,
    mediaChat: room.mediaChat,
    hasNoteWall: room.hasNoteWall,
    noteWallData: room.noteWallData,
    hidden: room.hidden,
    specialFeatures: room.specialFeatures,
    riddles: room.riddles,
  };
}

export function convertServerRoomData(
  roomData: {
    [roomId: string]: Server.Room;
  },
  roomActivityStatus: RoomActivityStatus
): { [roomId: string]: Room } {
  const newObj = {};
  let now = Date.now();

  Object.keys(roomData).forEach((k) => {
    const room = roomData[k];
    console.log("Got room activity status");
    console.log(k);
    let lastActiveTime = roomActivityStatus.roomActivity[k];
    console.log(lastActiveTime);
    let active = false;
    if (lastActiveTime !== undefined) {
      active = lastActiveTime >= now - 60000;
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
      active: active,
    };
    newObj[k] = convertServerRoom(room);
  });

  return newObj;
}
