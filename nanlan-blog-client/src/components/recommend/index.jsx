/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import  RecommendContentItem  from "./style";
import { Wrapper, Title, Content } from "../style";

class Recommend extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>推荐文章</Title>
        <Content>
          <Link to="/detail/1">
            <RecommendContentItem>
              <span className="sousuo iconfont">&#xe62b;</span>
              <span className="title">
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
              </span>
            </RecommendContentItem>
          </Link>
          <Link to="/detail/1">
            <RecommendContentItem>
              <span className="sousuo iconfont">&#xe62b;</span>
              <span className="title">
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
                爱情是一片炽热狂迷的痴心，一团无法扑灭的烈火
              </span>
            </RecommendContentItem>
          </Link>
        </Content>
      </Wrapper>
    );
  }
}

export default Recommend;
