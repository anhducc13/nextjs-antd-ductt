import React, { useState } from 'react';
import CustomEditor from 'components/CustomEditor';

const PostNew = () => {
  const [data, setData] = useState('');
  return (
    <>
      <CustomEditor
        data={data}
        onChange={e => {
          setData(e.editor.getData());
          console.log(data);
        }}
      />
    </>
  );
};

export default PostNew;
