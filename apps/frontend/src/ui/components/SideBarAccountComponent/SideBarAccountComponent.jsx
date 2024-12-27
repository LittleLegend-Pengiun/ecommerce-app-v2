import React,{useState} from 'react'
import accountLogo from '../../assets/images/account/account-logo.png'
import {
    WrapperUl,
    WrapperLi,
    WrapperLink,
} from './style.js'
import './style.scss'
import { useNavigate } from 'react-router-dom'
const SideBarAccountComponent = () => {
    const [activeLink, setActiveLink] = useState(null);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };
  return (
    <div>
        <div style={{border:'1px solid #e5e5e5',padding:'20px 0',textAlign:'center',backgroundColor:'white'}}>
            <img src={accountLogo} alt="avatar" style={{borderRadius:'50%',width:'150px',height:'auto'}}/>
            <p style={{fontSize:'20px',fontWeight:'500',marginTop:'10px'}}>{localStorage.getItem('username')}</p>
        </div>
        <div style={{marginTop:'20px'}}>
                {/* <WrapperUl style={{ listStyle: 'none', padding: '0' }}>
                    <WrapperLink
                    className={active === 1 ? 'active' : ''}
                    >
                        <WrapperLi onClick={()=>{handleNavigate('/manage-account/:id'),handleOnClick()}}>Thông tin tài khoản</WrapperLi>
                    </WrapperLink>
                    <WrapperLink
                    className={active === 1 ? 'active' : ''}
                    >
                        <WrapperLi onClick={()=>{handleNavigate('/manage-order/:id'),handleOnClick()}}>Lịch sử mua hàng</WrapperLi>
                    </WrapperLink>
                </WrapperUl> */}
                {/* <WrapperUl style={{ listStyle: 'none', padding: '0' }}>
                    <WrapperLink className={active1 ? 'active' : ''}>
                        <WrapperLi onClick={() => handleNavigate('/manage-account/:id', setActive1)}>Thông tin tài khoản</WrapperLi>
                    </WrapperLink>
                    <WrapperLink className={active2 ? 'active' : ''}>
                        <WrapperLi onClick={() => handleNavigate('/manage-order/:id', setActive2)}>Lịch sử mua hàng</WrapperLi>
                    </WrapperLink>
                </WrapperUl> */}
                <WrapperUl style={{ listStyle: 'none', padding: '0' }}>
                    <WrapperLink className={activeLink === 1 ? 'active' : ''}>
                        <WrapperLi onClick={() => {setActiveLink(1);handleNavigate('/manage-account/:id')}}>Thông tin tài khoản</WrapperLi>
                    </WrapperLink>
                    <WrapperLink className={activeLink === 2 ? 'active' : ''}>
                        <WrapperLi onClick={() => { setActiveLink(2);handleNavigate('/manage-order/:id')}}>Lịch sử mua hàng</WrapperLi>
                    </WrapperLink>
                </WrapperUl>
        </div> 
    </div>
  )
}

export default SideBarAccountComponent