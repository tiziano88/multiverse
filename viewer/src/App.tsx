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

  async function loadProto() {
    // fetch from URL.
    console.log("url", url);
    if (url === "") {
      return;
    }
    const response = await fetch(url);
    const content = await response.arrayBuffer();
    console.log("content", content);
    // convert to string
    const s = new TextDecoder("utf-8").decode(content);
    console.log("s", s);

    const arr = new Uint8Array(content);
    console.log("content", arr);
    const decodedUniverse = multiverse.Universe.decode(new Uint8Array(content));
    console.log("loaded from URL");
    setUniverse(decodedUniverse);
  }

  const currentOrigin = window.location.origin;
  console.log("currentOrigin", currentOrigin);
  navigator.registerProtocolHandler(
    "web+multiverse",
    `${currentOrigin}/?url=%s`
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

  useEffect(() => {
    loadProto();
  }, [url]);

  return (
    <div className="App">
      <div className="text-xl">Viewer</div>
      <input type="text" className="input-url" value={url}></input>
      <UniverseComponent value={universe} updateValue={(v) => setUniverse(v)} />
      <button className="button" onClick={loadProto}>
        Load
      </button>
      <a href="web+multiverse://raw.githubusercontent.com/tiziano88/universe/main/tiziano88.pb">
        Try
      </a>
    </div>
  );
}

export default App;
