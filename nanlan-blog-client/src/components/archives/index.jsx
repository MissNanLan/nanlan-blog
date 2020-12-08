/* eslint-disable */
import React, { useState, useEffect } from "react";
import { BookFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import axios from "@/server/axios";
import { Wrapper, Title, Content } from "../style";
import { ArchivesItem } from "./style";

function Archives() {
  const [archivesList, setarchivesList] = useState([]);
  useEffect(() => {
    axios.post("/api/archives/list", {}).then((res) => {
      setarchivesList(res.data);
    });
  }, []);
  return (
    <Wrapper>
      <Title>
        <BookFilled />
        <span className="text">归档</span>
      </Title>
      <Content>
        {archivesList.map((it, index) => {
          return (
            <NavLink
              to={{
                pathname: "/list",
                search: `?date=${it.date}`,
              }}
            >
              <ArchivesItem key={index}>
                <span className="date">{it.date}</span>
                <span className="count">{it.num}</span>
              </ArchivesItem>
            </NavLink>
          );
        })}
      </Content>
    </Wrapper>
  );
}

export default Archives;
