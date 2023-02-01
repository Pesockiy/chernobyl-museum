import React from "react";
import PageTitle from "../common/PageTitle";
import Article from "../components/Article";
import NewsMore from "../components/NewsMore";
import { mockArticle1, mockNewsMore } from "../mock/news";

const News = () => {
  return (
    <>
      <div className="container">
          <PageTitle date='26.02.2022'>{mockArticle1.title}</PageTitle>
          <Article content={mockArticle1} />
      </div>
      <NewsMore list={mockNewsMore} />
    </>
  );
};

export default News