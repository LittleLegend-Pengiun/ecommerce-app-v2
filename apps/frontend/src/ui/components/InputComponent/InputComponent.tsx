import React from 'react';
import { Input, InputProps, InputRef } from 'antd';

interface InputComponentProps extends InputProps {
  size?: 'large' | 'middle' | 'small'; // Explicitly define the size options for Ant Design Input
  placeholder?: string;
  style?: React.CSSProperties;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  icon?: React.ReactNode;
  ref?: React.ForwardedRef<InputRef>;
}

const InputComponent: React.FC<InputComponentProps> = ({
  size,
  placeholder,
  style,
  value,
  onChange,
  icon,
  ref,
  ...rests
}) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={onChange}
      suffix={icon} // Ant Design uses `suffix` for custom icons
      ref={ref}
      {...rests}
    />
  );
};

export default InputComponent;