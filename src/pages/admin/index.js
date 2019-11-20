import React, { useState } from 'react';
import { Avatar, Badge, Button, Divider, Drawer, Dropdown, Icon, Layout, Menu, Row, Tooltip } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import 'assets/scss/admin.scss';

const { Header, Content, Sider } = Layout;

const Admin = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Layout>
        <Header>
          <Button
            className="d-md-none"
            type="link"
            onClick={e => {
              e.preventDefault();
              setVisibleDrawer(true);
            }}
          >
            <Icon type="double-right" style={{ fontSize: 18, marginRight: 10 }}/>
          </Button>
          <Link href="/admin">
            <a className="brand">
              <strong className="mx-1 text-black">One</strong>
            </a>
          </Link>
          <Menu className="d-none d-lg-block menu-divider" mode="horizontal">
            <Menu.Item key={1}>
              Menu 1
            </Menu.Item>
            <Menu.Item key={2}>
              Menu 2
            </Menu.Item>
            <Menu.Item key={3}>
              Menu 3
            </Menu.Item>
          </Menu>
          <Menu className="d-lg-none menu-divider" mode="horizontal">
            <Menu.SubMenu
              title={<Icon className="mr-0" type="down"/>}
            >
              <Menu.Item key={1}>
                Menu 1
              </Menu.Item>
              <Menu.Item key={2}>
                Menu 2
              </Menu.Item>
              <Menu.Item key={3}>
                Menu 3
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
          <span className="mr-auto"></span>
          <Menu mode="horizontal">
            <Menu.Item key={1} id="hidden-md-down">
              <Icon
                type='fullscreen-exit'
                style={{ fontSize: 20, marginRight: 0 }}
              />
            </Menu.Item>
            <Menu.Item key={2}>
              <Icon type="setting" style={{ fontSize: 20, marginRight: 0 }}/>
            </Menu.Item>
            <Menu.Item key={3}>
              <Icon type="bell" style={{ fontSize: 20, marginRight: 0 }}/>
            </Menu.Item>
            <Menu.SubMenu
              title={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
            >
              <Menu.Item key="a">
                Menu 1
              </Menu.Item>
              <Menu.Item key="b">
                Menu 2
              </Menu.Item>
              <Menu.Item key="c">
                Menu 3
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>
        <Layout className="workspace">
          <Sider className="d-none d-md-block" theme="light">
            <Menu
              mode="inline"
              className="border-0 m-0 scroll-y"
              style={{
                flex: '1 1 0%',
                height: '100%',
              }}
            >
              <Menu.Item key={1}>
                Menu 1
              </Menu.Item>
              <Menu.Item key={2}>
                Menu 2
              </Menu.Item>
              <Menu.Item key={3}>
                Menu 3
              </Menu.Item>
            </Menu>
            <Divider className="m-0" type="horizontal"/>
            <div className="py-3 px-4">
              <Row type="flex" justify="space-around" align="middle">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="a">
                        Menu 1
                      </Menu.Item>
                      <Menu.Item key="b">
                        Menu 2
                      </Menu.Item>
                      <Menu.Item key="c">
                        Menu 3
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Badge count={99}>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  </Badge>
                </Dropdown>
                <span className="mr-auto"></span>

                <a className="px-3 text-body" href="https://facebook.com/ductt.97">
                  <Tooltip title="About">
                    <Icon type="question-circle" style={{ fontSize: 20 }}/>
                  </Tooltip>
                </a>
                <a className="px-3 text-body" href="https://facebook.com/ductt.97">
                  <Tooltip title="Log out">
                    <Icon type="export" style={{ fontSize: 20 }}/>
                  </Tooltip>
                </a>
              </Row>
            </div>
          </Sider>
        </Layout>
      </Layout>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setVisibleDrawer(false)}
        visible={visibleDrawer}
        width={240}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Admin;

