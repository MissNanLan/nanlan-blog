/* eslint-disable  */
import React from "react";
import { Wrapper, Title, Content } from "../style";
import * as util from '../../utils'
function Tag() {
  const tagList = [
    {
      name: "测试1",
      articleIds: [1, 2],
    },
    {
      name: "测试2",
      articleIds: [1, 2],
    },
    {
      name: "测试3",
      articleIds: [1, 2],
    },
    {
      name: "测试4",
      articleIds: [1, 2],
    },
    {
      name: "测试5",
      articleIds: [1, 2],
    },
    {
      name: "测试6",
      articleIds: [1, 2],
    },
    {
      name: "测试7",
      articleIds: [1, 2],
    },
    {
      name: "测试8",
      articleIds: [1, 2],
    },
    {
      name: "测试4",
      articleIds: [1, 2],
    },
    {
      name: "测试5",
      articleIds: [1, 2],
    },
    {
      name: "测试6",
      articleIds: [1, 2],
    },
    {
      name: "测试7",
      articleIds: [1, 2],
    },
    {
      name: "测试8",
      articleIds: [1, 2],
    },
  ];



  return (
    <Wrapper>
      <Title>标签</Title>
      <Content>
        {tagList.map((it) => {
          return (
            <span
              
              style={{
                color: util.randomColor(),
                fontSize: util.randomFontSize() + "px",
                display: "inline-block",
                padding: "0 .1rem"
              }}
            >
              {it.name}
            </span>
          );
        })}
      </Content>
    </Wrapper>
  );
}

export default Tag;
