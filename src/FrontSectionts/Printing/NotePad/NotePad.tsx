import React from "react";
import SpiralNotepads from "./SpiralNotepads";
import NotepadWithCover from "./NotepadWithCover";
import NotepadWithoutCover from "./NotepadWithoutCover";
import NotepadCube from "./NotepadCube";
import FootedNotepad from "./FootedNotepad";

const NotePad = () => {
  return (
    <div>
      <SpiralNotepads />
      <NotepadWithCover />
      <NotepadWithoutCover />
      <NotepadCube />
      <FootedNotepad />
    </div>
  );
};

export default NotePad;
