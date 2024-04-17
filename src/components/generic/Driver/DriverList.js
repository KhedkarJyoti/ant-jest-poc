import { Button, Col, DatePicker, Divider, Flex, Form, Input, InputNumber, Row, Select, Space, Table, Typography, Upload, message } from "antd";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import './Driver.css'
import { getDriversList } from "../../../redux/actions/DriverAction";

const { Title } = Typography;
const { Item } 	= Form;


const DriverList = ()=>{
    const drivers = useSelector((state) => state.driversData.drivers);
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getDriversList());
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
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name',
		  render: (text) => <>{text}</>,
		},
        {
		  title: 'Date-of-Birth',
		  dataIndex: 'dob',
		  key: 'dob',
		  render: (text) => <>{text}</>,
		},
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: (text) => <>{text}</>,
        },
        {
		  title: 'Contact',
		  dataIndex: 'mobile',
		  key: 'mobile',
		  render: (text) => <>{text}</>,
		},
        {
		  title: 'Address',
		  dataIndex: 'address',
		  key: 'address',
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


    return(
        <>
            <Flex align='center' justify='center' style={{height:'100%'}} vertical>
                <Title level={5} align='center'> Drivers List </Title>
				<Divider></Divider>
				<Table 
					bordered
					columns={columns} 
					dataSource={drivers} 	
					style={{width:'100%'}}				
				/>
            </Flex>
        </>
    )
} 

export default DriverList;