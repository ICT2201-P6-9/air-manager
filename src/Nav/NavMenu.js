import React, {useState} from "react";
import {Layout, Menu,} from 'antd';
import {HomeOutlined, CalendarOutlined, UserAddOutlined, LogoutOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const {Sider} = Layout;

const NavMenu = (userType) => {
    const menuItems = [
        {
            label: "Home",
            key: "home",
            icon: <HomeOutlined/>,
        }
    ];
    // TODO: Implement logic for userType and menuItems
    if (userType.userType === "staff") {
        menuItems.push({
            label: "Edit Availbility",
            key: "edit",
            icon: <CalendarOutlined />,
        })
    } else if (userType.userType === "manager") {
        menuItems.push({
            label: "Allocate Jobs",
            key: "edit",
            icon: <CalendarOutlined />,
        })
    } else if (userType.userType === "admin") {
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
    
    const [currentItem, setCurrentItem] = useState('home');

    const menuClick = (e) => {
        console.log('click ', e);
        setCurrentItem(e.key);
    }

    return (
        <Sider>
            <Menu className= "navBar" onClick={menuClick} selectedKeys={[currentItem]} mode="inline" items={menuItems} />
        </Sider>
    );
    
}

export default NavMenu