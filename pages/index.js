import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Content from '../components/Layout';
import Parallax from '../components/Parallax';

import 'antd/dist/antd.css';
import { Divider } from 'antd';


export default function Home() {
  return (
    <div>
      <Parallax />
      <Content />
    </div>
  )
}
