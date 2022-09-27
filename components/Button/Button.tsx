import React from 'react';

interface Props {
  active: boolean;
  text: string;
  clickHandle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
  active = false,
  text = 'button',
  clickHandle,
}: Props) => {
  if (active) {
    return (
      <button className='bg-blue-500 border-2 border-blue-500  text-white font-semibold rounded px-4 py-1'>
        {text}
      </button>
    );
  } else {
    return (
      <button
        onClick={clickHandle}
        className='border-2 hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 font-semibold rounded px-4 py-1'
      >
        {text}
      </button>
    );
  }
};

export default Button;
