import React, { Component } from 'react'
import {HashRouter,Route,Redirect,Switch,NavLink,Link,withRouter} from 'react-router-dom'

import FirstPage from './views/FirstPage.js'
import Mine from './views/Mine.js'
import Study from './views/Study.js'
import ListenBook from './views/ListenBook.js'
import './css/APP.css'

import 'antd/dist/antd.css';
import { Menu,Row,Col} from 'antd';
import {HomeOutlined,UserOutlined,FileSearchOutlined,StrikethroughOutlined} from '@ant-design/icons'

@withRouter
class App extends Component{
  state={
     view: [
      {
      text:'首页',
      path:'/firstpage',
      name:'firstpage',
      component:FirstPage,
      icon:HomeOutlined
    },{
      text:'听书',
      path:'/listenbook',
      name:'listenbook',
      component:ListenBook,
      icon:FileSearchOutlined
    },{
      text:'学习',
      path:'/study',
      name:'study',
      component:Study,
      icon:UserOutlined

    },{
      text:'我的',
      path:'/mine',
      name:'mine',
      component:Mine,
      icon:StrikethroughOutlined
    }
  ],
  current:'/firstpage'
}
    changePath =({key})=>{
      // console.log(e)
     this. props.history.push(key)
     this.setState({
      current:key
     })
  
    }
    UNSAFE_componentWillMount(){
      let {pathname} = this.props.location;
      this.setState({
        current:pathname
      })
    }
  render(){
    const{view,current} = this.state
    return ( 
      <div>
       

        <Menu mode="horizontal" className='daohanglan' inlineIndent= {24}onClick= {this.changePath} selectedKeys = {[current]}>
    {view.map(item=><Menu.Item key={item.path}><StrikethroughOutlined/>{item.text}</Menu.Item>)}
    </ Menu>
       
                <Switch>
                
                {
                  view.map(item=><Route path={item.path} component={item.component} key={item.name}/>)
                }
                <Route path= '/notfound' render={()=><h1>404</h1>}/>
                <Redirect from = '/' to = '/firstpage' exact/>
                <Redirect  to="/notfound"/>
                  </Switch>
              </div>
)
  }
}
export default App