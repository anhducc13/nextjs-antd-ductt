import React from 'react';
import { Button } from 'antd';

export default () => {
  return (
    <>
      <div className="label-body my-3">
      <span>
        <i className="fa fa-bell"/>
        Phòng thi
      </span>
      </div>
      <div className="d-flex justify-content-around mt-2">
        <Button type="primary">Mới nhất</Button>
        <Button type="dashed">Xem nhiều</Button>
      </div>
      <ul className="mh-custom-posts-widget clearfix">
        <li
          className="d-flex justify-content-center clearfix mt-3">
          <figure className="mr-3">
            <a
              href="https://toanmath.com/2019/11/de-khao-sat-giua-ky-1-toan-11-nam-2019-2020-truong-tien-du-1-bac-ninh.html"
              title="Đề khảo sát giữa kỳ 1 Toán 11 năm 2019 – 2020 trường Tiên Du 1 – Bắc Ninh"
            >
              <img
                width="50"
                height="50"
                src="https://toanmath.com/wp-content/uploads/2018/11/icon-toanmath-de-kscl-toan-11-80x80.png"
                alt=""
              />
            </a>
          </figure>
          <div className="mh-custom-posts-header">
            <div className="mh-custom-posts-small-title">
              <a href="#" title="abc">
                Đề khảo sát giữa kỳ 1 Toán 11 năm 2019 – 2020 trường Tiên Du 1 – Bắc Ninh
              </a>
            </div>
            <div className="mh-meta mt-1">
              <span className="entry-meta-date updated"><i className="fa fa-clock-o"/>
                <a href="https://toanmath.com/2019/11">
                  5 Tháng Mười Một, 2019
                </a>
              </span>
            </div>
          </div>
        </li>
        <li
          className="d-flex justify-content-center clearfix mt-3">
          <figure className="mr-3">
            <a
              href="https://toanmath.com/2019/11/de-khao-sat-giua-ky-1-toan-11-nam-2019-2020-truong-tien-du-1-bac-ninh.html"
              title="Đề khảo sát giữa kỳ 1 Toán 11 năm 2019 – 2020 trường Tiên Du 1 – Bắc Ninh"
            >
              <img
                width="50"
                height="50"
                src="https://toanmath.com/wp-content/uploads/2018/11/icon-toanmath-de-kscl-toan-11-80x80.png"
                alt=""
              />
            </a>
          </figure>
          <div className="mh-custom-posts-header">
            <div className="mh-custom-posts-small-title">
              <a href="#" title="abc">
                Đề khảo sát giữa kỳ 1 Toán 11 năm 2019 – 2020 trường Tiên Du 1 – Bắc Ninh
              </a>
            </div>
            <div className="mh-meta mt-1">
              <span className="entry-meta-date updated"><i className="fa fa-clock-o"/>
                <a href="https://toanmath.com/2019/11">
                  5 Tháng Mười Một, 2019
                </a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
