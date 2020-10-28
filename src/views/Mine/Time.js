import React from 'react'
import { RightOutlined } from '@ant-design/icons';
import '../../css/Time.scss'
import { Calendar } from 'antd';
import ListenBook from '../ListenBook.js'
import { Route, Switch, } from 'react-router-dom';


class Time extends React.Component {
    goto = () => {
        this.props.history.push('/listenBook')
    }
   
    render() {
        return (
            <div className='Time'>
                <div className="site-calendar-demo-card">
                    <Calendar fullscreen={false} />
                </div>
                <div className='time_content'>
                    <li>
                        你已坚持学习<span className='time_content_span'>0</span>天了!
                </li>
                    <li>
                        今天学习时长：<span>0</span>小时<span>0</span>分钟
                </li>
                    <li onClick={this.goto}>
                        <span className='time_content_span_two'>去听书打卡<RightOutlined /></span>
                    </li>
                </div>
                <div className='time_bottom'>
                    <p> 如何打卡？</p>
                    <p>- 只要你每天【累计听书满10分钟】，系统会自动完成当日打卡。</p>
                    <p>- 为了让你的学习数据更精准，我们希望你在网络流畅的环境下进行听书哦。</p>
                    <p>- 每天晚上12点，数据均会重新计算，所以要记得在此之前打卡哦。</p>
                    <p>- 如果对打卡的时间有任何疑问，请添加<span style={{ color: '#6982fa' }}>壹心理书童华安（yiweishuaigedeweixin）</span></p>
                    <p>- 壹心理保留最终解释权。</p>
                    <p>- 壹心理保留最终解释权。</p>
                </div>
                <Switch>
                    <Route path={'/listenBook'} component={ListenBook} key={'listenBook'} />)
                </Switch>
            </div>
        )
    }
}
export default Time;