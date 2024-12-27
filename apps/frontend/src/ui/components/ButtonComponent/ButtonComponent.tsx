import React from 'react';
import { Button, ButtonProps } from 'antd';

interface ButtonComponentProps extends ButtonProps {
  size?: 'large' | 'middle' | 'small';
  styleButton?: React.CSSProperties;
  styleTextButton?: React.CSSProperties;
  textButton: string;
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
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;