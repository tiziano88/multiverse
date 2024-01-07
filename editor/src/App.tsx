import React, { useState } from "react";
import "./App.css";
import { multiverse } from "./compiled/schema";
import { UniverseComponent } from "./components/UniverseComponent";

function App() {
  const [universe, setUniverse] = useState<multiverse.IUniverse>(
    multiverse.Universe.create({})
  );
  function saveProto() {
    const encoded = multiverse.Universe.encode(universe).finish();
    console.log(encoded);
    // Save to local storage, first encode as base64.
    let s = "";
    for (let i = 0; i < encoded.length; i++) {
      s += String.fromCharCode(encoded[i]);
    }
    localStorage.setItem("universe", btoa(s));
    console.log("Saved to local storage.");
  }
  function loadProto() {
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
  return (
    <div className="App">
      <UniverseComponent value={universe} updateValue={(v) => setUniverse(v)} />
      <button className="button" onClick={saveProto}>
        Save
      </button>
      <button className="button" onClick={loadProto}>
        Load
      </button>
    </div>
  );
}

export default App;
