import React from "react";
import { CommentWrapper, CommentTextArea, CommentBtn } from "./style";
class Comment extends React.Component {
  render() {
    return (
      <CommentWrapper>
        <CommentTextArea></CommentTextArea>
        <CommentBtn>
          <button className="button" type="button">
            发布
          </button>
          <button className="button cancel" type="button">
            取消
          </button>
        </CommentBtn>
      </CommentWrapper>
    );
  }
}

export default Comment;
