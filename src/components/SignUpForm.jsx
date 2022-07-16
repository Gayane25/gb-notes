import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
// import Input from './Input';
import {authAsync} from "../redux/asyncActions";
import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


function SignUpForm() {

    const [email, setEmail]= useState("");
    const [pass, setPass] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
   
    const handleSignUp = ()=>{
      dispatch(authAsync(email, pass));
      navigate("/dashboard")
      // console.log(user)
      
    }

   
  return (
    // <div>
    //     <Input value={email} onChange={(e)=>setEmail(e.target.value)} name ="Email" />
    //     <Input value={pass} onChange={(e)=>setPass(e.target.value)} name ="Password"/>
    //     <button onClick ={handleSignUp}>SignUp</button>

    // </div>
    <Form
    name="normal_login"
    className="login-form"
    onFinish={handleSignUp}
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
       Sign Up
      </Button> Or
       <Link to="/login"> Login if registered</Link>
    </Form.Item>
  </Form>
  )
}

export default SignUpForm