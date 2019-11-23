import React, { useState } from 'react';
import { Avatar, Button, Drawer, Icon, Layout, Menu } from 'antd';
import Link from 'next/link';
import CustomSider from '../Admin/CustomSider';
import 'assets/scss/admin.scss';

const { Header, Content, Sider } = Layout;

export const withLayoutAdmin = Comp => ({ ...props }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  return (
    <>
      <Layout>
        <Header>
          <Button
            className="d-md-none p-0"
            type="link"
            onClick={e => {
              e.preventDefault();
              setVisibleDrawer(true);
            }}
          >
            <Icon type="double-right" style={{ fontSize: 18, marginRight: 10 }}/>
          </Button>
          <Link href="/admin">
            <a className="brand m-0 ml-4">
              <strong className="pb-md-1 mx-2 text-black">Ductt</strong>
            </a>
          </Link>
          <span className="mr-auto"></span>
          <Menu mode="horizontal">
            <Menu.Item key={1} id="hidden-md-down">
              <Icon
                type="fullscreen"
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
            <CustomSider/>
          </Sider>
          <Content>
            <Comp {...props}/>
          </Content>
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
                    <strong className="mx-1 text-black">Ductt</strong>
                  </a>
                </Link>
              </Header>
            </div>
            <CustomSider/>
          </div>
        </div>
      </Drawer>
    </>
  );
};
