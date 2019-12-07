import React from "react";
import {
  RecommendWrapper,
  RecommendTitle,
  RecommendContent,
  RecommendContentItem
} from "./style";
import { Link } from "react-router-dom";
class Recommend extends React.Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendTitle>推荐文章</RecommendTitle>
        <RecommendContent>
          <Link to={"/detail/1"}>
            <RecommendContentItem>
              <span className="sousuo iconfont">&#xe62b;</span>
              <span className="title">
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
              </span>
            </RecommendContentItem>
          </Link>
          <Link to={"/detail/" + "1"}>
            <RecommendContentItem>
              <span className="sousuo iconfont">&#xe62b;</span>
              <span className="title">
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
              </span>
            </RecommendContentItem>
          </Link>
        </RecommendContent>
      </RecommendWrapper>
    );
  }
}

export default Recommend;
