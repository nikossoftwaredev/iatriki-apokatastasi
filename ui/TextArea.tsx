/* eslint-disable react/jsx-props-no-spreading */
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type TextFieldProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextArea = (props: TextFieldProps) => {
  const { className } = props;

  return (
    <textarea
      {...props}
      className={`bg-white border-2 rounded-lg px-2 py-5 focus:border-blue focus:outline-none ${className}`}
    />
  );
};

export default TextArea;
