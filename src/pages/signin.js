import React from 'react';
import { Button, Checkbox, Form, Icon, Input, Layout, Row } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import 'assets/scss/admin.scss';

const { Content } = Layout;
const { Item } = Form;

const SignIn = () => {
  return (
    <div>
      <Head>
        <title>Sign In</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Layout className="workspace">
        <Content>
          <Row
            className="px-3 bg-white"
            type="flex"
            justify="center"
            align="middle"
            style={{
              minHeight: '100vh',
            }}
          >
            <div style={{
              maxWidth: 400,
              zIndex: 2,
              minWidth: 300,
            }}>
              <div className="text-center mb-5">
                <Link href="/signin">
                  <a className="brand mr-0">
                    <Icon style={{ fontSize: 20 }} type="user"/>
                  </a>
                </Link>
                <h5 className="mb-0 mt-3">Sign in</h5>
                <p className="text-muted">get started with our service</p>
              </div>
              <Form layout="vertical">
                <Item label="Username" required>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="Enter username"
                  />
                </Item>
                <Item label="Password" required>
                  <Input.Password
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="Enter password"
                  />
                </Item>
                <Item>
                  <div className="d-flex justify-content-between">
                    <Checkbox checked>Remember me</Checkbox>
                    <Link href="/forgotpass">
                      <a>
                        Forgot password
                      </a>
                    </Link>
                  </div>
                  <Button className="mt-3" type="primary" htmlType="submit" block>
                    Log in
                  </Button>
                </Item>
                <div className="text-center">
                  <small className="text-muted">
                    <span>Don't have an account yet?</span>
                    <Link href="/signup">
                      <a>&nbsp;Create one now!</a>
                    </Link>
                  </small>
                </div>
              </Form>
            </div>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default SignIn;

