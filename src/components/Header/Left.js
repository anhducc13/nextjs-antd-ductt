import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const styleActiveLink = {
  color: '#0B1A33',
};

export default () => {
  const route = useRouter();
  return (
    <div className="main-navbar__left">
      <Link href="/">
        <a className="main-navbar__logo d-none d-lg-block mr-lg-5">
          <img src="https://upload.wikimedia.org/wikipedia/vi/6/6e/Vtv3_logo.png" alt="Viblo"/>
        </a>
      </Link>
      <span className="d-lg-none">
        <a className="nav nav-link dropdown-toggle collapsed" href="#" data-toggle="dropdown">
            <i className="fa fa-navicon icon-nav" style={{ fontSize: 18, color: '#fff' }}/>
        </a>
        <ul className="dropdown dropdown-menu dropdown-menu-left">
          <li>
            <Link href="/">
              <a className="link-info" style={/^\/$/.test(route.pathname) ? styleActiveLink : {}}>
                <i className="fa fa-home"/>
                 Trang chủ
              </a>
            </Link>
            <Link href="/test-exams">
              <a className="link-info" style={/^\/test-exams/.test(route.pathname) ? styleActiveLink : {}}>
                <i className="fa fa-file-text-o"/>
                 Đề thi thử
              </a>
            </Link>
          </li>
          <li>
            <Link href="/exam-rooms">
              <a className="link-info" style={/^\/exam-rooms/.test(route.pathname) ? styleActiveLink : {}}>
                <i className="fa fa-users"/>
                 Phòng thi
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="link-info" style={/^\/posts/.test(route.pathname) ? styleActiveLink : {}}>
                <i className="fa fa-newspaper-o"/>
                 Bài viết
              </a>
            </Link>
          </li>
        </ul>
      </span>
      <ul className="d-none d-lg-flex main-menu list-unstyled">
        <li className="main-menu__item">
          <Link href="/test-exams">
            <a className="link" style={/^\/test-exams/.test(route.pathname) ? styleActiveLink : {}}>
              Đề thi thử
            </a>
          </Link>
        </li>
        <li className="main-menu__item">
          <Link href="/exam-rooms">
            <a className="link" style={/^\/exam-rooms/.test(route.pathname) ? styleActiveLink : {}}>
              Phòng thi
            </a>
          </Link>
        </li>
        <li className="main-menu__item">
          <Link href="/posts">
            <a className="link" style={/^\/posts/.test(route.pathname) ? styleActiveLink : {}}>
              Bài viết
            </a>
          </Link>

        </li>
      </ul>
    </div>
  );
}
