/* eslint-disable  */
import React, { useEffect, useState } from "react";
import { TagFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import axios from "@/server/axios";
import { Wrapper, Title, Content } from "../style";
import { TagItem } from "./style";
import * as util from "../../utils";

function Tag() {
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    axios.post("/api/tag/list", {}).then((res) => {
      setTagList(res.data);
    });
  }, []);

  return (
    <Wrapper>
      <Title>
        <TagFilled style={{ fontSize: "16px" }} />
        <span className="text">标签</span>
      </Title>
      <Content>
        {tagList.map((it, index) => {
          return (
            <NavLink
              to={{
                pathname: "/list",
                search: `?tag=${it._id}`,
              }}
            >
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
            </NavLink>
          );
        })}
      </Content>
    </Wrapper>
  );
}

export default Tag;
