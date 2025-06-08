import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image } from 'antd';
import imageLogin from '../../assets/images/logo-login.png';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '400px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p style={{ fontSize: '13px' }}>Đăng nhập và tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
          <div style={{ position: 'relative', fontSize: '16px' }}>
            <span style={{ zIndex: 10, position: 'absolute', top: '8px', right: '8px' }}>
              {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
            </span>
          </div>
          <InputForm style={{ marginBottom: '10px' }} placeholder="password" />
          <div style={{ position: 'relative', fontSize: '16px' }}>
            <span style={{ zIndex: 10, position: 'absolute', top: '8px', right: '8px' }}>
              {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
            </span>
          </div>
          <InputForm placeholder="confirm password" />
          <ButtonComponent
            size={40}
            style={{ background: 'rgb(255, 66, 78)', height: '48px', width: '100%', border: 'none', borderRadius: '4px', margin: '26px 0 10px' }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}
          ></ButtonComponent>
          <p style={{ fontSize: '13px' }}>Bạn đã có tài khoản? <WrapperTextLight> Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogin} preview={false} alt="login-img" height='200px' width='200px' />
          <h3>Mua sắm tại DACS</h3>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage