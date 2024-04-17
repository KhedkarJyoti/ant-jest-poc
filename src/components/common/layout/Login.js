import React 			from "react";
import { useDispatch } 	from "react-redux";
import { useNavigate } 	from "react-router";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Flex, Form, Input, Layout, Typography, message } from "antd";
import './layout.css';
import { loginUser } from "../../../redux/actions/AuthAction";

const { Item } 	= Form;
const { Title } = Typography;


const Login = () => {
	const dispatch 	= useDispatch();
    const navigate 	= useNavigate();
    const [form] 	= Form.useForm(); 

    const login = (data)=>{
        console.log("data => ",data)
        if(data && data.username && data.password){
            // localStorage.setItem('username' , data.username);
            // localStorage.setItem('password' , data.username);
            dispatch(loginUser(data))
            .then(() => {
                navigate("/");
                window.location.reload();
                message.success("Login Successful...");
            })
            .catch(() => {
                message.error('Something went wrong...');
                // setLoading(false);
            });
        }else{
            message.error('Please check you login details...');
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
					onFinish={(data) => {login(data)}}
				>
					<Title level={3} align='center'> Login </Title>
					<Divider></Divider>
					<Item name='username' 
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
						<Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Item>
						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Item>

					<Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Login
						</Button>
						<div className="register-link">
							Or <br></br><a href="">Register Now!</a>
						</div>
					</Item>
				</Form>
			</Flex>
        </Layout>
	)
}

export default Login;