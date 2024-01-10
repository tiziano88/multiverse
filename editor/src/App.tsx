import React, { useEffect, useState } from "react";
import "./App.css";
import { multiverse } from "./compiled/schema";
import { UniverseComponent } from "./components/UniverseComponent";

function App() {
  console.log("App");

  const [universe, setUniverse] = useState<multiverse.IUniverse>(
    multiverse.Universe.create({})
  );

  const [fileHandle, setFileHandle] = useState<FileSystemFileHandle>();

  async function openFile() {
    const fhs = await (window as any).showOpenFilePicker();

    const fh = fhs[0] as FileSystemFileHandle;

    setFileHandle(fh);

    console.log("file handle", fileHandle);
    const file = await fh.getFile();
    console.log("file", file);
    const content = await file.arrayBuffer();
    console.log("file", file);

    const decodedUniverse = multiverse.Universe.decode(new Uint8Array(content));
    console.log("loaded from file", decodedUniverse);
    setUniverse(decodedUniverse);
  }

  function saveFile() {
    const encoded = multiverse.Universe.encode(universe).finish();
    console.log(encoded);

    if (!fileHandle) {
      console.log("No file loaded");
      return;
    }

    (fileHandle as any).createWritable().then((writable: any) => {
      writable.write(encoded);
      writable.close();
    });

    console.log("Saved to file");
  }

  function loadLocalStorage() {
    const s = localStorage.getItem("universe");
    if (!s) {
      console.log("No universe saved to local storage.");
      return;
    }
    const decoded = atob(s);
    const arr = new Uint8Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
      arr[i] = decoded.charCodeAt(i);
    }

    const decodedUniverse = multiverse.Universe.decode(arr);
    console.log("loaded from local storage");
    setUniverse(decodedUniverse);
  }

  function saveLocalStorage() {}

  return (
    <div className="App">
      <UniverseComponent value={universe} updateValue={(v) => setUniverse(v)} />
      <button className="button" onClick={openFile}>
        Open file
      </button>
      <button className="button" onClick={saveFile}>
        Save file
      </button>
      <button className="button" onClick={loadLocalStorage}>
        Open localstorage
      </button>
      <button className="button" onClick={saveLocalStorage}>
        Save localstorage
      </button>
    </div>
  );
}

export default App;
