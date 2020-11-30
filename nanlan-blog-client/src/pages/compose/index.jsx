/* eslint-disable  */
import "braft-editor/dist/index.css";
import "braft-extensions/dist/code-highlighter.css";

import React from "react";
import BraftEditor from "braft-editor";
import Markdown from "braft-extensions/dist/markdown";
import CodeHighlighter from "braft-extensions/dist/code-highlighter";
import { Input, Button, Cascader, Form, Modal, Select } from "antd";
import { ComposeWrapper, ComposeHeader, ComposeContent } from "./style";
import buildPreviewHtml from "./component/preview";
import axios from "../../server/axios";

const highlighterOptions = {
  syntaxs: [
    {
      name: "JavaScript",
      syntax: "javascript",
    },
    {
      name: "HTML",
      syntax: "html",
    },
    {
      name: "CSS",
      syntax: "css",
    },
  ],
};
const categoryParams = [
  {
    label: "前端笔记",
    value: 0,
    children: [
      {
        label: "javascript",
        value: 0,
      },
    ],
  },
  {
    label: "随笔小文",
    value: 1,
    children: [
      {
        label: "散文集",
        value: 0,
      },
    ],
  },
  {
    label: "摄影作品",
    value: 2,
    children: [
      {
        label: "风景掠影",
        value: 0,
      },
    ],
  },
];

BraftEditor.use([Markdown(), CodeHighlighter(highlighterOptions)]);

class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState("<p>Hello <b>World!</b></p>"),
      categoryNum: 0,
      htmlContent: "",
      category: [],
      tagList: [],
    };
  }

  showConfirm = () => {
    const { confirm } = Modal;
    confirm({
      title: "发布成功",
      okText: "前往查看",
      okType: "success",
      cancelText: "停在当前",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  saveEditorContent = (values) => {
    let tag = [];
    axios.post("/api/tag/insert", { tags: values.tags }).then((res) => {
      res.data.data.forEach((it) => tag.push(it._id));
      console.log("this.state", this.state);
      const req = {
        title: values.title,
        abstract: values.abstract,
        content: this.state.htmlContent,
        tag: tag,
        category: ["5fba76e4b661c869e890f775"],
      };
      axios.post("/api/article/insert", req).then((res) => {
        if (res.status === 200) {
          this.showConfirm();
        }
      });
    });
  };

  handleCategoryChange = (category) => {
    this.setState({ category });
  };

  handleContentChange = (e) => {
    this.setState({
      categoryNum: e.target.value.length,
    });
  };

  handleEditorChange = (editorState) => {
    this.setState({
      htmlContent: editorState.toHTML(),
      editorState: editorState,
    });
  };

  preview = () => {
    const { editorState } = this.state;
    if (window.previewWindow) {
      window.previewWindow.close();
    }
    window.previewWindow = window.open();
    window.previewWindow.document.write(buildPreviewHtml(editorState));
    window.previewWindow.document.close();
  };

  componentWillMount() {
    let tagList = [];
    const { Option } = Select;
    axios.get("/api/tag/list").then((res) => {
      console.log(res);
      if (res.status === 200) {
        res.data.forEach((item) => {
          tagList.push(<Option key={item.name}>{item.name}</Option>);
        });
        this.setState({
          tagList: tagList,
        });
      }
    });
  }

  render() {
    const { TextArea } = Input;
    const { categoryNum } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <ComposeWrapper>
        <ComposeHeader>欲买桂花同载酒,终不似少年游</ComposeHeader>
        <ComposeContent>
          <Form {...formItemLayout} onFinish={this.saveEditorContent}>
            <Form.Item
              label="文章标题"
              name="title"
              rules={[
                {
                  required: true,
                  message: "请输入标题",
                },
                {
                  min: 1,
                  max: 20,
                  message: "标题不得大于20个字符",
                },
              ]}
            >
              <Input placeholder="请输入标题" />
            </Form.Item>

            <Form.Item
              label="文章类别"
              name="category"
              rules={[
                {
                  required: true,
                  message: "请选择一个类别",
                },
              ]}
            >
              <Cascader
                options={categoryParams}
                onChange={this.handleCategoryChange}
                placeholder="请选择一个类别"
              />
            </Form.Item>

            <Form.Item
              label="文章标签"
              name="tags"
              rules={[
                {
                  required: true,
                  message: "请选择标签",
                },
              ]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="请输入标签"
              >
                {this.state.tagList}
              </Select>
            </Form.Item>

            <Form.Item
              label="文章概要"
              name="abstract"
              rules={[
                {
                  min: 0,
                  max: 60,
                  message: "概要不能超过60个字符",
                },
              ]}
            >
              <div className="textarea-content">
                <TextArea
                  placeholder="默认截取正文的前30个字符"
                  rows={3}
                  onChange={this.handleContentChange}
                />
                <em className="textarea-inappend">
                  {categoryNum}
                  /60
                </em>
              </div>
            </Form.Item>

            <Form.Item
              label="文章正文"
              name="htmlContent"
              rules={[
                {
                  required: true,
                  message: "请输入文章正文",
                },
              ]}
            >
              <BraftEditor
                value={this.state.editorState}
                onChange={this.handleEditorChange}
                className="braft-content"
                placeholder="请输入正文内容"
              />
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                发布
              </Button>
            </Form.Item>
          </Form>
        </ComposeContent>
      </ComposeWrapper>
    );
  }
}

export default Compose;
