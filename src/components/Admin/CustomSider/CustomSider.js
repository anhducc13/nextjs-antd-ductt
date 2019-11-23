import React from 'react';
import { Avatar, Badge, Divider, Dropdown, Icon, Menu, Row, Tooltip } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const nav = [
  {
    title: 'Quản lý đề thi',
    key: '1',
    url: null,
    icon: null,
    children: [
      {
        title: 'Danh sách đề thi',
        url: '/admin/test-exams/list',
        key: '/admin/test-exams/list',
        icon: 'fa fa-list',
      },
      {
        title: 'Thêm đề thi mới',
        url: '/admin/test-exams/add',
        key: '/admin/test-exams/add',
        icon: 'fa fa-plus',
      },
    ],
  },
  {
    title: 'Quản lý bài viết',
    key: '2',
    url: null,
    icon: null,
    children: [
      {
        title: 'Danh sách bài viết',
        url: '/admin/posts/list',
        key: '/admin/posts/list',
        icon: 'fa fa-list',
      },
      {
        title: 'Thêm bài viết mới',
        url: '/admin/posts/add',
        key: '/admin/posts/add',
        icon: 'fa fa-plus',
      },
    ],
  },
];


export default () => {
  const route = useRouter();

  return (
    <>
      <Menu
        mode="inline"
        className="border-0 m-0 pt-1 scroll-y"
        theme="dark"
        style={{
          flex: '1 1 0%',
          height: '100%',
        }}
        defaultSelectedKeys={[route.pathname]}
      >
        {
          nav.map(n => {
            return (
              <Menu.ItemGroup key={n.key} title={n.title}>
                {
                  n.children.map(c => {
                    return (
                      <Menu.Item key={c.key} onClick={() => route.push(c.url)}>
                        <i className={`${c.icon} mr-3`} aria-hidden="true"/>
                        {c.title}
                      </Menu.Item>
                    );
                  })
                }
              </Menu.ItemGroup>
            );
          })
        }

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
  );
}
