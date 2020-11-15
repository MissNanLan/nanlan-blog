/* eslint-disable  */
import React from "react";
import { TagFilled } from "@ant-design/icons";
import { Wrapper, Title, Content } from "../style";
import {  TagItem } from "./style";
import * as util from "../../utils";
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
      <Title>
        <TagFilled style={{ fontSize: "16px" }} />
        <span className='text'>标签</span>
      </Title>
      <Content>
        {tagList.map((it, index) => {
          return (
            <TagItem key={index}>
              <span
                className="tag"
                style={{
                  color: util.randomColor(),
                  fontSize: util.randomFontSize() + "px",
                }}
              >
                {it.name}
              </span>
            </TagItem>
          );
        })}
      </Content>
    </Wrapper>
  );
}

export default Tag;
