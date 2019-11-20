import React from 'react';
import { Button, Form, Icon, Input, Layout, Row, Tooltip } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import 'assets/scss/admin.scss';

const { Content } = Layout;
const { Item } = Form;

const SignIn = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
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
                <h5 className="mb-0 mt-3">Sign up</h5>
                <p className="text-muted">create a new account</p>
              </div>
              <Form layout="vertical">
                <Item
                  label={
                    <span>
                      Username&nbsp;
                      <Tooltip title="What do you want others to call you?">
                        <Icon type="question-circle-o"/>
                      </Tooltip>
                    </span>
                  }
                  required
                >
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder='Enter username'
                  />
                </Item>
                <Item label="Email" required>
                  <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="Enter email"
                  />
                </Item>
                <Item label="Password" required>
                  <Input.Password
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="Enter password"
                  />
                </Item>
                <Item label="Confirm password" required>
                  <Input.Password
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="Confirm password"
                  />
                </Item>
                <Item>
                  <Button className="mt-3" type="primary" htmlType="submit" block>
                    Sign up
                  </Button>
                </Item>
                <div className="text-center">
                  <small className="text-muted">
                    <span>Already have an account?</span>
                    <Link href="/signin">
                      <a>&nbsp;Login Now!</a>
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

