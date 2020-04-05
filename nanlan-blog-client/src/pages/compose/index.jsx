/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-debugger */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unused-state */

// 引入编辑器样式
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';

import React from 'react';
import BraftEditor from 'braft-editor';
import Markdown from 'braft-extensions/dist/markdown';
import CodeHighlighter from 'braft-extensions/dist/code-highlighter';

import {
 Input, Button, Cascader, Form, Modal
} from 'antd';
import { ComposeWrapper, ComposeHeader, ComposeContent } from './style';
import buildPreviewHtml from './component/preview';
import axios from '../../server/axios';

const highlighterOptions = {
  syntaxs: [
    {
      name: 'JavaScript',
      syntax: 'javascript'
    },
    {
      name: 'HTML',
      syntax: 'html'
    },
    {
      name: 'CSS',
      syntax: 'css'
    }
  ]
};
const categoryParams = [
  {
    label: '前端笔记',
    value: 0,
    children: [
      {
        label: 'javascript',
        value: 0
      }
    ]
  },
  {
    label: '随笔小文',
    value: 1,
    children: [
      {
        label: '散文集',
        value: 0
      }
    ]
  },
  {
    label: '摄影作品',
    value: 2,
    children: [
      {
        label: '风景掠影',
        value: 0
      }
    ]
  }
];


BraftEditor.use([Markdown(), CodeHighlighter(highlighterOptions)]);

class ComposeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState(null),
      categoryNum: 0,
      htmlConent: '',
      category: []
    };
  }

  showConfirm = () => {
    const { confirm } = Modal;
    confirm({
      title: '发布成功',
      okText: '前往查看',
      okType: 'success',
      cancelText: '停在当前',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  saveEditorContent = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, filedsValue) => {
      const { htmlConent } = this.state;
      console.log(htmlConent);
      const req = {
        categrory: filedsValue.category,
        title: filedsValue.title,
        abstract: filedsValue.abstract,
        content: htmlConent
      };
      if (!err) {
        axios.post('/api/article/insert', req).then((res) => {
          if (res.status === 200) {
            this.showConfirm();
          }
        });
      }
    });
  };

  submitContent = () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const { editorState } = this.state;
    const htmlContent = editorState.toHTML();
    this.setState({
      htmlConent: htmlContent
    });
  };

  handleCategoryChange = (category) => {
    this.setState({ category });
  };

  handleContentChange = (e) => {
    this.setState({
      categoryNum: e.target.value.length
    });
  };

  handleEditorChange = (editorState) => {
    this.setState({htmlConent: editorState.toHTML()});
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

  // 在编辑器获得焦点时按下ctrl+s会执行此方法
  submitContent = async () => {
    // const { editorState } = this.state;
    // const htmlContent = editorState.toHTML();
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { TextArea } = Input;
    const { categoryNum } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    // const extendControls = [
    //   {
    //     key: 'custom-button',
    //     type: 'button',
    //     text: '预览',
    //     onClick: this.preview
    //   }
    // ];

    const controls = [
      'bold',
      'italic',
      'underline',
      'text-color',
      'separator',
      'link',
      'separator',
      'media'
    ];

    return (
      <ComposeWrapper>
        <ComposeHeader>欲买桂花同载酒,终不似少年游</ComposeHeader>
        <ComposeContent>
          <Form {...formItemLayout} onSubmit={this.saveEditorContent}>
            <Form.Item label="文章标题">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: '请输入标题'
                  },
                  {
                    min: 1,
                    max: 20,
                    message: '标题不得大于20个字符'
                  }
                ]
              })(<Input placeholder="请输入标题" />)}
            </Form.Item>

            <Form.Item label="文章类别">
              {getFieldDecorator('category', {
                rules: [
                  {
                    required: true,
                    message: '请选择一个类别'
                  }
                ]
              })(
                <Cascader
                  options={categoryParams}
                  onChange={this.handleCategoryChange}
                  placeholder="请选择一个类别"
                />
              )}
            </Form.Item>

            <Form.Item label="文章概要">
              {getFieldDecorator('abstract', {
                rules: [
                  {
                    min: 0,
                    max: 60,
                    message: '概要不能超过60个字符'
                  }
                ]
              })(
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
              )}
            </Form.Item>

            <Form.Item label="文章正文">
              {getFieldDecorator('content', {
                validateTrigger: 'onBlur',
                rules: [
                ]
              })(
                <div className="braft-content">
                  <BraftEditor
                    controls={controls}
                    onChange={this.handleEditorChange}
                    className="my-editor"
                    placeholder="请输入正文内容"
                  />
                </div>
              )}
            </Form.Item>

            <Form.Item>
              {/* <Button size="large" type="primary" htmlType="submit">
                保存
              </Button> */}

              <Button
                size="large"
                type="primary"
                htmlType="submit"
              >
                发布
              </Button>
            </Form.Item>
          </Form>
        </ComposeContent>
      </ComposeWrapper>
    );
  }
}

const Compose = Form.create({
  name: 'compose',
})(ComposeForm);
export default Compose;
