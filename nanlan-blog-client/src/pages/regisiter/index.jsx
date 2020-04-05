/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-debugger */
import React from 'react';
import {
 Form, Input, Button, Icon, Checkbox, Divider, message
} from 'antd';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import axios from '../../server/axios';
import { RegisterWrapper, RegisterHeader, RegisterContainer } from './style';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, filedsValue) => {
      if (!err) {
        axios
          .post('/api/regisiter', {
            userName: filedsValue.userName,
            password: filedsValue.password
          })
          .then((res) => {
            if (res.msg === '新增成功') {
              message.success(res.msg);
            } else {
              message.warn(res.msg);
            }
          });
      }
    });
  };

  handleCheckSameName = (e, value, callback) => {
    e.preventDefault();
    const { form } = this.props;
    axios
      .post('/api/regisiter', {
        userName: form.getFieldValue('userName'),
        password: form.getFieldValue('password')
      })
      .then((res) => {
        if (res.msg === '存在同名的用户哦') callback('存在同名的用户哦');
      });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPsd'], { force: true });
    }
    callback();
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <RegisterWrapper>
        <RegisterHeader>
          <div className="title">南蓝House</div>
          <div className="subTitle">
            In youth we learn , In age we understand
          </div>
        </RegisterHeader>
        <RegisterContainer>
          <div className="header">
            <div className="title">注册</div>
            <div className="subTitle">
              已有账号,去
              <NavLink to="/login">登录</NavLink>
            </div>
          </div>
          <Divider />
          <div className="box">
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="用户名" hasFeedback>
                {getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: '用户名是必填的'
                    },
                    {
                      pattern: new RegExp(
                        /^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa50-9a-zA-Z_]{2,10}$/,
                        'g'
                      ),
                      message: '用户名由中文或者字母开头'
                    },
                    {
                      min: 2,
                      max: 10,
                      message: '用户名长度4-10位'
                    }
                  ]
                })(
                  <Input
                    placeholder="请输入你的用户名"
                  />
                )}
              </Form.Item>

              <Form.Item label="密码" hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '密码是必填的'
                    },
                    {
                      pattern: new RegExp(/[0-9a-zA-Z_]{6,10}$/, 'g'),
                      message: '密码由数字或者字母开头,长度为6-10位'
                    },
                    {
                      validator: this.validateToNextPassword
                    }
                  ]
                })(
                  <Input.Password
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="请输入密码"
                  />
                )}
              </Form.Item>

              <Form.Item label="确认密码" hasFeedback>
                {getFieldDecorator('confirmPsd', {
                  rules: [
                    {
                      required: true,
                      message: '确认密码是必填的'
                    },
                    // {
                    //   pattern: new RegExp(
                    //     /^[0-9a-zA-Z_]{6,10}$/,
                    //     'g'
                    //   ),
                    //   message: '密码由中文和者字母开头,长度为6-10位'
                    // },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input.Password
                    prefix={(
                      <Icon
                        type="lock"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                        onBlur={this.handleConfirmBlur}
                      />
                    )}
                    placeholder="请输入密码"
                  />
                )}
              </Form.Item>

              <Form.Item>
                <Checkbox>
                  我已经阅读
                  {/* <a href="">协议</a> */}
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="regisiter-form-button"
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </RegisterContainer>
      </RegisterWrapper>
    );
  }
}

const Register = Form.create({ name: 'register' })(RegisterForm);

export default Register;
