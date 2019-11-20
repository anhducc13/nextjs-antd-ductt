import React from 'react';
import { withHeaderFooter } from 'components/HOC/withHeaderFooter';
import { withRightContent } from 'components/HOC/withRightContent';

const RoomExam = () => {
  return (
    <div>
      Phòng thi
    </div>
  );
};

const RoomExamContainer = withHeaderFooter(withRightContent(RoomExam));

export default RoomExamContainer;
