import React from 'react';
import CKEditor from 'ckeditor4-react';

CKEditor.editorUrl = '/assets/ckeditor/ckeditor.js';

export default (props) => {
  const { data, onChange, ...others } = props;
  return (
    <>
      <CKEditor
        data={data}
        onChange={onChange}
        {...others}
      />
    </>
  );
}
