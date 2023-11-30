// src/Article.js
import React from 'react';
import '../style/article.css';

export const Article =({ title, url, content })=> {
  return (
    <article className="article">
      <h2><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      <p>{content}</p>
    </article>
  );
}
