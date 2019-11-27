import React from 'react';
import Head from 'next/head';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { withLayoutAdmin } from 'components/HOC/withLayoutAdmin';

const TestExamAdd = () => {

  return (
    <>
      <Head>
        <title>Thêm đề thi</title>
        <link rel='icon' href='/favicon.ico'/>
        <meta name="viewport" content="width=1190, initial-scale=1"/>
      </Head>
      <Card className="m-3" style={{ height: '100%' }}>
        <Row gutter={12}>
          <Col span={20}>
            <div className="d-flex justify-content-between mb-2">
              <h2 className="align-self-center">Tạo đề thi mới</h2>
              <Button className="align-self-center" size="large" type="primary">Tạo đề mới</Button>
            </div>
            <Form.Item>
              <Input placeholder="Nhập tên đề thi" size="large"/>
            </Form.Item>
            <Form.Item>
              <Input.TextArea rows={6} placeholder="Viết mô tả cho đề thi của bạn..."/>
            </Form.Item>
            <Form.Item>
              <Row gutter={12}>
                <Col span={12}>
                  <Button className="text-uppercase" size="large" block>Nhập câu hỏi từ pdf</Button>
                </Col>
                <Col span={12}>
                  <Button className="text-uppercase" size="large" block>Nhập câu hỏi word</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button size="large" type="dashed" block>Click vào đây để thêm</Button>
            </Form.Item>
          </Col>
          <Col span={4}>
            abc
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default withLayoutAdmin(TestExamAdd);

