import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
const SearchInputButton = (props) => {
    const {value,size,placeholder,textButton,backgroundColorButton = '#DCDCDC',backgroundColorInput='#fff',textButtonColor='#ff',onChange,onSearch} = props
  return (
    <div style={{display:'flex'}}>
        <InputComponent 
        value={value}
        size={size} 
        placeholder={placeholder} 
        style={{backgroundColor:backgroundColorInput,borderRadius:'0'}}
        onChange={onChange}
        />
        <ButtonComponent
          size={size} 
          styleButton={{backgroundColor:backgroundColorButton,color:textButtonColor,borderRadius:'0'}}
          icon={<SearchOutlined />}
          textButton={textButton}
          styleTextButton={{color:textButtonColor}}
          onClick={onSearch}
        />
    </div>
  )
}

export default SearchInputButton