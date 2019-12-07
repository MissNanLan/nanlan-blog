import React from "react";
import { connect } from "react-redux";
import { LoginWrapper, Box, Title, Container, Input, Button } from "./style";
import { actionCreators } from "./store";

class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <Box>
          <Title>登陆</Title>
          <Container>
            <Input
              type="text"
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            ></Input>
            <Input
              type="password"
              placeholder="密码"
              ref={input => {
                this.password = input;
              }}
            ></Input>
            <Button
              type="button"
              onClick={() => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </Container>
        </Box>
      </LoginWrapper>
    );
  }
}

const mapDispatch = dispatch => ({
  login(account, password) {
    dispatch(actionCreators.login(account.value, password.value));
  }
});

export default connect(
  null,
  mapDispatch
)(Login);
