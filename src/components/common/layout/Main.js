import { Breadcrumb, Layout, theme } from "antd";
import React from "react";
import { Route, Routes, useLocation } from "react-router";
import DashBoard from "./Dashboard";
import Sidebar from "./Sidebar";
import Headerbar from "./Headerbar";
import RideType from "../../generic/RideType/RideType";
import VehicleType from "../../generic/VehicleType/VehicleType";
import Package from "../../generic/Package/Package";
import Vehicle from "../../generic/Vehicle/Vehicle";
import Driver from "../../generic/Driver/Driver";
import DriverList from "../../generic/Driver/DriverList";

const { Header, Content, Footer } = Layout;
// const { segments } = Breadcrumb;

const Main = () =>{
	const { token : { colorBgContainer } } = theme.useToken(); 
	const location = useLocation();
	const { pathname } = location;
	const segments = pathname.split('/');
	console.log("segments => ",segments);
	let link = '';
	const breadCrumbLink = segments?.map((segment, i)=>{

		if(segment === ''){
			link += 'Dashboard';
		}else{
			link += `/${segment.replace(/^./, segment[0].toUpperCase())}`;
		}
		return link;
	})
	console.log("link => ",link)

	return(
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Sidebar/>
			<Layout>
				<Header
					style={{
						padding: '15px',
						background: colorBgContainer,
					}} 
				>
					<Headerbar />
				</Header>
			
				<Content
					style={{
					margin: '0 16px',
					}}
				>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}
					>
						{segments?.map((segment, i )=>(
							<Breadcrumb.Item>{(segment === '' ) ? 'Dashboard' : segment.replace(/^./, segment[0].toUpperCase())}</Breadcrumb.Item>
						))}
						{/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: '90%',
							background: colorBgContainer,
							borderRadius: 10,
						}}
					>
						<Routes>
							{/* Dashboard Routes */}
							<Route exact path='/' Component={DashBoard}></Route>							
							<Route exact path='/rideTypes' Component={RideType}></Route>							
							<Route exact path='/package' Component={Package}></Route>								
							<Route exact path='/vehicleTypes' Component={VehicleType}></Route>								
							<Route exact path='/vehicles' Component={Vehicle}></Route>										
							<Route exact path='/addDriver' Component={Driver}></Route>											
							<Route exact path='/driversList' Component={DriverList}></Route>							
												
						</Routes>
				
				</div>
			</Content>
			<Footer
				style={{
				textAlign: 'center',
				padding:'15px'
				}}
			>
				Ant Design & React Pro ©{new Date().getFullYear()} Created by Jyoti
			</Footer>
			</Layout>
		</Layout>
    )
}

export default Main;