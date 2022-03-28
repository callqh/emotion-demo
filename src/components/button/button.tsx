import { css } from '@emotion/react';

const Button = ({ color = 'red' }) => {
  const style = css`
    margin-top: 20px;
  `;
  // console.log(style);
  return (
    <>
      <button
        css={{
          fontSize: 22,
          color: '#f10215',
          border: '1px solid blue',
          marginBottom: 10,
          '&:hover': {
            color: 'purple',
          },
        }}
      >
        Object style
      </button>
      <div
        css={css`
          padding: 12px;
          width: 120px;
          background-color: hotpink;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
          ${style}
        `}
      >
        字符串类型的样式
      </div>
    </>
  );
};

export default Button;
