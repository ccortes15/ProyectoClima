import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
} from '@ant-design/icons';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Layout, Menu, Divider } from 'antd';
import { useState } from 'react';
import HeaderContent from './Header';
import CardsContent from './Content';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutAdmin = () => {
    const [switchValue, setSwitch] = useState(true);
    
    const changeTheme = value => {
        setSwitch(value);
      };

    return (
        <Layout style={{ minHeight: '100vh', background: switchValue ? '#fff' : 'black'}}>
                <Content style={{ margin: '0 16px' }}>
                    <Divider />
                    <CardsContent onChange={changeTheme} isSwitch={switchValue}/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default LayoutAdmin;