import React from 'react';
import {HashRouter,Route,Redirect,Switch,NavLink,Link,withRouter} from 'react-router-dom'
import { List, InputItem, WhiteSpace, Button,Checkbox, Flex ,ActionSheet, WingBlank, Toast} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import '../css/Login.scss';
import Login from './Login.js'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Reg extends React.Component {
    
    changePath =()=>{
        // console.log(e)
       this.props.history.push('/login')
    
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
                            <img src='images/Log.png' alt="标签" />
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
                            <div className='LoginReg' onClick={this.changePath}>快速登录</div>
                        </List.Item>
                    </List>
                    <div className='threeLogin'>
                        <p>第三方登录</p>
                        <div className='threeimg'>
                            <img src='images/weixin.svg'/>
                            <img src='images/qq.svg'/>
                            <img src='images/weibo.svg'/>
                            
                        </div>
                    </div>  
                </div>
                <Switch>
                
                  <Route path={'/login'} component={Login} key={'login'}/>)
                
                  </Switch>
            </div>
        )
    }
}

export default Reg;