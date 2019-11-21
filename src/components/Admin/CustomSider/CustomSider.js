import React from 'react';
import { Avatar, Badge, Divider, Dropdown, Icon, Menu, Row, Tooltip } from 'antd';

export default () => {
  return (
    <>
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
    </>
)
}
