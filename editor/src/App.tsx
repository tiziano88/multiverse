import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ArticleComponent } from "./components/ArticleComponent";
import { multiverse } from "./compiled/schema";

function App() {
  var article = multiverse.Article.create({
    uuid: "123",
    title: "title",
    body: "body",
  });
  return (
    <div className="App">
      <ArticleComponent
        article={article}
        updateArticle={(a) => {
          article.body = a.body || "";
          article.title = a.title || "";
          article.uuid = a.uuid || "";
          article = article;
          console.log(article);
        }}
      />
    </div>
  );
}

export default App;
