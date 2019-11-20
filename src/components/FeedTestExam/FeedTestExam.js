import React, { useEffect, useGlobal, useState } from 'reactn';
import { Button, Spin } from 'antd';

const keyButton = {
  NEW: 1,
  VIEW: 2,
};

const fetchData = (bo) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(
      [...Array(5).keys()].map((e) => {
        return {
          id: e,
          subject: 'Toán học',
          name: `Đề thi thử môn ${bo ? 'Toán' : 'Lý'} TRƯỜNG ĐHSP HÀ NỘI TRƯỜNG THPT CHUYÊN lần 3 2019`,
          numOfQuestion: 50,
          star: 4,
          countTest: 10,
          link: 'abc',
        };
      }));
  }, 2000));

export default () => {
  const [stateButton, setStateButton] = useState(keyButton.NEW);
  const [listNewTest, setListNewTest] = useGlobal('newestTestExam');
  const [listViewTest, setListViewTest] = useGlobal('viewTestExam');
  const [loading, setLoading] = useState(false);


  const handleLoadNewTest = async () => {
    setLoading(true);
    try {
      const data = await fetchData(true);
      setListNewTest(data);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadViewTest = async () => {
    setLoading(true);
    try {
      const data = await fetchData(false);
      setListViewTest(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (listNewTest.length === 0) {
      handleLoadNewTest();
    }
    if (listViewTest.length === 0) {
      handleLoadViewTest();
    }
  }, []);

  return (
    <>
      <div className="label-body my-3">
      <span>
        <i className="fa fa-bell"/>
        Đề thi thử
      </span>
      </div>
      <Spin spinning={loading}>
        <div className="d-flex justify-content-around mt-2">
          <Button
            type={stateButton === keyButton.NEW ? 'primary' : 'dashed'}
            onClick={e => {
              e.preventDefault();
              if (stateButton === keyButton.NEW) {
                return;
              }
              setStateButton(keyButton.NEW);
            }}
          >
            Mới nhất
          </Button>
          <Button
            type={stateButton === keyButton.VIEW ? 'primary' : 'dashed'}
            onClick={e => {
              e.preventDefault();
              if (stateButton === keyButton.VIEW) {
                return;
              }
              setStateButton(keyButton.VIEW);
            }}
          >
            Xem nhiều
          </Button>
        </div>
        {stateButton === keyButton.NEW &&
        <ul className="mh-custom-posts-widget clearfix">
          {
            listNewTest.map(e => {
              return (
                <li className="d-flex justify-content-center clearfix mt-3">
                  <figure className="mr-3">
                    <a
                      href={e.link}
                      title={e.name}
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
                      <a href={e.link} title={e.name}>
                        {e.name}
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
              );
            })
          }
        </ul>
        }
        {stateButton === keyButton.VIEW &&
        <ul className="mh-custom-posts-widget clearfix">
          {
            listViewTest.map(e => {
              return (
                <li className="d-flex justify-content-center clearfix mt-3">
                  <figure className="mr-3">
                    <a
                      href={e.link}
                      title={e.name}
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
                      <a href={e.link} title={e.name}>
                        {e.name}
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
              );
            })
          }
        </ul>
        }
      </Spin>
    </>
  );
};
