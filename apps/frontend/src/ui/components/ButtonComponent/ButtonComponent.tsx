import React, { ForwardedRef } from 'react';
import { Button, ButtonProps } from 'antd';

interface ButtonComponentProps extends ButtonProps {
  size?: 'large' | 'middle' | 'small';
  styleButton?: React.CSSProperties;
  styleTextButton?: React.CSSProperties;
  textButton: string | ForwardedRef<HTMLDivElement>;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  ...rests
}) => {
  return (
    <Button
      size={size}
      style={styleButton}
      {...rests}
    >
      <span style={styleTextButton}> {
        typeof textButton === 'string' ? (
          <span>{textButton}</span>
        ) : (
          <div ref={textButton} />
        )
      }</span>
    </Button>
  );
};

export default ButtonComponent;