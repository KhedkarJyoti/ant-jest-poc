import { Button, Col, Divider, Flex, Form, Input, Row, Space, Table, Typography, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { addVehicleType, getVehicleTypes } from "../../../redux/actions/VehicleTypeAction";
import './VehicleType.css'

const { Title } = Typography;
const { Item } 	= Form;

const VehicleType = ()=>{

	const vehicleTypes = useSelector((state) => state.vehicleTypesData.vehicleTypes);	
    const isVehicleTypeAdded = useSelector((state)=>state.vehicleTypesData.isVehicleTypeAdded);
	const [data, setData] = useState([]); 
	const dispatch = useDispatch();

	useEffect(()=>{
		setData(vehicleTypes);
	},[vehicleTypes])

	useEffect(()=>{
		if(isVehicleTypeAdded){
			dispatch(getVehicleTypes());
			message.success("Vehicle type added successfully...")
		}
	},[isVehicleTypeAdded])

	const columns = [
		{
			title: 'Sr.No',
			dataIndex: '',
			key: 'sr.no',
			width: 100,
			render: (_, record, i) => ( <>{i+1}</>),
		},
		{
		  title: 'Vehicle Type',
		  dataIndex: 'vehicleType',
		  key: 'vehicleType',
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

	useEffect(()=>{		
		dispatch(getVehicleTypes());
	},[])

    
    return(
        <>
            {/* <Flex align="center" justify="center" style={{height:450, background:'aliceblue'}}>
                 <Button>RidePackage Content...</Button>
            </Flex> */}
            <Flex align='center' justify='center' style={{height:'100%'}} vertical>
                <Form 
					className="vehicle-type-form"
					form={form}
					layout='inline'
					variant='outlined'
					onFinish={(data) => dispatch(addVehicleType(data))}
				>
					<Title level={5} align='center'> Add Vehicle Type </Title>
					<Divider></Divider>
					<Row className="form-row"
						gutter={{
							xs: 8,
							sm: 16,
							md: 24,
							lg: 32,
						}}					>
						<Col  xs={24} sm={24} md={16} lg={18} xl={18}>
							<Item name='vehicleType' 
								rules={[
									{
										required: true,
										type:'string',
										message: 'Please input vehicle type!',
									},
								]}
							>
								<Input placeholder='Enter Vehicle Type' ></Input>
							</Item>
						</Col>
						<Col xs={24} sm={24} md={8} lg={6} xl={6}>
							<Item>
								<Button type="primary" htmlType="submit" className="vehicle-type-form-button">
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
					dataSource={data}	
					style={{width:'100%'}}	 					
				/>
            </Flex>
        </>
    )
} 

export default VehicleType;