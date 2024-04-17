import { Button, Col, Divider, Flex, Form, Input, Row, Select, Space, Table, Typography, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { addPackage, getPackagesList } from '../../../redux/actions/PackageAction'
import './Package.css'

const { Title } = Typography;
const { Item } 	= Form;

const Package = ()=>{
	const rideTypes = useSelector((state) => state.rideTypesData.rideTypes);
	const packages = useSelector((state) => state.packagesData.packages);
	const isPackageAdded = useSelector((state) => state.packagesData.isPackageAdded);
	const dispatch = useDispatch();
	const [form] 	= Form.useForm(); 
	console.log("isPackageAdded =. ",isPackageAdded)

	useEffect(()=>{
		dispatch(getPackagesList())
	},[])

    const rideTypeOptions = rideTypes && rideTypes?.map(item =>(        
        <Select.Option value={item.rideType}>{item.rideType}</Select.Option>
    ))

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
		  title: 'Package',
		  dataIndex: 'package',
		  key: 'package',
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
    
    

	useEffect(()=>{
		if(isPackageAdded){
			message.success("Package added successfully...")
			dispatch(getPackagesList());
		}
	},[isPackageAdded])

    return(
        <>
            <Flex align='center' justify='center' style={{height:'100%'}} vertical>
                <Form 
					className="package-form"
					form={form}
					layout='inline'
					variant='outlined'
					onFinish={(data) => dispatch(addPackage(data))}
				>
					<Title level={5} align='center'> Add Package </Title>
					<Divider></Divider>
					<Row className="package-form-row"
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}					
                    >
                        <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
							<Item name='rideType' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please select ride type!',
									},
								]}
							>
								<Select 
                                    placeholder="Select Ride Type"
                                >  
                                    {rideTypeOptions}  
                                </Select>
							</Item>
						</Col>
						<Col  xs={24} sm={24} md={10} lg={10} xl={10}>
							<Item name='package' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input package name!',
									},
								]}
							>
								<Input placeholder='Enter Package Name Km/Hr' ></Input>
							</Item>
						</Col>
						<Col xs={24} sm={24} md={4} lg={4} xl={4}>
							<Item>
								<Button type="primary" htmlType="submit" className="package-form-button">
									Submit
								</Button>
							</Item>
						</Col>
					</Row>
				</Form> 
				<Divider />
				<Table 
					bordered
					columns={columns} 
					dataSource={packages} 	
					style={{width:'100%'}}				
				/>
            </Flex>
        </>
    )
} 

export default Package;