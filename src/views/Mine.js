import React from 'react';
import { Redirect, Route, Router, Switch, Link, NavLink, withRouter } from 'react-router-dom';

import Reg from './Reg.js'
import Login from './Login.js'

function Mine(props){
      const  menu =[
                 {
                 text:'登陆',
                 path:'/mine/login',
                 name:'login',
                 component:Login,
               },{
                 text:'注册',
                 path:'/mine/reg',
                 name:'reg',
                 component:Reg,
               }
             ]
        
        // let current = props.location.pathname;
        return (
                 <div>Mine页面
                         
                         {
                             menu.map(item => <div key={item.name} onClick={() => { props.history.push(item.path) }} >{item.text}</div>)
                         }
                     

                <Switch>
               { menu.map(item => <Route key={item.name} path={item.path} component={item.component} />)}
                </Switch>
                </div>
  )
  
}
export default Mine