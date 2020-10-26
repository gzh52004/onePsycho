import React, { Component } from 'react'
// import { render } from 'react-dom'
// import Lifecycle from './components/lifeCycle'
import { Menu,Row,Col} from 'antd';
import {SearchOutlined,MailOutlined,AppstoreOutlined} from '@ant-design/icons'
import '../css/listenbook.scss'

       
// import img1 from '../assets/images/midnav1.jpg'
// import img2 from '../assets/images/midnav2.jpg'
// import img3 from '../assets/images/midnav3.jpg'
// import img4 from '../assets/images/midnav4.jpg'
class ListenBook extends Component{
        state={
                images:[
                        {
                        key:1,
                        imag:'images/midnav1.jpg'
                        }, 
                        {
                        key:2,
                        imag:'images/midnav2.jpg'
                        }, 
                        {
                        key:3,
                        imag:'images/midnav3.jpg'
                        }, 
                        {
                        key:4,
                        imag:'images/midnav4.jpg'
                        }
                ]
        }
render(){
        const{images} = this.state
        return ( <div>
                <div >
                        <div className='headerimg'>
                                <img src={'https://imgco.xinli001.com/ceping/resources/images/trinyMCE/b52edd6dd46147a0907dbeacc3c0570f.png'}/>
                                <span>壹心理读书会</span>
                                </div>
                        <div className='headersrch'><div><SearchOutlined /></div></div>
                </div>
        <Menu mode="horizontal" className='listentwo'>
        {this.state.images.map(item=><Menu.Item key={item.key} ><img src={item.imag}/></Menu.Item>)}
                {/* {images.map((item)=>{
                        return(<Menu.Item key={item.key}  className='midNav'><img src={item.imag}/>
                        </Menu.Item>)
                })} */}
                      
               
        
      </Menu>
                </div>
  )
}
}
export default ListenBook