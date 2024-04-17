import React, { useEffect, useState } 			from "react";
import { useDispatch, useSelector } 	from "react-redux";
import { useNavigate } 	from "react-router";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Flex, Form, Input, Layout, Typography, message } from "antd";
import { loginUser, registerUser } from "../../../redux/actions/AuthAction";
import './layout.css';

const { Item } 	= Form;
const { Title } = Typography;


const Register = () => {
	const dispatch 	= useDispatch();
    const navigate 	= useNavigate();
    const [form] 	= Form.useForm(); 
    const isRegistered = useSelector((state)=>state.userAuth.isRegistered);
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    useEffect(()=>{
        console.log("isRegistered => ",isRegistered);
            if(isRegistered){
                navigate("/login");                
            }
    },[isRegistered]);

    const register = (data)=>{
        console.log("data => ",data)
        if(data && data.username && data.email && data.password){
            dispatch(registerUser(data))
            setIsBtnClicked(true);
        }else{
            message.error('Please check your details...');
        }

    }

    return(
		<Layout style={{    
            background: 'aliceblue',
            height: '100vh',
            padding:'30px'
        }}>
            <Flex align='center' justify='center' style={{height:'100%'}}>
				<Form 
					className="login-form"
					form={form}
					layout='vertical'
					variant='outlined'
					onFinish={(data) => {register(data)}}
				>
					<Title level={3} align='center'> Register </Title>
					<Divider></Divider>
                    <Item name='username' 
						rules={[
							{
								required: true,
								type:'string',
								message: 'Please input name!',
							},
						]}
					>
						<Input placeholder='Enter User Name' prefix={<UserOutlined className="site-form-item-icon" />}></Input>
					</Item>
					<Item name='email' 
						rules={[
							{
								required: true,
								type:'email',
								message: 'Please input valid email!',
							},
						]}
					>
						<Input placeholder='Enter Email Id' prefix={<MailOutlined className="site-form-item-icon" />}></Input>
					</Item>
					<Item name='password' 
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>                    
						<Input.Password 
							prefix={<LockOutlined className="site-form-item-icon" />}
							placeholder='Enter Password'
							// iconRender={(visible)=>{ visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}}
						></Input.Password>
					</Item>

					<Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
                            Register
						</Button>
						<div className="register-link">
							Or <br></br><a href=""> Login!</a>
						</div>
					</Item>
				</Form>
			</Flex>
        </Layout>
	)
}

export default Register;