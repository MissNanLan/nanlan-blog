/* eslint-disable no-debugger */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import {
 Form, Input, Button, Icon, Divider
} from 'antd';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginWrapper, LoginHeader, LoginContainer } from './style';
import { actionCreators } from './store';

class LoginForm extends React.Component {
  login = () => {
    const { form, dispatch} = this.props;
    form.validateFields((err, filedsValue) => {
      if (!err) {
        const { account } = filedsValue;
        const { password } = filedsValue;
        dispatch(actionCreators.login(account, password));
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <LoginWrapper>
        <LoginHeader>
          <div className="title">南蓝House</div>
          <div className="subTitle">
            In youth we learn , In age we understand
          </div>
        </LoginHeader>
        <LoginContainer>
          <div className="header">
            <div className="title">登录</div>
            <div className="subTitle">
              还没有账号,去
              <NavLink to="/regisiter">注册</NavLink>
            </div>
          </div>
          <Divider />
          <div className="box">
            <Form>
              <Form.Item label="用户名">
                {getFieldDecorator('account', {
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名'
                    }
                  ]
                })(
                  <Input
                    placeholder="请输入你的用户名"
                    onBlur={this.handleCheckSameName}
                  />
                )}
              </Form.Item>

              <Form.Item label="密码">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
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
              <Form.Item>
                <Button
                  type="primary"
                  onClick={this.login}
                  className="login-form-button"
                  block
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </LoginContainer>
      </LoginWrapper>
    );
  }
}

const Login = Form.create({ name: 'login' })(LoginForm);

export default connect()(Login);
