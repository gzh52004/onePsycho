import React from 'react';
import {HashRouter,Route,Redirect,Switch,NavLink,Link,withRouter} from 'react-router-dom'
import { List, InputItem, WhiteSpace, Button,Checkbox, Flex } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


import '../css/Login.scss';
import Reg from './Reg.js'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
class Login extends React.Component {
   
        changePath =()=>{
            // console.log(e)
           this. props.history.push('/reg')
        
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
                            <Button type="primary" style={{ marginTop: '20px', borderRadius: '25px' }}>登录</Button>
                            <div onClick={this.changePath}>快速注册</div>
                        </List.Item>
                    </List>
                </div>
                <Switch>
                
                  <Route path={'/reg'} component={Reg} key={'reg'}/>)
                
                  </Switch>
            </div>
        )
    }
}

export default Login;