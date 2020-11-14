import { Layout, Menu, Divider, Typography } from 'antd';
import { useState } from 'react';
import CardsContent from './Content';
const { Content, Footer } = Layout;

const {Text} = Typography;

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
                <Footer style={{ textAlign: 'center', backgroundColor: switchValue ? '#EBF5FF' : '#092D99'}}>
                    <Text style={{ color: switchValue ? '#092D99' : '#fff'}}>©2020 Created by Adrian Cortés</Text>
                </Footer>
        </Layout>
    );
}

export default LayoutAdmin;