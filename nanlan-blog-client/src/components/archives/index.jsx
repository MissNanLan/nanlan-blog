/* eslint-disable */
import React from "react";
import { BookFilled } from "@ant-design/icons";
import { Wrapper, Title, Content } from "../style";
import { ArchivesTitle, ArchivesItem ,ArchivesBottom} from "./style";

const data = [
  {
    month: "九月",
    year: "2020",
    count: 2,
  },
  {
    month: "八月",
    year: "2020",
    count: 2,
  },
  {
    month: "七月",
    year: "2020",
    count: 2,
  },
  {
    month: "六月",
    year: "2020",
    count: 2,
  },
];
function Archives() {
  return (
    <Wrapper>
      <Title>
        <BookFilled />
        <ArchivesTitle>归档</ArchivesTitle>
      </Title>
      <Content>
        {data.map((item,index) => {
          return (
            <ArchivesItem key={index}>
              <span className="date">
                {item.year}
                {item.month}
              </span>
              <span className="count">{item.count}</span>
            </ArchivesItem>
          );
        })}

      </Content>
      <ArchivesBottom>
        查看更多
      </ArchivesBottom>
    </Wrapper>
  );
}

export default Archives;
