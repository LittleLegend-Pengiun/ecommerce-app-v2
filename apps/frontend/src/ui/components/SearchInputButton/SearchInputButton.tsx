import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { SearchOutlined } from '@ant-design/icons';

interface SearchInputButtonProps {
  value?: string;
  size?: 'small' | 'middle' | 'large'; // Assuming Ant Design size options, adjust as needed
  placeholder?: string;
  textButton: string;
  backgroundColorButton?: string;
  backgroundColorInput?: string;
  textButtonColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

const SearchInputButton: React.FC<SearchInputButtonProps> = ({
  value,
  size,
  placeholder,
  textButton,
  backgroundColorButton = '#DCDCDC',
  backgroundColorInput = '#fff',
  textButtonColor = '#fff',
  onChange,
  onSearch,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <InputComponent
        value={value}
        size={size}
        placeholder={placeholder}
        style={{ backgroundColor: backgroundColorInput, borderRadius: '0' }}
        onChange={onChange}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          backgroundColor: backgroundColorButton,
          color: textButtonColor,
          borderRadius: '0',
        }}
        icon={<SearchOutlined />}
        textButton={textButton}
        styleTextButton={{ color: textButtonColor }}
        onClick={onSearch}
      />
    </div>
  );
};

export default SearchInputButton;
