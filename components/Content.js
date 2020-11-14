import { Card, Typography, Switch, Affix, Tag } from 'antd';
import { useState } from 'react';
import NyContent from './citys/Ny';
import MadridContent from './citys/Madrid';
import TokioContent from './citys/Tokio';
import ParisContent from './citys/Paris';
import BaContent from './citys/BuenosAires';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloudMoon } from '@fortawesome/free-solid-svg-icons'

const elementDay = <FontAwesomeIcon icon={faSun} />
const elementNight = <FontAwesomeIcon icon={faCloudMoon} />

const { Text } = Typography;

const Content = ({ onChange, isSwitch }) => {
  const [key, setKey] = useState('tab1');
  const [tab, setTab] = useState(
    <Text style={{ color: isSwitch ? 'black' : 'white' }}>New York</Text>
  )

  const contentList = {
    tab1: <NyContent isSwitch={isSwitch}/>,
    tab2: <MadridContent isSwitch={isSwitch}/>,
    tab3: <ParisContent isSwitch={isSwitch} />,
    tab4: <TokioContent isSwitch={isSwitch}/>,
    tab5: <BaContent isSwitch={isSwitch}/>,
  };

  const tabList = [
    {
      key: 'tab1',
      tab: <Text style={{ color: isSwitch ? 'black' : 'white' }}>New York</Text>
    },
    {
      key: 'tab2',
      tab: <Text style={{ color: isSwitch ? 'black' : 'white' }}>Madrid</Text>,
    },
    {
      key: 'tab3',
      tab: <Text style={{ color: isSwitch ? 'black' : 'white' }}>Paris</Text>,
    },
    {
      key: 'tab4',
      tab: <Text style={{ color: isSwitch ? 'black' : 'white' }}>Tokio</Text>,
    },
    {
      key: 'tab5',
      tab: <Text style={{ color: isSwitch ? 'black' : 'white' }}>Buenos Aires</Text>,
    },
  ];

  const onTabChange = (key) => {
    const tabValue = tabList.filter((x) => x.key === key)
    setKey(key);
    setTab(tabValue[0].tab)
  };

  return (
    <Card
      style={isSwitch ? { background: '#fff', color: 'black' } : { background: 'black', color: 'white' }}
      bordered={false}
      title={
        <Affix offsetTop={10}>
          <Tag color="#108ee9" style={{ fontSize: '20px' }}>
            {tab}
          </Tag>
        </Affix>}
      extra={
        <Affix offsetTop={10}>
          <Switch
            onChange={onChange}
            checkedChildren={elementDay}
            unCheckedChildren={elementNight}
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