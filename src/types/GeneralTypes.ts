export type Player = "youtube" | "audio";

export interface RecordInfo {
  uuid: string;
  url: string;
  name: string;
  ENname: string; // English
  JPname: string; // Japanese (potentially kanji, empty if japanese not applicable)
  JPhiragananame: string; // Japanese (in hiragana, empty if JPname already in hiragana)
  type: "vgm" | "op/ed" | "jazz" | "classical" | "free" | "original";
  tag: string;
  addtags: string[];
}

// for drawing
export type NoteDrawingSpecs = {
  whiteNoteWidth: number; // pixels
  blackNoteWidth: number; // pixels
  whiteNoteColor: string;
  blackNoteColor: string;
};