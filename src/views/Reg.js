import React from 'react';
import {HashRouter,Route,Redirect,Switch,NavLink,Link,withRouter} from 'react-router-dom'
import { List, InputItem, WhiteSpace, Button,Checkbox, Flex } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import '../css/Login.scss';
import Login from './Login.js'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Reg extends React.Component {
    changePath =()=>{
        // console.log(e)
       this. props.history.push('/login')
    
      }
    // componentDidMount() {
    //     // this.autoFocusInst.focus();
    // }
    // handleClick = () => {
    //     this.inputRef.focus();
    // }
    render() {
        // const { getFieldProps } = this.props.form;
        return (
            <div>
                <div className='LoginBox' style={{ margin: 20 }}>
                    <List >
                        <div className='Logo'>
                            <img src={'https://static.xinli001.com/yimob/static/img/be405c293b90a426ec2eec1d052780a5.png'} alt="标签" />
                        </div>
                        账号
                        <InputItem
                            // {...getFieldProps('autofocus')}
                            clear
                            placeholder="请输入手机号或邮箱"
                            ref={el => this.autoFocusInst = el}
                        ></InputItem>
                        密码
                        <InputItem
                            // {...getFieldProps('focus')}
                            clear
                            placeholder="请输入密码"
                            ref={el => this.inputRef = el}
                        ></InputItem>
                        <List.Item>
                            <Flex>
                                <Flex.Item>
                                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                    <div className='ok'> 同意 <a onClick={(e) => { e.preventDefault(); alert('壹心理用户注册协议'); }}>《壹心理用户注册协议》</a></div>
                                    </AgreeItem>
                                </Flex.Item>
                            </Flex>
                            <Button type="primary" style={{ marginTop: '20px', borderRadius: '25px' }}>注册</Button>
                            <div onClick={this.changePath}>快速登录</div>
                        </List.Item>
                    </List>
                </div>
                <Switch>
                
                  <Route path={'/login'} component={Login} key={'login'}/>)
                
                  </Switch>
            </div>
        )
    }
}

export default Reg;