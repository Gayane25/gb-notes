import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {loginAsync} from "../redux/asyncActions";
import {useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

function LoginForm() {
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = ()=>{
      dispatch(loginAsync(email,pass))
      navigate("/dashboard")
    }
  return (
   
      <Form
        name="normal_login"
        className="login-form"
        onFinish={handleSignIn}
        style={{
          width:"300px"
        }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          type="email"
          placeholder="Email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}

          />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
    );
  
}


export default LoginForm;