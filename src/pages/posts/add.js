import React, { useState } from 'react';
import CustomEditor from 'components/CustomEditor';
import MathJax from 'react-mathjax2';

const PostNew = () => {
  const [data, setData] = useState('');
  // const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))';
  // const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$ symbols like $$${ascii}$$`;
  return (
    <>
      <CustomEditor
        data={data}
        onChange={e => {
          setData(e.editor.getData());
          console.log(data);
        }}
      />
      <span dangerouslySetInnerHTML={{ __html: data }}/>
      <MathJax.Context
        input='tex'
        onLoad={() => console.log('Loaded MathJax script!')}
        onError={(MathJax, error) => {
          console.warn(error);
          console.log('Encountered a MathJax error, re-attempting a typeset!');
          MathJax.Hub.Queue(
            MathJax.Hub.Typeset(),
          );
        }}
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML"
        options={{
          asciimath2jax: {
            useMathMLspacing: true,
            delimiters: [['\(', '\)']],
            preview: 'none',
          },
        }}
      >
        <MathJax.Text text={data}/>
      </MathJax.Context>
    </>
  );
};

export default PostNew;
