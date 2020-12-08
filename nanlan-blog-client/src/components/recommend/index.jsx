/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { SignalFilled } from "@ant-design/icons";
import axios from "@/server/axios";
import { RecommendTitle, RecommendContentItem } from "./style";
import { Wrapper, Title, Content } from "../style";

class Recommend extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [],
    };
  }
  componentDidMount() {
    axios.post("/api/recommend/list", {}).then((res) => {
      this.setState({
        recommendList: res.data,
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>
          <SignalFilled />
          <span className="text">推荐文章</span>
        </Title>
        <Content>
          {this.state.recommendList.map((it, index) => {
            return (
              <Link to={"/detail/" + it._id} key={index}>
                <RecommendContentItem>
                  <span className="title">{it.title}</span>
                </RecommendContentItem>
              </Link>
            );
          })}
        </Content>
      </Wrapper>
    );
  }
}

export default Recommend;
