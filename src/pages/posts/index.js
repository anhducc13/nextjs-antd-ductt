import React from 'react';
import { withHeaderFooter } from 'components/HOC/withHeaderFooter';
import { withRightContent } from 'components/HOC/withRightContent';

const Post = () => {
  return (
    <div>
      Bai viet
    </div>
  );
};

const PostContainer = withHeaderFooter(withRightContent(Post));

export default PostContainer;
