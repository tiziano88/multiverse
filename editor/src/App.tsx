import React, { useState } from "react";
import "./App.css";
import { multiverse } from "./compiled/schema";
import { UniverseComponent } from "./components/UniverseComponent";

function App() {
  const [universe, setUniverse] = useState<multiverse.IUniverse>(
    multiverse.Universe.create({})
  );
  function saveProto() {
    console.log(multiverse.Universe.encode(universe).finish());
  }
  return (
    <div className="App">
      <UniverseComponent value={universe} updateValue={(v) => setUniverse(v)} />
      <button onClick={saveProto}>Save</button>
    </div>
  );
}

export default App;
