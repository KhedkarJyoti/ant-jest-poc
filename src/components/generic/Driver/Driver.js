import { Button, Col, DatePicker, Divider, Flex, Form, Input, InputNumber, Row, Select, Space, Table, Typography, Upload, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getRideTypesList } from "../../../redux/actions/RideTypeAction";
import { getVehicleTypes } from "../../../redux/actions/VehicleTypeAction";
import { getPackagesList } from "../../../redux/actions/PackageAction";
import { DeleteOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons";
import { addDriver } from "../../../redux/actions/DriverAction";
import './Driver.css'

const { Title } = Typography;
const { Item } 	= Form;


const Driver = ()=>{
	const dispatch = useDispatch();


    const [form] 	= Form.useForm(); 	
    const isDriverAdded = useSelector((state)=>state.driversData.isDriverAdded);
	console.log("isDriverAdded =. ",isDriverAdded)

	useEffect(()=>{
		if(isDriverAdded){
			message.success("Driver added successfully...")
		}
	},[isDriverAdded])

    return(
        <>
            <Flex align='center' justify='center' style={{height:'100%'}} vertical>
                <Form 
					className="driver-form"
					form={form}
					layout='vertical'
					variant='outlined'
					onFinish={(data) => dispatch(addDriver(data))}
				>
					<Title level={5} align='center'> Add Driver </Title>
					<Divider></Divider>
					<Row className="driver-form-row"
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}					
                    >
						<Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='name' 
                            label='Driver Name'
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input driver name!',
									},
								]}
							>
								<Input placeholder='Enter Driver Name' ></Input>
							</Item>
						</Col>
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='gender' label='Gender'
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please select gender!',
									},
								]}
							>
                                <Select 
                                    placeholder="Select Gender"
                                >  
                                    <Select.Option value='Male'>Male</Select.Option>
                                    <Select.Option value='Female'>Female</Select.Option>
                                </Select>
							</Item>
						</Col>
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='dob' label='Date-of-Birth'
								rules={[
									{
										required: true,
										type:'date',
										message: 'Please select date-of-birth!',
									},
								]}
							> 
                                <DatePicker placeholder="Select Date-of-Birth" /> 
							</Item>
						</Col>
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='age' label='age'
								rules={[
									{
										required: true,
										type:'integer',
										message: 'Please input age!',
									},
								]}
							>
								<InputNumber placeholder='Enter Age' min={18} max={100}></InputNumber>
							</Item>
						</Col> 
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='mobile' label='Mobile Number'
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input mobile number!',
									},
								]}
							>
								<Input placeholder='Enter Mobile Number' ></Input>
							</Item>
						</Col>    
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='aadhar' 
                                label='Aadhar Number'
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input aadhar number!',
									},
								]}
							>
								<Input placeholder='Enter Aadhar Number' ></Input>
							</Item>
						</Col> 
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='drivingLicense' 
                                label='Driving License'
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input driving license number!',
									},
								]}
							>
								<Input placeholder='Enter Driving License Number' ></Input>
							</Item>
						</Col> 
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='photo' label='Photo'
							>
								<Upload
                                    // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    listType="picture"
                                    // defaultFileList={[...fileList]}
                                >
                                    <Button className="vehicle-img-upload-btn" icon={<UploadOutlined />}>Upload Photo</Button>
                                </Upload>
							</Item>
						</Col>                        
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='address' label='Address'
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input address!',
									},
								]}
							>
								<Input.TextArea placeholder='Enter Address' ></Input.TextArea>
							</Item>
						</Col>
						<Col  xs={24} sm={24} md={24} lg={24} xl={24} className="vehicle-form-submit-row">
							<Item>
								<Button type="primary" htmlType="submit" className="package-form-button">
									Submit
								</Button>
							</Item>
						</Col>
					</Row>
				</Form> 
            </Flex>
        </>
    )
} 

export default Driver;