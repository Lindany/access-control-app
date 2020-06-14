import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Main.css';
import { Layout, Menu, Breadcrumb} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined, 
  UserOutlined,
  VideoCameraAddOutlined,
  YoutubeOutlined,
  BellOutlined ,
  AlertOutlined,    
  CalendarOutlined,
  CarOutlined,
  SoundOutlined,
  UsergroupAddOutlined,
  SisternodeOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import SocialMedia from '../footer/Footer';
import HeaderComponent from '../header/Header';
import VideoPlayer from '../video/Video';
import SigninComponent from '../signin/Login';
import AddUser from '../user/AddUser';
import ViewUsers from '../user/Table';
import Link from '@material-ui/core/Link';
import AboutUs from '../about/About';
import Report from '../stats/Report';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    page:2,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  getComponentDisplay = (page) =>{
    switch (page) {
      case 0:
        return <AddUser/>
      case 1:
        return <ViewUsers/>
      case 2:
        return <VideoPlayer/>
      case 3:
        return <Report/>
      case 4:
        return <AboutUs/>
      default:
        return <VideoPlayer/>
     
    } 
  }
  
   
  render() {
    return (
      <div className='login-container'>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="1">  <Link href="/" variant="body2"> Login</Link></Menu.Item>
              <Menu.Item key="2"> <Link href="/register" variant="body2"> Register</Link></Menu.Item>            
          </SubMenu>  
          <Menu.Item key="3" icon={<PieChartOutlined />} onClick={()=>this.setState({ page:4 })}>
            About Us
          </Menu.Item>
          <Menu.Item key="4" icon={<YoutubeOutlined  />} onClick={()=>this.setState({ page:2 })}>
            Camera Stream
          </Menu.Item>
          <Menu.Item key="5" icon={<AlertOutlined />}  onClick={()=>this.setState({ page:0 })}>
            Add User
          </Menu.Item>
          <Menu.Item key="6" icon={<CarOutlined />}  onClick={()=>this.setState({ page:1 })}>
            View User
          </Menu.Item>
          <Menu.Item key="7" icon={<CarOutlined />}  onClick={()=>this.setState({ page:3 })}>
            Report
          </Menu.Item>
          <SubMenu key="sub2" icon={<CalendarOutlined />} title="Timetable">
            <Menu.Item key="6">Bus</Menu.Item>
            <Menu.Item key="7">Metrorail & Gautrain</Menu.Item>
          </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display: 'inline-grid' }} >
            <HeaderComponent/>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
             {this.getComponentDisplay(this.state.page)}
          </Content>
          <Footer style={{ textAlign: 'center' }}><SocialMedia/></Footer>
        </Layout>
      </Layout>
      </div>
    );
  }
}
    
