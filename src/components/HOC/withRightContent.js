import React from 'react';
import { Col, Row } from 'antd';
import FeedTestExam from 'components/FeedTestExam';
import FeedExamRoom from 'components/FeedExamRoom';

export const withRightContent = Comp => ({ ...props }) => {
  return (
    <div className="container">
      <Row gutter={12}>
        <Col span={24} lg={{ span: 16 }}>
          <Comp {...props} />
        </Col>
        <Col span={24} lg={{ span: 8 }} className="mt-3">
          <FeedTestExam/>
          <FeedExamRoom/>
        </Col>
      </Row>
    </div>
  );
};
