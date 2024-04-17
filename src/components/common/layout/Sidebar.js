import React from "react";
import { Carousel, Layout, Menu } from "antd";
import { AntDesignOutlined, CarOutlined, CarTwoTone, DashboardOutlined, DollarOutlined, HomeOutlined, JavaScriptOutlined, OrderedListOutlined, RightCircleOutlined, RightSquareOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = ()=>{
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys]   = useState(['component']);

    const navigate = useNavigate();

    const rootSubmenuKeys = ['/general', '/layout', '/navigation', '/dataentry', '/datadisplay', '/feedback', '/advance'];

    return(        
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical">{collapsed ? <CarOutlined/> : <> FleetSuvidha</>}</div>
			{/* <div className="logo-text" >{collapsed ? <CarOutlined/> : <><CarOutlined /> FleetSuvidha</>}</div> */}
            <Menu 
                mode="inline" 
                theme="dark"
                defaultSelectedKeys={['component']}
                openKeys={openKeys}  
                className='menu-bar'
                onClick={({key})=>{
                    console.log("key => ",key);
                    if(key !== 'Logo')
                        navigate(key);

                }}
                onOpenChange={(keys)=>{
                    console.log("keys => ",keys)
                    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
                    console.log("latestOpenKey => ",latestOpenKey)
                    console.log("condition => ",(latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1))
                    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                        setOpenKeys(keys);
                    } else {
                        setOpenKeys(latestOpenKey ? ['component', latestOpenKey] : []);
                    }
                }}
                items={[
                    {
                        key : '/',
                        icon: <HomeOutlined />,
                        label: 'Dashboard',             
                    },
                    {
                        key : '/rides',
                        icon: <CarOutlined />,
                        label: 'Rides',
                        children: [                                
                            {
                                key : '/rideBooking',
                                icon: <RightCircleOutlined />,
                                label: 'Book Ride'
                            },
                            {
                                key : '/ridesList',
                                icon: <RightCircleOutlined />,
                                label: 'Rides List',
                            }
                        ]
                                         
                    },
                    {
                        key : '/billing',
                        icon: <DollarOutlined />,
                        label: 'Billing',             
                    },
                    {
                        key : '/drivers',
                        icon: <UserOutlined />,
                        label: 'Drivers',                         
                        children: [                                
                            {
                                key : '/addDriver',
                                icon: <RightCircleOutlined />,
                                label: 'Add Driver'
                            },
                            {
                                key : '/driversList',
                                icon: <RightCircleOutlined />,
                                label: 'Drivers List',
                            }
                        ]          
                    },
                    {
                        key : 'masterData',
                        icon: <DashboardOutlined />,
                        label: 'Master Data',
                        children: [                                
                            {
                                key : '/rideTypes',
                                icon: <RightCircleOutlined />,
                                label: 'Ride Types'
                            },
                            {
                                key : '/package',
                                icon: <RightCircleOutlined />,
                                label: 'Packages'
                            },
                            {
                                key : '/vehicleTypes',
                                icon: <RightCircleOutlined />,
                                label: 'Vehicle Types',
                            },
                            {
                                key : '/vehicles',
                                icon: <RightCircleOutlined />,
                                label: 'Vehicles',
                            },
                            // {
                            //     key : '/vehicleMapping',
                            //     icon: <RightCircleOutlined />,
                            //     label: 'Vehicle Mapping',
                            // }
                            
                            // {
                            //     key : '/layout',
                            //     icon: <RightSquareOutlined />,
                            //     label: 'Layout',
                            //     children: [
                            //         {
                            //             key : '/layout/divider',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Divider'
                            //         },
                            //         {
                            //             key : '/layout/flex',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Flex',
                            //         },
                            //         {
                            //             key : '/layout/grid',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Grid',
                            //         },
                            //         {
                            //             key : '/layout/layout',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Layout',
                            //         },
                            //         {
                            //             key : '/layout/space',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Space',
                            //         }
                            //     ]
                            // },
                            // {
                            //     key : '/navigation',
                            //     icon: <RightSquareOutlined />,
                            //     label: 'Navigation',
                            //     children: [
                            //         {
                            //             key : '/navigation/anchor',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Anchor'
                            //         },
                            //         {
                            //             key : '/navigation/breadcrumb',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Breadcrumb',
                            //         },
                            //         {
                            //             key : '/navigation/dropdown',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Dropdown',
                            //         },
                            //         {
                            //             key : '/navigation/menu',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Menu',
                            //         }
                            //     ]
                            // },
                            // {
                            //     key : '/dataentry',
                            //     icon: <RightSquareOutlined />,
                            //     label: 'Data Entry',
                            //     children: [
                            //         {
                            //             key : '/dataentry/input',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Input'
                            //         },
                            //         {
                            //             key : '/dataentry/checkbox',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Checkbox'
                            //         },
                            //         {
                            //             key : '/dataentry/radio',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Radio'
                            //         },
                            //         {
                            //             key : '/dataentry/select',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Select'
                            //         },
                            //         {
                            //             key : '/dataentry/datepicker',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Datepicker'
                            //         },
                            //         {
                            //             key : '/dataentry/form',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Form'
                            //         },
                            //     ]
                            // },
                            // {
                            //     key : '/datadisplay',
                            //     icon: <RightSquareOutlined />,
                            //     label: 'Data Display',
                            //     children: [
                            //         {
                            //             key : '/datadisplay/card',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Card'
                            //         },
                            //         {
                            //             key : '/datadisplay/list',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'List',
                            //         },
                            //         {
                            //             key : '/datadisplay/table',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Table',
                            //         },
                            //         {
                            //             key : '/datadisplay/tooltip',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Tooltip',
                            //         },
                            //         {
                            //             key : '/datadisplay/popover',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Popover',
                            //         },
                            //         {
                            //             key : '/datadisplay/modal',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'modal',
                            //         },
                            //         {
                            //             key : '/datadisplay/drawer',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Drawer',
                            //         },
                            //         {
                            //             key : '/datadisplay/collapse',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Collapse',
                            //         },
                            //         {
                            //             key : '/datadisplay/avatar',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Avatar',
                            //         }
                            //     ]
                            // },
                            // {
                            //     key : '/feedback',
                            //     icon: <RightSquareOutlined />,
                            //     label: 'Feedback',
                            //     children: [
                            //         {
                            //             key : '/feedback/message',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Message'
                            //         },
                            //         {
                            //             key : '/feedback/notification',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Notification',
                            //         },
                            //         {
                            //             key : '/feedback/spin',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Spin',
                            //         },
                            //         {
                            //             key : '/feedback/progress',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Progress',
                            //         },
                            //         {
                            //             key : '/feedback/skeleton',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Skeleton',
                            //         },
                            //     ]
                            // },
                            // {
                            //     key : '/advance',
                            //     icon: <RightSquareOutlined />,
                            //     label: 'Advance',
                            //     children: [
                            //         {
                            //             key : '/advance/tree',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Tree'
                            //         },
                            //         {
                            //             key : '/advance/carousel',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Carousel',
                            //         },
                            //         {
                            //             key : '/advance/steps',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Steps',
                            //         },
                            //         {
                            //             key : '/advance/tabs',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Tabs',
                            //         },
                            //         {
                            //             key : '/advance/timeline',
                            //             icon: <RightCircleOutlined />,
                            //             label: 'Timeline',
                            //         }
                            //     ]
                            // }
                        ]
                    },

                    // {
                    //     key : '/jest',
                    //     icon: <JavaScriptOutlined />,
                    //     label: 'Jest',
                    //     children: [
                    //         {
                    //             key : 'jest-concepts',
                    //             icon: <RightSquareOutlined />,
                    //             label: 'Jest Cocepts',
                    //             children:[                                                    
                    //                 {
                    //                     key : '/jest/dummy',
                    //                     icon: <RightCircleOutlined />,
                    //                     label: 'Dymmy Example',
                    //                     title: 'Dymmy Example',
                    //                 },
                    //                 {
                    //                     key : '/jest/dom-element',
                    //                     icon: <RightCircleOutlined />,
                    //                     label: 'DomElement Testing',
                    //                     title: 'DomElement Testing',
                    //                 },
                    //                 {
                    //                     key : '/jest/snapshot',
                    //                     icon: <RightCircleOutlined />,
                    //                     label: 'Snapshot Testing',
                    //                     title: 'Snapshot Testing',
                    //                 },
                    //                 {
                    //                     key : '/jest/async-test',
                    //                     icon: <RightCircleOutlined />,
                    //                     label: 'Async Testing',
                    //                     title: 'Async Testing',
                    //                 },
                    //                 {
                    //                     key : '/jest/event-test',
                    //                     icon: <RightCircleOutlined />,
                    //                     label: 'Event Testing',
                    //                     title: 'Event Testing',
                    //                 }
                    //             ]
                    //         }
                    //     ]
                    // },
                    
                ]}
            >
            </Menu>
        </Sider>
    )
}

export default Sidebar;