import React from 'react';
import '../../css/Idea.scss';
// import { Route, Redirect, Switch, NavLink, withRouter, Router, Link ,} from 'react-router-dom';
import { Radio } from 'antd';
const options = [
    { label: '意见与功能反馈', value: '意见与功能反馈' },
    { label: '学课程', value: '学课程' },
    { label: '做测试', value: '做测试' },
    { label: '咨询、倾诉', value: '咨询、倾诉' },
    { label: '其他', value: '其他' },
];
class Idea extends React.Component {
    state = {
        // value1: 'Apple',
        // value2: 'Apple',
        // value3: 'Apple',
        // value4: 'Apple',
    };
    render() {
        // const { value1, value2, value3, value4 } = this.state;
        return (
            <div className='Idea'>
                <div className='Idea_one'>
                    <span className='Idea_span'>请选择反馈的问题类型<span style={{ color: "red" }}>*</span></span>
                    <li  className='Idea_one_li'>
                    <Radio.Group
                        options={options}
                        onChange={this.onChange3}
                        // value={value3}
                        optionType="button"
                    />
                    </li>
                </div>

            </div>
        )
    }
}
export default Idea;