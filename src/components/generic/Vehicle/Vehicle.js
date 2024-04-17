import { Button, Col, Divider, Flex, Form, Input, InputNumber, Row, Select, Space, Table, Typography, Upload, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addVehicle, getVehiclesList } from "../../../redux/actions/VehicleAction";
import { getRideTypesList } from "../../../redux/actions/RideTypeAction";
import { getVehicleTypes } from "../../../redux/actions/VehicleTypeAction";
import { getPackagesList } from "../../../redux/actions/PackageAction";
import { DeleteOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons";
import './Vehicle.css'

const { Title } = Typography;
const { Item } 	= Form;


const Vehicle = ()=>{
    const vehicles = useSelector((state) => state.vehiclesData.vehicles);
	const rideTypes = useSelector((state) => state.rideTypesData.rideTypes);
    const vehicleTypes = useSelector((state) => state.vehicleTypesData.vehicleTypes);
    const packages = useSelector((state) => state.packagesData.packages);
    const fuelTypes = [];
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getVehiclesList());
        dispatch(getVehicleTypes());
        dispatch(getRideTypesList());
        dispatch(getPackagesList());
	},[])

    const rideTypeOptions = rideTypes && rideTypes?.map(item =>(        
        <Select.Option value={item.rideType}>{item.rideType}</Select.Option>
    ))

    const vehicleTypeOptions = vehicleTypes && vehicleTypes?.map(item =>(        
        <Select.Option value={item.vehicleType}>{item.vehicleType}</Select.Option>
    ))

    const packageTypeOptions = packages && packages?.map(item =>(        
        <Select.Option value={item.package}>{item.package + ' Km/Hr'}</Select.Option>
    ))

    const fuelTypeOptions = fuelTypes && fuelTypes?.map(item =>(        
        <Select.Option value={item.fuelType}>{item.fuelType}</Select.Option>
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
		  title: 'Vehicle',
		  dataIndex: 'vehicle',
		  key: 'vehicle',
		  render: (text) => <>{text}</>,
		},
        {
		  title: 'Vehicle Type',
		  dataIndex: 'vehicleType',
		  key: 'vehicleType',
		  render: (text) => <>{text}</>,
		},
        {
            title: 'Brand-Model',
            key: 'brand-model',
          //   width : 250,
            render: (_, record) => 
              <>{(record.brand ? record.brand : '') + " " + (record.model ? record.model : '')}</>
          },
        {
		  title: 'Fuel Type',
		  dataIndex: 'fuelType',
		  key: 'fuelType',
		  render: (text) => <>{text}</>,
		},
        {
		  title: 'Sitting Capacity',
		  dataIndex: 'capacity',
		  key: 'capacity',
		  render: (text) => <>{text}</>,
		},
        
		// {
		//   title: 'Ride Type',
		//   dataIndex: 'rideType',
		//   key: 'rideType',
		//   render: (text) => <>{text}</>,
		// },
		// {
		//   title: 'Package',
		//   dataIndex: 'package',
		//   key: 'package',
		//   render: (text) => <>{text}</>,
		// },		
		{
		  title: 'Action',
		  key: 'action',
		//   width : 250,
		  render: (_, record) => ( console.log("reco => ",record),
			<Space size="middle">
			  <a><EditOutlined /></a>
			  <a><DeleteOutlined /></a>
			</Space>
		  ),
		},
	  ];
    
    const [form] 	= Form.useForm(); 	
    const isVehicleAdded = useSelector((state)=>state.vehiclesData.isVehicleAdded);
	console.log("isVehicleAdded =. ",isVehicleAdded)

	useEffect(()=>{
		if(isVehicleAdded){
			message.success("Vehicle added successfully...")
			dispatch(getVehiclesList());
		}
	},[isVehicleAdded])

    return(
        <>
            <Flex align='center' justify='center' style={{height:'100%'}} vertical>
                <Form 
					className="vehicle-form"
					form={form}
					layout='inline'
					variant='outlined'
					onFinish={(data) => { 
                        // console.log("vehicledata => ",data)
                        dispatch(addVehicle(data))
                        }}
				>
					<Title level={5} align='center'> Add Vehicle </Title>
					<Divider></Divider>
					<Row className="vehicle-form-row"
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}					
                    >
						<Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='vehicle' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input vehicle name!',
									},
								]}
							>
								<Input placeholder='Enter Vehicle Name' ></Input>
							</Item>
						</Col>
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='vehicleType' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please select vehicle type!',
									},
								]}
							>
								<Select 
                                    placeholder="Select Vehicle Type"
                                >  
                                    {vehicleTypeOptions}  
                                </Select>
							</Item>
						</Col>
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='brand' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input vehicle brand!',
									},
								]}
							>
								<Input placeholder='Enter Vehicle Brand' ></Input>
							</Item>
						</Col>                        
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='model' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input vehicle model!',
									},
								]}
							>
								<Input placeholder='Enter Vehicle Model' ></Input>
							</Item>
						</Col>
						{/* <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
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
						<Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='package' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please select package name!',
									},
								]}
							>
                                <Select 
                                    placeholder="Select Package Type"
                                >  
                                    {packageTypeOptions}  
                                </Select>
							</Item>
						</Col> */}
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='fuelType' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please select fuel!',
									},
								]}
							>
                                <Select 
                                    placeholder="Select Fuel Type"
                                >  
                                    <Select.Option value='Petrol'>Petrol</Select.Option>
                                    <Select.Option value='Disel'>Disel</Select.Option>
                                    <Select.Option value='CNG'>CNG</Select.Option>
                                    <Select.Option value='LPG'>LPG</Select.Option>
                                    <Select.Option value='Electric'>Electric</Select.Option>
                                </Select>
							</Item>
						</Col>
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='capacity' 
								rules={[
									{
										required: true,
										type:'integer',
										message: 'Please input sitting capacity!',
									},
								]}
							>
								<InputNumber placeholder='Enter Sitting Capacity' min={2} max={100}></InputNumber>
							</Item>
						</Col> 
                        <Col  xs={24} sm={24} md={8} lg={8} xl={6}>
							<Item name='vehicleImage' 
								// rules={[
								// 	{
								// 		required: true,
								// 		type:'string',
								// 		message: 'Please input sitting capacity!',
								// 	},
								// ]}
							>
								<Upload
                                    // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    listType="picture"
                                    // defaultFileList={[...fileList]}
                                >
                                    <Button className="vehicle-img-upload-btn" icon={<UploadOutlined />}>Upload Vehicle Image</Button>
                                </Upload>
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
				<Divider />
				<Table 
					bordered
					columns={columns} 
					dataSource={vehicles} 	
					style={{width:'100%'}}				
				/>
            </Flex>
        </>
    )
} 

export default Vehicle;