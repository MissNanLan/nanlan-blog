import React from "react";
import moment from "moment";
import { OperationWrapper, OperationItem } from "./style";
class Opertaion extends React.Component {
  render() {
    let commentObj = this.props.data;
    return (
      <OperationWrapper>
        <OperationItem>
          <span>
            <span className="btn-group">
              <span className="date iconfont">&#xe637;</span>
              <span className="text">
                {moment(commentObj.date).format("YYYY-MM-DD HH:mm:ss")}
              </span>
            </span>
            <span className="btn-group">
              <span className="pinglun iconfont">&#xe600;</span>
              <span className="text">{commentObj.comment_count}</span>
            </span>

            <span className="btn-group">
              <span className="yueduliang iconfont">&#xe62d;</span>
              <span className="text">{commentObj.view_count}</span>
            </span>
            <span className="btn-group">
              <span className="thumbup iconfont"> &#xe644;</span>
              <span className="text">{commentObj.like_count}</span>
            </span>
          </span>
        </OperationItem>
      </OperationWrapper>
    );
  }
}

export default Opertaion;
