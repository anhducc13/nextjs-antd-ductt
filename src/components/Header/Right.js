import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tooltip } from 'antd';

const buttons = [
  { currPath: '/test-exams', text: 'Thêm đề thi', nextPath: '/test-exams/add' },
  { currPath: '/exam-rooms', text: 'Thêm phòng thi', nextPath: '/exam-rooms/add' },
  { currPath: '/posts', text: 'Thêm bài viết', nextPath: '/posts/add' },
];

export default () => {
  const route = useRouter();
  const buttonAdd = buttons.filter(b => b.currPath === route.pathname);
  const showButtonAdd = buttonAdd.length !== 0;


  return (
    <div className="main-navbar__right">
      <Link href="/search">
        <a className="link text-white d-block d-md-none mr-3">
          <i aria-hidden="true" className="fa fa-search"/>
        </a>
      </Link>
      <div className="sb d-none d-md-block flex-fill mr-3">
        <input placeholder="Search Ductt" className="sb__input"/>
        <button className="btn btn-primary" style={{ display: '' }}>
          <i className="fa fa-search"/>
        </button>
        <i aria-hidden="true" className="fa fa-circle-o-notch fa-spin sb-icon" style={{ display: 'none' }}/>
        <i aria-hidden="true" className="fa fa-times sb-icon clr text-muted" style={{ display: 'none' }}/>
        <div className="sb__suggestions" style={{ display: 'none' }}>
          <div/>
        </div>
      </div>
      <div className="main-navbar__group">
        {showButtonAdd && (
          <div className="d-lg-none mr-1 el-dropdown">
            <Link href={buttonAdd[0].nextPath}>
              <Tooltip placement="bottom" title={buttonAdd[0].text}>
                <a>
                  <button
                    type="button"
                    className="el-button text-white py-0 px-1 el-button--text"
                    style={{ fontSize: '1.2rem' }}
                  >
                    <i className="fa fa-pencil"/>
                  </button>
                </a>
              </Tooltip>
            </Link>
          </div>
        )}
        <span>
          <img
            src="https://cdn.viblo.asia/_nuxt/img/0bca52a.png"
            className="avatar avatar--md rounded-circle el-popover__reference"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div
            className="dropdown-menu dropdown-menu-right popover-user"
          >
            <div className="user-menu__popper">
              <div
                className="user-menu__top d-flex justify-content-between"
              >
                <img
                  src="https://cdn.viblo.asia/_nuxt/img/0bca52a.png"
                  className="avatar rounded-circle"
                  style={{ height: '70px', width: '70px' }}
                />
                <div className="flex-fill overflow-hidden">
                  <div className="user-menu__info">
                    <div className="text-primary font-weight-bold text-truncate">
                      Đức Trần
                    </div>
                    <div className="text-muted text-truncate">
                      @anhducc13
                    </div>
                  </div>
                  <a href="https://accounts.viblo.asia" target="_blank">
                    <button
                      type="button"
                      className="el-button user-menu__edit-btn el-button--primary el-button--medium"
                    >
                      <span> Sửa </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="user-menu__menu-item">
                <a href="/u/anhducc13" className="link link--plain">
                  <i className="fa fa-file-text-o"/> Đề thi của tôi
                </a>
              </div>
              <div className="user-menu__menu-item">
                <a href="/settings/organizations" className="link link--plain">
                  <i className="fa fa-users"/> Phòng thi của tôi
                </a>
              </div>
              <div className="user-menu__menu-item">
                <a href="/settings/appearances" className="link link--plain">
                  <i className="fa fa-newspaper-o"/> Bài viết của tôi
                </a>
              </div>
              <hr/>
              <div className="user-menu__menu-item">
                <a href="https://accounts.viblo.asia/logout?service=viblo">
                  <i className="fa fa-sign-out"/> Đăng xuất
                </a>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
