import React, {useState} from "react";
import {Menu} from 'antd';
import {HomeOutlined, CalendarOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

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
    } else if (userType.userType === "Manager") {
        menuItems.push({
            label: "Allocate Jobs",
            key: "edit",
            icon: <CalendarOutlined />,
        })
    }
    
    const [currentItem, setCurrentItem] = useState('home');

    const menuClick = (e) => {
        console.log('click ', e);
        setCurrentItem(e.key);
    }

    return (
        <Menu onClick={menuClick} selectedKeys={[currentItem]} mode="horizontal" items={menuItems} />
    );
    
}

export default NavMenu