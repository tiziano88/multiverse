import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ArticleComponent } from "./components/ArticleComponent";
import { multiverse } from "./compiled/schema";
import { UniverseComponent } from "./components/UniverseComponent";

function App() {
  const [article, setArticle] = useState<multiverse.IArticle>(
    multiverse.Article.create({
      title: "title",
      body: "body",
    })
  );
  const [universe, setUniverse] = useState<multiverse.IUniverse>(
    multiverse.Universe.create({})
  );
  function saveProto() {
    console.log(multiverse.Article.encode(article).finish());
  }
  return (
    <div className="App">
      <UniverseComponent value={universe} updateValue={(v) => setUniverse(v)} />
      <ArticleComponent
        value={article}
        updateValue={(a) => {
          setArticle(a);
          console.log(a);
        }}
      />
      <button onClick={saveProto}>Save</button>
    </div>
  );
}

export default App;
