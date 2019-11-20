import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const buttons = [
  { currPath: '/test-exams', text: 'Thêm đề thi', nextPath: '/test-exams/add' },
  { currPath: '/exam-rooms', text: 'Thêm phòng thi', nextPath: '/exam-rooms/add' },
  { currPath: '/posts', text: 'Thêm bài viết', nextPath: '/posts/add' },
];

export default () => {
  const route = useRouter();
  const buttonAdd = buttons.filter(b => b.currPath === route.pathname);
  const showButtonAdd = buttonAdd.length !== 0;

  const classActive = (subject) => route.query.subject && route.query.subject === subject ? ' active' : '';
  return (
    <div className="bg-dark py-md-3 pt-2 pb-3 px-3">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="feed-bar">
            <div className="feedbar-wrapper">
              <ul className="feed-links">
                <li className={`feedbar-item ${!!route.query.subject ? '' : ' active'}`}>
                  <Link href={`${route.pathname}`}>
                    <a className="feed-link">
                      <div className="el-badge badge-has-new">
                        Tất cả
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={`feedbar-item${classActive('math')}`}>
                  <Link href={`${route.pathname}?subject=math`}>
                    <a className="feed-link">
                      <div className="el-badge badge-has-new">
                        Toán học
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={`feedbar-item${classActive('phy')}`}>
                  <Link href={`${route.pathname}?subject=phy`}>
                    <a className="feed-link">
                      <div className="el-badge badge-has-new">
                        Vật lý
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={`feedbar-item${classActive('che')}`}>
                  <Link href={`${route.pathname}?subject=che`}>
                    <a className="feed-link">
                      <div className="el-badge badge-has-new">
                        Hóa học
                      </div>
                    </a>
                  </Link>
                </li>
                <li className={`feedbar-item${classActive('bio')}`}>
                  <Link href={`${route.pathname}?subject=bio`}>
                    <a className="feed-link">
                      <div className="el-badge badge-has-new">
                        Sinh học
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {showButtonAdd && (
            <Link href={buttonAdd[0].nextPath}>
              <a
                style={{ fontSize: '0.75rem' }}
                className="btn btn-primary float-right text-uppercase d-none d-lg-block">
                <i aria-hidden="true" className="fa fa-pencil"/>
                {buttonAdd[0].text}
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>

  );
}
