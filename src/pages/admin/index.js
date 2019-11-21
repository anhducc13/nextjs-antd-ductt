import React, { useState } from 'react';
import { Avatar, Badge, Button, Divider, Drawer, Dropdown, Icon, Layout, Menu, Row, Tooltip } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import 'assets/scss/admin.scss';
import  CustomSider from 'components/Admin/CustomSider';

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
            <CustomSider />
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
        <div style={{ height: '100%', display: 'flex' }}>
          <div className="left-sider">
            <div>
              <Header>
                <Link href="/admin">
                  <a className="brand">
                    <strong className="mx-1 text-black">One</strong>
                  </a>
                </Link>
              </Header>
            </div>
            <CustomSider />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Admin;

