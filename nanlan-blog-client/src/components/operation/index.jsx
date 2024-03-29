/* eslint-disable  */
import React from "react";
import moment from "moment";
import {
  MessageOutlined,
  LikeOutlined,
  HeartOutlined,
  CalendarOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { OperationWrapper, OperationItem } from "./style";

class Opertaion extends React.PureComponent {
  render() {
    const { data } = this.props;
    const commentObj = data;
    return (
      <OperationWrapper>
        <OperationItem>
          <span className="btn-group">
            <CalendarOutlined />
            <span className="text">
              {moment(commentObj.date).format("YYYY-MM-DD HH:mm:ss")}
            </span>
          </span>
          <span className="btn-group">
            <MessageOutlined />
            <span className="text">{commentObj.comment_count}</span>
          </span>
          <span className="btn-group">
            <LikeOutlined />
            <span className="text">{commentObj.view_count}</span>
          </span>
          <span className="btn-group">
            <HeartOutlined />
            <span className="text">{commentObj.like_count}</span>
          </span>
          <span className="btn-group">
            <BookOutlined />
            {commentObj.category &&
              commentObj.category.map((it, index) => {
                return (
                  <span key={index} className="text">
                    {it.name}
                  </span>
                );
              })}
          </span>
        </OperationItem>
      </OperationWrapper>
    );
  }
}

export default Opertaion;
