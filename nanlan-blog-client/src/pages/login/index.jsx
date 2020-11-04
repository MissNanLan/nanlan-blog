/* eslint-disable  */
import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Divider } from "antd";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginWrapper, LoginHeader, LoginContainer } from "./style";
import { actionCreators } from "./store";

class Login extends React.Component {
  login = (values) => {
    const { dispatch } = this.props;
    const { account, password } = values;
    dispatch(actionCreators.login(account, password));
  };

  render() {
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
            <Form onFinish={this.login}>
              <Form.Item
                label="用户名"
                name="account"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名",
                  },
                ]}
              >
                <Input
                  prefix={
                    <UserOutlined className="site-form-item-icon"></UserOutlined>
                  }
                  placeholder="请输入你的用户名"
                  // onBlur={this.handleCheckSameName}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="密码"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="请输入密码"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
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

export default connect()(Login);
