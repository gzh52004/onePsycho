import React from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

import request from "../../utils/request";

import { Route} from "react-router-dom";

import Search from "./search";

import "../../css/home.scss";
// import { render } from 'react-dom'
// import Lifecycle from './components/lifeCycle'
class FirstPage extends React.Component {
        state = {
                data: [{
                        id: 1,
                        URL: "https://ossimg.xinli001.com/20201023/1603453460260I03u887drSCloK64xY3lNke0nE2Smdeo.jpg?x-oss-process=image/quality,Q_80"
                }, {
                        id: 2,
                        URL: "https://ossimg.xinli001.com/20200630/6c58855d31e68ff45a6d7b109c2bbe58.png@80"
                }, {
                        id: 3,
                        URL: "https://ossimg.xinli001.com/20201023/1603453699093aRV8nbrxRVNELqUH1LLPOiee4jSQZDXm.jpg?x-oss-process=image/quality,Q_80"
                }, {
                        id: 4,
                        URL: "https://ossimg.xinli001.com/20201023/1603453330674LgxQ83TecdTDSGeakwmmWxT3MvL6gALV.jpg?x-oss-process=image/quality,Q_80"
                }, {
                        id: 5,
                        URL: "https://ossimg.xinli001.com/20201023/1603453768777iNLROOHI6VNuw1IcWbWs39c1nHsOcRXq.jpg?x-oss-process=image/quality,Q_80"
                }],
                imgHeight: 176,
                data_l: [{
                        id: 1,
                        URL: "https://imgco.xinli001.com/ceping/resources/images/trinyMCE/8b192a0619c54aa0a3feb0be8df1062f.png@80",
                        title: "《心里咨询导论》",
                        x_q: "美国心理咨询协会专家推荐，心理咨询基础教材",
                        num: 2,
                        price: 69
                }, {
                        id: 2,
                        URL: "https://imgco.xinli001.com/ceping/resources/images/trinyMCE/ca6fd1354fca4f38aa383e169d1dee1f.png@80",
                        title: "《心理咨询与治疗的理论及实践》",
                        x_q: "心理专业、咨询师培训、公共服务教材。",
                        num: 2,
                        price: 69
                }],
                dataList: []
        }
        componentDidMount() {
                // simulate img loading
                setTimeout(() => {
                        this.setState({
                                data: [{
                                        id: 1,
                                        URL: "https://ossimg.xinli001.com/20201023/1603453460260I03u887drSCloK64xY3lNke0nE2Smdeo.jpg?x-oss-process=image/quality,Q_80"
                                }, {
                                        id: 2,
                                        URL: "https://ossimg.xinli001.com/20200630/6c58855d31e68ff45a6d7b109c2bbe58.png@80"
                                }, {
                                        id: 3,
                                        URL: "https://ossimg.xinli001.com/20201023/1603453699093aRV8nbrxRVNELqUH1LLPOiee4jSQZDXm.jpg?x-oss-process=image/quality,Q_80"
                                }, {
                                        id: 4,
                                        URL: "https://ossimg.xinli001.com/20201023/1603453330674LgxQ83TecdTDSGeakwmmWxT3MvL6gALV.jpg?x-oss-process=image/quality,Q_80"
                                },
                                {
                                        id: 5,
                                        URL: "https://ossimg.xinli001.com/20201023/1603453768777iNLROOHI6VNuw1IcWbWs39c1nHsOcRXq.jpg?x-oss-process=image/quality,Q_80"
                                }],
                        });
                }, 100);
        };
        async componentDidMount() {
                const { data } = await request.get("user/datalist")
                console.log(data);
                this.setState({
                        dataList: data.data,
                })
        }
       
        render() {
                let { dataList, data_l } = this.state;
                console.log(dataList);
                return (
                        <div className="warp">
                                <div className="Head">
                                        <p className="log"><img src="//static.xinli001.com/node-college/public/img/lesson-logo.1a2e1615.png" alt="" /></p>
                                        <p className="sousuo">搜索课程、听书</p>
                                </div>
                                <WingBlank>
                                        <Carousel
                                                autoplay={true}
                                                infinite
                                        //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                        //   afterChange={index => console.log('slide to', index)}
                                        >
                                                {this.state.data.map(val => (
                                                        <img
                                                                key={val.id}
                                                                src={val.URL}
                                                                alt=""
                                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                        // onLoad={() => {
                                                        // fire window resize event to change height
                                                        //   window.dispatchEvent(new Event('resize'));
                                                        //   this.setState({ imgHeight: 'auto' });
                                                        // }}
                                                        />
                                                ))}
                                        </Carousel>
                                </WingBlank>
                                <div className="List">
                                        <div className="mun">
                                                <p className="on">
                                                        <img src="//static.xinli001.com/node-college/public/img/entrance-lesson.a125fef6.png" alt="" />
                                                </p>
                                                <p className="up">课程分类</p>
                                        </div>
                                        <div className="mun">
                                                <p className="on">
                                                        <img src="//static.xinli001.com/node-college/public/img/entrance-book.2da3193a.png" alt="" />
                                                </p>
                                                <p className="up">壹起听书</p>
                                        </div>
                                        <div className="mun">
                                                <p className="on">
                                                        <img src="//static.xinli001.com/node-college/public/img/entrance-zixun.1583e6be.png" alt="" />
                                                </p>
                                                <p className="up">学做咨询</p>
                                        </div>
                                        <div className="mun">
                                                <p className="on">
                                                        <img src="//static.xinli001.com/node-college/public/img/entrance-medi.70dd63ac.png" alt="" />
                                                </p>
                                                <p className="up">冥想星球</p>
                                        </div>
                                </div>
                                <div className="free">
                                        <div className="T">
                                                <h2>今日免费</h2>
                                                <p>播放</p>
                                        </div>
                                        <div className="D">
                                                <div className="pic">
                                                        <p className="pi">
                                                                <img src="https://ossimg.xinli001.com/20201023/1603453022962YFj2KqKbxKrGfW123nmOoJLqIm844EsR.jpg?x-oss-process=image/quality,Q_80" alt="" />
                                                        </p>
                                                        <p className="t">
                                                                <span className="o">朱建军的意向对话课：深入浅意多大困难大力开发能力</span>
                                                                <span className="oo">用潜意识的语言，了解内心的自己</span>
                                                        </p>
                                                </div>
                                                <div className="tit">3.怎么通过意向了解内心?</div>
                                        </div>
                                </div>
                                <div className="good">
                                        <div className="kex_cheng"><h2>精品好课</h2></div>
                                        <div className="xiang_qi">
                                                <ul className="w">
                                                        <li className="q">
                                                                <img src="https://ossimg.xinli001.com/20201026/1603695555859SZnyViBaqUGvrDGG34ggmfCgENWQttdG.jpg?x-oss-process=image/quality,Q_80" alt="" />
                                                        </li>
                                                        <li className="qq">
                                                                <p>朱建军的意向对话课...深入潜意识，寻识内...</p>
                                                        </li>
                                                        <li className="qqq">
                                                                <span className="m_z">朱建军</span>
                                                                <span>￥159</span>
                                                        </li>
                                                </ul>
                                                <ul className="w">
                                                        <li className="q">
                                                                <img src="https://ossimg.xinli001.com/20201023/1603452962687wDjaBXZq6EXRgVxdRi5vMqi9QWyNF46Q.jpg?x-oss-process=image/quality,Q_80" alt="" />
                                                        </li>
                                                        <li className="qq">
                                                                <p>洞悉相处之道，掌握...人际关系主动权</p>
                                                        </li>
                                                        <li className="qqq">
                                                                <span className="m_z">李松蔚</span>
                                                                <span>￥199</span>
                                                        </li>
                                                </ul>
                                                <ul className="w">
                                                        <li className="q">
                                                                <img src="https://ossimg.xinli001.com/20201023/1603454688130R7MxXXG1w8qHm0L5hGkU7dLMoCqcAIlt.jpg?x-oss-process=image/quality,Q_80" alt="" />
                                                        </li>
                                                        <li className="qq">
                                                                <p>走出抑郁，学会自我...愈</p>
                                                        </li>
                                                        <li className="qqq">
                                                                <span className="m_z">彭旭</span>
                                                                <span>￥129</span>
                                                        </li>
                                                </ul>
                                                <ul className="w">
                                                        <li className="q">
                                                                <img src="https://ossimg.xinli001.com/20201023/1603452852964HAEK0VfQS1hTYlxts5YDhgesFSYenocw.jpg?x-oss-process=image/quality,Q_80" alt="" />
                                                        </li>
                                                        <li className="qq">
                                                                <p>施琪嘉的心理成长课...疗愈内在小孩，激活...</p>
                                                        </li>
                                                        <li className="qqq">
                                                                <span className="m_z">施琪嘉</span>
                                                                <span>￥129</span>
                                                        </li>
                                                </ul>
                                        </div>
                                        <div className="f_g"></div>
                                        <div className="foot">更多 &gt; </div>
                                </div>
                                <div className="z_x">
                                        <div className="ke_cheng"><h2>咨询师领读</h2></div>
                                        <div className="l_b">
                                                {
                                                        data_l.map(item => {
                                                                return (
                                                                        <div className="d_l" key={item.id}>
                                                                                <div className="d_l-1">
                                                                                        <img src={item.URL} alt="" />
                                                                                </div>
                                                                                <div className="d_l-2">
                                                                                        <h4>{item.title}</h4>
                                                                                        <p className="d_l-2-c">{item.x_q}</p>
                                                                                        <p className="d_l-2-f">
                                                                                                <span className="d_l-2-f-1">共2本</span>
                                                                                                <span className="d_l-2-f-2">￥69 · VIP免费</span>
                                                                                        </p>
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })
                                                }
                                                {/* <div className="d_l">
                                <div className="d_l-1">
                                    <img src="https://imgco.xinli001.com/ceping/resources/images/trinyMCE/8b192a0619c54aa0a3feb0be8df1062f.png@80" alt=""/>
                                </div>
                                <div className="d_l-2">
                                    <h4>《心里咨询导论》</h4>
                                    <p className="d_l-2-c">美国心理咨询协会专家推荐，心理咨询基础教材</p>
                                    <p className="d_l-2-f">
                                        <span className="d_l-2-f-1">共2本</span>
                                        <span className="d_l-2-f-2">￥69 · VIP免费</span>
                                    </p>
                                </div>
                        </div>
                        <div className="d_l">
                                <div className="d_l-1">
                                    <img src="https://imgco.xinli001.com/ceping/resources/images/trinyMCE/ca6fd1354fca4f38aa383e169d1dee1f.png@80" alt=""/>
                                </div>
                                <div className="d_l-2">
                                    <h4>《心理咨询与治疗的理论及实践》</h4>
                                    <p className="d_l-2-c">心理专业、咨询师培训、公共服务教材。</p>
                                    <p className="d_l-2-f">
                                        <span className="d_l-2-f-1">共2本</span>
                                        <span className="d_l-2-f-2">￥69 · VIP免费</span>
                                    </p>
                                </div>
                            </div> */}

                                        </div>
                                        <div className="f_g"></div>
                                        <div className="foot">更多 &gt; </div>
                                </div>
                                <div className="t_j">
                                        <div className="ke_cheng"><h2>咨询师领读</h2></div>
                                                {
                                                        dataList.map(item => {
                                                                return (
                                                                        <div className="t_j-l" key={item.id}>
                                                                                <div className="t_j-l-l" key={item.id}>
                                                                                        <p className="t_j-l-l-t">{item.Title}</p>
                                                                                        <p className="t_j-l-l-m">
                                                                <span>{item.name}</span>
                                                                <span>￥{item.price}</span>
                                                                                        </p>
                                                                                </div>
                                                                                <div className="t_j-l-r">
                                                                                        <img src={item.pic} />
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })
                                                }
                                        {/* <div className="f_g"></div>
                                        <div className="foot">更多 &gt; </div> */}
                                </div>
                                <div className="d_b">已经底部了!</div>
                                <Route path="/search" component={Search}/>
                        </div>
                       
                )
        }
}
export default FirstPage;