import { Card, Typography, Switch, Affix, Tag } from 'antd';
import { useState } from 'react';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


const { Text } = Typography;

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
  tab3: <p>content2</p>,
  tab4: <p>content2</p>,
  tab5: <p>content2</p>,
};

const Content = ({onChange, isSwitch}) => {
  const [key, setKey] = useState('tab1');
  const [tab, setTab] = useState(
    <Text style={{color: isSwitch ? 'black' : 'white'}}>New York</Text>
  )

  const tabList = [
    {
      key: 'tab1',
      tab: <Text style={{color: isSwitch ? 'black' : 'white'}}>New York</Text>
    },
    {
      key: 'tab2',
      tab: <Text style={{color: isSwitch ? 'black' : 'white'}}>Madrid</Text>,
    },
    {
      key: 'tab3',
      tab: <Text style={{color: isSwitch ? 'black' : 'white'}}>Paris</Text>,
    },
    {
      key: 'tab4',
      tab: <Text style={{color: isSwitch ? 'black' : 'white'}}>Tokio</Text>,
    },
    {
      key: 'tab5',
      tab: <Text style={{color: isSwitch ? 'black' : 'white'}}>Buenos Aires</Text>,
    },
  ];

  const onTabChange = (key) => {
    const tabValue = tabList.filter((x) => x.key === key)
    setKey(key);
    setTab(tabValue[0].tab)
  };

  return (
    <Card
      style={isSwitch ? {background: '#fff', color: 'black'} : {background: 'black', color: 'white'}}
      bordered={false}
      title={<Tag color="#108ee9" style={{fontSize: '20px'}}>
        {tab}
      </Tag>}
      extra={
        <Affix offsetTop={10}>
          <Switch
            onChange={onChange}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
        </Affix>
      }
      tabList={tabList}
      activeTabKey={key}
      onTabChange={key => {
        onTabChange(key);
      }}
    >
      {contentList[key]}
    </Card>
  )
}

export default Content;