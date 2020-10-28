import React from 'react';
import '../../css/Mine.scss'
import 'antd-mobile/dist/antd-mobile.css';
import { Button, WhiteSpace, List, Brief } from 'antd-mobile';
import { Route, Redirect, Switch, NavLink, withRouter, Router, Link ,} from 'react-router-dom';
import { RightOutlined, MessageOutlined, FileTextOutlined, PoweroffOutlined, CrownOutlined, GiftOutlined, MoneyCollectOutlined, DownloadOutlined, MailOutlined, NumberOutlined } from '@ant-design/icons';
import Time from './Time.js';
import Idea from './Idea.js';

// import { Calendar } from 'antd'
const Item = List.Item;
class Mine extends React.Component {
        // state={
        //         router:[
        //                {
        //                 path:'/time',
        //                 name:'Time',
        //                 components:{
        //                         default:Home,
        //                         'his':History
        //                 }       
        //                }
        //         ]
        // }
        // 时间打卡功能
        goto = () => {
                this.props.history.push('/time')
        }
        toIdea = () =>{
                this.props.history.push('/idea')
        }
        
        render() {
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
                                                                <li className="Mine_head_two_li">打卡日历<RightOutlined /></li>
                                                        </ul>
                                                </div>
                                        </div>
                                        <div className='Mine_content_vip'>
                                                <div className='Mine_content_vip_one'>
                                                       <li><span><CrownOutlined /></span><span>加入VIP，免费畅享全场内容</span><button>立刻加入</button></li>
                                                </div>

                                                <div className='Mine_content_vip_two'>
                                                        <ul >
                                                                <li><FileTextOutlined /></li>
                                                                <li>我的订单</li>
                                                        </ul>
                                                        <ul>
                                                                <li><MessageOutlined /></li>
                                                                <li>我的消息</li>
                                                        </ul>
                                                </div>
                                        </div>

                                        <List>
                                                <Item><span><CrownOutlined /></span>读书会vip赠送</Item>
                                                <Item><span><GiftOutlined /></span>课程赠送</Item>
                                                <Item><span><NumberOutlined /></span>我的拼团</Item>
                                                <Item onClick={this.toIdea}><span><MailOutlined /></span>意见反馈</Item>
                                                <Item><span><DownloadOutlined /></span>下载APP</Item>
                                                <Item><span><MoneyCollectOutlined /></span>兑换中心</Item>
                                        </List>
                                        <Button className='Mine_out'><span><PoweroffOutlined /></span>退出</Button><WhiteSpace />
                                </div>
                                <Switch>
                                        <Route path={'/time'} component={Time} key={'time'} />
                                         <Route path={'/idea'} component={Idea} key={'idea'} />
                                </Switch>

                        </div>
                )
        }
}
export default withRouter(Mine);