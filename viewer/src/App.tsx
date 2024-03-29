import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { multiverse } from "./compiled/schema";
import { UniverseComponent } from "./components/UniverseComponent";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  console.log("App");

  const [url, setUrl] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const [universe, setUniverse] = useState<multiverse.IUniverse>(
    multiverse.Universe.create({})
  );

  const urlFromLocation = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("url") || "";
  }, [location]);

  const loadProto = useCallback(async () => {
    // fetch from URL.
    console.log("url", url);
    if (url === "") {
      return;
    }

    var parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch (error) {
      // invalid url
      return;
    }

    const params = new URLSearchParams(parsedUrl.search);

    console.log("parsedUrl", parsedUrl);
    if (parsedUrl.protocol === "web+multiverse:") {
      parsedUrl.protocol = "https:";
    }

    var urlToFetch = parsedUrl.toString();
    if (parsedUrl.hostname === "storage.googleapis.com") {
      urlToFetch =
        "https://corsproxy.io/?" + encodeURIComponent(parsedUrl.toString());
      console.log("using CORS proxy", urlToFetch);
    }

    const response = await fetch(urlToFetch, {
      headers: {
        // "content-type": "application/octet-stream",
        // accept: "application/octet-stream",
      },
      // referrerPolicy: "no-referrer",
      // mode: "cors",
    });
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
  }, [url]);

  const currentOrigin = window.location.origin;
  try {
    navigator.registerProtocolHandler(
      "web+multiverse",
      `${currentOrigin}/?url=%s`
    );
  } catch (error) {
    console.log("error", error);
  }

  // get url parameter, and use that to populate the input-url.
  // if there is no url parameter, then use the url from local storage.

  useEffect(() => {
    console.log("useEffect");
    const params = new URLSearchParams(location.search);
    setUrl(params.get("url") || "");
    loadProto();
  }, [location, setUrl, loadProto]);

  return (
    <div className="App">
      <div className="text-xl bg-blue-500">Viewer</div>
      <div className="w-full relative">
        <input
          type="text"
          className="input-url w-full"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`?url=${encodeURIComponent(url)}`, { replace: true });
            }
          }}
        ></input>
        <button type="submit" className="button" onClick={loadProto}>
          Load
        </button>
      </div>
      <UniverseComponent value={universe} />
    </div>
  );
}

export default App;
