import React, { useEffect, useState } from "react";
import "./App.css";
import { multiverse } from "./compiled/schema";
import { UniverseComponent } from "./components/UniverseComponent";

function App() {
  console.log("App");

  const [url, setUrl] = useState("");

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

  navigator.registerProtocolHandler(
    "web+multiverse",
    "http://localhost:3000/?url=%s"
  );

  // get url parameter, and use that to populate the input-url.
  // if there is no url parameter, then use the url from local storage.

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlParam = urlParams.get("url");
    if (urlParam) {
      console.log("url", urlParam);
      setUrl(urlParam);
    }
  });

  return (
    <div className="App">
      <div className="text-xl">Viewer</div>
      <input type="text" className="input-url" value={url}></input>
      <UniverseComponent value={universe} updateValue={(v) => setUniverse(v)} />
      <button className="button" onClick={loadProto}>
        Load
      </button>
      <a href="web+multiverse://www.google.com">Try</a>
    </div>
  );
}

export default App;
