import React from "react";
import { Flex, Avatar, Transfer } from "antd";
import { MessageOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
// import Search from "antd/es/transfer/search";
// import Avatar from "antd/es/avatar/avatar";
// const { Avatar } = Avatar;
const { Search } = Transfer;

const Headerbar = ()=>{
    return(
        
            <Flex gap="middle" align="start" justify="space-evenly">
                <Flex align="center" style={{width:'100%'}}>
                    <Search placeholder="Search Here..." />
                </Flex> 
                <Flex align="flex-end" justify="flex-end" gap="middle" style={{width:'100%'}}>
                    {/* <MessageOutlined className="header-icon" />
                    <NotificationOutlined className="header-icon" /> */}
                    <Avatar icon={<UserOutlined />} />
                </Flex>
            </Flex>
           
        
    )
}

export default Headerbar;