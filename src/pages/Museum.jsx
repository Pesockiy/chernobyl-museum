import React from "react";
import PageMenu from "../common/PageMenu";
import PageTitle from "../common/PageTitle";
import WithMenu from "../common/WithMenu";
// import NewsList from "../components/NewsList";
// import { newsFilter, mockNews } from "../mock/news";
import { museumMenu } from "../mock/museum-about";

const Museum = () => {
  return (
    <div className="container">
        <PageTitle>Новини</PageTitle>
        <WithMenu>
          <PageMenu menu={museumMenu} withSearch={false}></PageMenu>
          {/* <NewsList list={mockNews} moreButton={true} /> */}
        </WithMenu>
    </div>
  );
};

export default Museum