import React, { Component } from 'react'
// import { render } from 'react-dom'
// import Lifecycle from './components/lifeCycle'
import { Menu,Row,Col} from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import '../css/listenbook.scss'
class ListenBook extends Component{
render(){
        return ( <div>
                <div >
                        <div className='headerimg'>
                                <img src={'https://imgco.xinli001.com/ceping/resources/images/trinyMCE/b52edd6dd46147a0907dbeacc3c0570f.png'}/>
                                <span>壹心理读书会</span>
                                </div>
                        <div className='headersrch'><div><SearchOutlined /></div></div>
                </div>
                </div>
  )
}
}
export default ListenBook