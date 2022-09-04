import React from "react";
import {Menu,} from 'antd';
import {HomeOutlined, CalendarOutlined, UserAddOutlined, LogoutOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const NavMenu = ({userType,currentItem,setCurrentItem}) => {
    const menuItems = [
        {
            label: "Home",
            key: "home",
            icon: <HomeOutlined/>,
        }
    ];
    // TODO: Implement logic for userType and menuItems
    if (userType === "staff") {
        menuItems.push({
            label: "Edit Availbility",
            key: "edit",
            icon: <CalendarOutlined />,
        })
    } else if (userType === "manager") {
        menuItems.push({
            label: "Allocate Jobs",
            key: "edit",
            icon: <CalendarOutlined />,
        })
    } else if (userType === "admin") {
        menuItems.push({
            label: "Add/Remove user",
            key: "add",
            icon: <UserAddOutlined />,
        })
    }
    menuItems.push({
        label: "Logout",
        key: "logout",
        icon: <LogoutOutlined />,
    })
    const menuClick = (e) => {
        console.log('click ', e);
        setCurrentItem(e.key);
    }

    return (
            <Menu className= "navBar" onClick={menuClick} selectedKeys={[currentItem]} mode="inline" items={menuItems} />
    );
    
}

export default NavMenu