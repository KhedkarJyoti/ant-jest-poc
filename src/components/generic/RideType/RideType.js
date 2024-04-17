import { Button, Col, Divider, Flex, Form, Input, Row, Space, Table, Typography, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getRideTypesList, addRideType } from "../../../redux/actions/RideTypeAction";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import './RideType.css'

const { Title } = Typography;
const { Item } 	= Form;

const RideType = ()=>{

	const rideTypes = useSelector((state) => state.rideTypesData.rideTypes);
	const [data, setData] = useState([]); 
	const dispatch = useDispatch();

	useEffect(()=>{
		setData(rideTypes);
	},[rideTypes])

	useEffect(()=>{
		dispatch(getRideTypesList())
	},[])

	const columns = [
		{
			title: 'Sr.No',
			dataIndex: '',
			key: 'sr.no',
			width: 100,
			render: (_, record, i) => ( <>{i+1}</>),
		},
		{
		  title: 'Ride Type',
		  dataIndex: 'rideType',
		  key: 'rideType',
		  render: (text) => <>{text}</>,
		},		
		{
		  title: 'Action',
		  key: 'action',
		  width : 250,
		  render: (_, record) => (
			<Space size="middle">
			  <a><EditOutlined /></a>
			  <a><DeleteOutlined /></a>
			</Space>
		  ),
		},
	  ];
    
    const [form] 	= Form.useForm(); 	
    const isRideTypeAdded = useSelector((state)=>state.rideTypesData.isRideTypeAdded);
	console.log("isRideTypeAdded =. ",isRideTypeAdded)

	useEffect(()=>{
		if(isRideTypeAdded){
			message.success("Ride type added successfully...")
			dispatch(getRideTypesList());
		}
	},[isRideTypeAdded])

    return(
        <>
            {/* <Flex align="center" justify="center" style={{height:450, background:'aliceblue'}}>
                 <Button>RideType Content...</Button>
            </Flex> */}
            <Flex align='center' justify='center' style={{height:'100%'}} vertical>
                <Form 
					className="ride-type-form"
					form={form}
					layout='inline'
					variant='outlined'
					onFinish={(data) => dispatch(addRideType(data))}
				>
					<Title level={5} align='center'> Add Ride Type </Title>
					<Divider></Divider>
					<Row className="form-row"
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}					>
						<Col  xs={24} sm={24} md={16} lg={18} xl={18}>
							<Item name='rideType' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input ride type!',
									},
								]}
							>
								<Input placeholder='Enter Ride Type' ></Input>
							</Item>
						</Col>
						<Col xs={24} sm={24} md={8} lg={6} xl={6}>
							<Item>
								<Button type="primary" htmlType="submit" className="ride-type-form-button">
									Submit
								</Button>
							</Item>
						</Col>
					</Row>
					
					{/* <Item name='password' 
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
					</Item> */}
					
				</Form> 
				<Divider />
				<Table 
					bordered
					columns={columns} 
					dataSource={data} 	
					style={{width:'100%'}}				
				/>
            </Flex>
        </>
    )
} 

export default RideType;