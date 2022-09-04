import React, {useState} from "react";
import NavMenu from "../../Nav/NavMenu";
import Dashboard from "../Dashboard/Dashboard";

const {Sider, Content} = Layout;

const Home = ({userType}) => {
    const [currentItem, setCurrentItem] = useState('home');

    return(
        <Layout>
            <Sider>
                <NavMenu userType={userType} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
            </Sider>
            <Layout>
                <Content className="dashboard">
                    <Dashboard />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Home;

