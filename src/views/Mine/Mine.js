import React from 'react';
import '../../css/Mine.scss'
import 'antd-mobile/dist/antd-mobile.css';
import { Button, WhiteSpace, List, Brief } from 'antd-mobile';
import { Route, Redirect, Switch, NavLink, withRouter, Router, Link } from 'react-router-dom';
import Time from './Time.js';

// import { Calendar } from 'antd'
const Item = List.Item;
class Mine extends React.Component {
        
        state = {
                // menu: [
                //         {
                //                 path: '/time',
                //                 name: 'time',
                //                 component: Time
                //         }
                // ]
                none:''
        }
        // 时间打卡功能
        componentDidMount(){
                this.setState.none='none'
        }
        goto =()=>{
                this.setState.none='none'
                       this.props.history.push('/mine/time')
                        
                        
                      }
        render() {
                const {none} = this.state;
                console.log(none);
                return (
                        
                        <div className='Mine'>
                                <div className='MineOne' >
                                <div className="Mine_head">
                                        <div className="Mine_head_one">
                                                <div className="Mine_head_one_div"><div className='Mine_head_one_img'><img></img></div> <span className='Mine_head_one_span'>wkzcg</span></div>
                                                <div><button>生成数据报告</button></div>
                                        </div>
                                        <div className="Mine_head_two">
                                                <ul>
                                                        <li className='Mine_head_two_number'>0</li>
                                                        <li className="Mine_head_two_li">累计学习(分钟)</li>
                                                </ul>
                                                <ul>
                                                        <li className='Mine_head_two_number'>0</li>
                                                        <li className="Mine_head_two_li">本周学习(分钟)</li>
                                                </ul>
                                                <ul onClick={this.goto}>
                                                        <li className='Mine_head_two_number'>0</li>
                                                        <li className="Mine_head_two_li">打卡日历</li>
                                                </ul>
                                        </div>
                                </div>
                                <div className='Mine_content_vip'>
                                        <div className='Mine_content_vip_one'>

                                        </div>
                                        <div className='Mine_content_vip_two'>
                                                <ul>
                                                        <li></li>
                                                        <li>我的订单</li>
                                                </ul>
                                                <ul>
                                                        <li></li>
                                                        <li>我的消息</li>
                                                </ul>
                                        </div>
                                </div>
                               
                                <List>
                                        <Item>读书会vip赠送</Item>
                                        <Item>课程赠送</Item>
                                        <Item>我的拼团</Item>
                                        <Item>意见反馈</Item>
                                        <Item>兑换中心</Item>
                                </List>
                                <Button className='Mine_out'>退出</Button><WhiteSpace />
                                </div>
                                <Switch>
                                                <Route path={'/mine/time'} component={Time} key={'time'}/>)
                                </Switch>

                        </div>
                )
        }
}
export default Mine;