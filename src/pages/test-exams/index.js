import React from 'react';
import { Pagination, Rate } from 'antd';
import Router, { useRouter } from 'next/router';
import { withRightContent } from 'components/HOC/withRightContent';
import { withHeaderFooter } from 'components/HOC/withHeaderFooter';

const TestExam = (props) => {
  const { exams, totalItems } = props;
  const router = useRouter();

  const { page = 1 } = router.query;

  const handleChangePagination = (p) => {
    Router.push({ pathname: router.pathname, query: { ...router.query, page: p } });
  };
  return (
    <>
      <div className="features">
        <h2 className="text-center">Danh sách đề thi</h2>
      </div>
      <div className="label-body text-right">
        <span className="label-result">
          Có {totalItems} đề thi trên 88 trang
        </span>
      </div>
      <ul className="list-content">
        {
          exams.map((e) => {
            return (
              <li className="item-content" key={e.id}>
                <div className="row justify-content-center">
                  <p className="col mt-2">
              <span className="label-subject-color">
                <i className="fa fa-filter"/>
                {e.subject}
              </span>
                    &nbsp;| {e.countTest} lượt thi
                  </p>
                  <Rate className="d-none d-md-block" value={e.star} disabled/>
                </div>
                <div className="i-head">
                  <h3 className="i-title">
                    <a href={e.link} title="Đề thi thử Phan Khắc Nghệ">
                      {e.name}
                    </a>
                  </h3>
                </div>
                <div className="row justify-content-center">
            <span className="col mt-2">
              <i className="fa fas fa-question-circle"/>
              {e.numOfQuestion} câu
            </span>
                  <span>
              <a href="#">
                <button className="btn btn_orange_sm">
                  <i className="fa fa-check-circle"/>
                  Xem đề thi
                </button>
              </a>
            </span>
                </div>
              </li>
            );
          })
        }
      </ul>
      <Pagination
        className="float-right mb-4"
        current={Number(page)}
        total={totalItems}
        onChange={handleChangePagination}
      />
    </>
  );
};

const TestExamContainer = withHeaderFooter(withRightContent(TestExam));

TestExamContainer.getInitialProps = async () => {
  const res = [...Array(10).keys()].map((e) => {
    return {
      id: e,
      subject: 'Toán học',
      name: 'Đề thi thử môn Toán TRƯỜNG ĐHSP HÀ NỘI TRƯỜNG THPT CHUYÊN lần 3 2019',
      numOfQuestion: 50,
      star: 4,
      countTest: 10,
      link: 'abc',
    };
  });
  return { exams: res, totalItems: 500 };
};

export default TestExamContainer;
