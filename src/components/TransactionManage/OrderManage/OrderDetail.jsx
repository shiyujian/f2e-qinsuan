

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout} from '../../common';
import { DEAL_TYPE } from '../../consts';
const { Table,Form,Modal,Button,Icon,Input,Select,DatePicker,Alert,Collapse,Row, Col,message } = Antd;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Option = Select.Option;
import FormBox from '../../Elements/FormBox';

import { apiGetorderallinfo,apiAheadsettle,apiDoaheadsettle,apiCancelorder,apiOfflinerepayrecord,apiLoanFailAction } from '../../apis';

const [CHULI,TIQIANJIEQING,YUANEHUANKUAN] = ['chuli','tiqianjieqing','yuanehuankuan'];

class OrderDetail extends React.Component{


    constructor(props){
        super(props);
        this.state = {

            dataOrderallinfo: [],
            showModel: false,
            clickType: CHULI,
            dataAheadsettle: []

        }
    }

    componentDidMount(){

        const { order_id } = this.props.location['query'];

        jrFetchGet(apiGetorderallinfo,{
            order_id: order_id
        }).then((ret) =>{
            this.setState({
                dataOrderallinfo: ret.data
            });
        })

    }

    onCancleModel(){

        this.setState({
            showModel: false
        });

        setTimeout(() => {
            this.props.form.resetFields();
        }, 200);

    }

    toRepayList() {

        const { order_id } = this.props.location['query'];

        window.location.href = `#/MainView/Transaction/RepayList?order_id=${order_id}`;

    }

    getContent() {

        const { dataOrderallinfo } = this.state;

        const { card_info,loan_record } = dataOrderallinfo;

        return  <Collapse defaultActiveKey={['1']}>
            <Panel header="用户信息" key="1">
                <Row>
                    <Col span={6}>用户ID：{ dataOrderallinfo.user_i_d }</Col>
                    <Col span={6}>用户姓名：{ dataOrderallinfo.name }</Col>
                    <Col span={6}>手机号：{ dataOrderallinfo.phone }</Col>
                    <Col span={6}>身份证: { dataOrderallinfo.id_card }</Col>
                </Row>
            </Panel>
            <Panel header="订单信息" key="2">
                <Row>
                    <Col span={12}>
                        <p>产品名称：{ dataOrderallinfo.product_i_d }</p><br/>
                        <p>放款金额：{ dataOrderallinfo.capital }</p><br/>
                        <p>申请金额：{ dataOrderallinfo.loan_money }</p>
                    </Col>
                    <Col span={12}>
                        <p>期数：{ dataOrderallinfo.loan_stages }</p><br/>
                        <p>申请时间：{ dataOrderallinfo.create_time }</p><br/>
                        <p>放款时间：{ dataOrderallinfo.loan_time }</p>
                    </Col>
                </Row>
            </Panel>
            <Panel header="放款信息" key="3">
                <Row>
                    <Col span={6}>
                        <p>卡号：{ card_info && card_info.bank_no }</p>
                    </Col>
                    <Col span={6}>银行名称：{ card_info && card_info.bank_name }</Col>
                    <Col span={6}>
                        { loan_record && loan_record.map((item) =>{
                             return <p>放款状态: { item.Status }</p>
                        }) }
                    </Col>
                    <Col span={6} style={{ display: loan_record && loan_record['StatusDetail'] === '' ? 'none' : '' }}>
                        { loan_record && loan_record.map((item) =>{
                             return <p>失败原因: { item.StatusDetail }</p>
                        }) }
                    </Col>
                </Row>
            </Panel>
        </Collapse>

    }

    getModelContent() {

        const { getFieldDecorator } = this.props.form;

        const { dataOrderallinfo,dataAheadsettle } = this.state;

        const { order_id } = this.props.location['query'];

        switch (this.state.clickType){
            case CHULI:
                return <Form layout="inline" style={{lineHeight: '50px'}}>
                    <FormItem label="用户名称">
                        <span>{ dataOrderallinfo.name }</span>
                    </FormItem>

                    <FormItem label="用户ID">
                        <span>{ dataOrderallinfo.user_i_d }</span>
                    </FormItem>

                    <FormItem label="订单号">
                        <span>{ order_id }</span>
                    </FormItem>

                    <FormItem label="申请金额">
                        <span>{ dataOrderallinfo.loan_money }</span>
                    </FormItem>

                    <FormItem label="实际贷款金额">
                        <span>{ dataOrderallinfo.capital }</span>
                    </FormItem>

                    <FormItem label="处理方式">
                        {getFieldDecorator('dealType')(
                            <Select style={{ width: 100 }} allowClear>
                                { DEAL_TYPE.map((val,key) =>{
                                    return <Option value={val.value}>{ val.name }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>
                </Form>;
                break;
            case TIQIANJIEQING:
                return <Form layout="inline" style={{lineHeight: '50px'}}>
                    <FormItem label="用户名">
                        <span>{ dataAheadsettle.user_name }</span>
                    </FormItem>

                    <FormItem label="客户号">
                        <span>{ dataAheadsettle.user_no }</span>
                    </FormItem>

                    <FormItem label="订单号">
                        <span>{ dataAheadsettle.order_id }</span>
                    </FormItem>

                    <FormItem label="正常应还">
                        <span>{ dataAheadsettle.normal_repay }</span>
                    </FormItem>

                    <FormItem label="剩余应还">
                        <span>{ dataAheadsettle.surplus }</span>
                    </FormItem>

                    <FormItem label="违约金">
                        <span>{ dataAheadsettle.liquidated_damages }</span>
                    </FormItem>

                    <FormItem label="应还总额">
                        <span>{ dataAheadsettle.amount }</span>
                    </FormItem>

                    <FormItem label="实际还款">
                        {getFieldDecorator('TQ_realToRepay')(
                            <Input/>
                        )}
                    </FormItem>
                </Form>;
                break;
            case YUANEHUANKUAN:
                return <Form layout="inline" style={{lineHeight: '50px'}}>
                    <FormItem label="用户名">
                        <span>{ dataOrderallinfo.name }</span>
                    </FormItem>

                    <FormItem label="客户号">
                        <span>{ dataOrderallinfo.user_i_d}</span>
                    </FormItem>

                    <FormItem label="订单号">
                        <span>{ order_id }</span>
                    </FormItem>

                    <FormItem label="放款金额">
                        <span>{ dataOrderallinfo.capital }</span>
                    </FormItem>

                    <FormItem label="应还金额">
                        <span>{ dataOrderallinfo.amount }</span>
                    </FormItem>

                    <FormItem label="实际还款">
                        {getFieldDecorator('YE_realToRepay')(
                            <Input/>
                        )}
                    </FormItem>
                </Form>;
                break;
        }

    }

    handleChuli() {

        this.setState({
            showModel: true,
            clickType: CHULI
        })
    }

    handleJieqin() {

        const { order_id } = this.props.location['query'];

        jrFetchGet(apiAheadsettle,{
            order_id: order_id
        }).then((ret) =>{
            this.setState({
                dataAheadsettle: ret.data
            });
        });

        setTimeout(() =>{
            this.setState({
                showModel: true,
                clickType: TIQIANJIEQING
            })
        },200);

    }

    handleRepay() {
        this.setState({
            showModel: true,
            clickType: YUANEHUANKUAN
        })
    }

    getTitle() {
        let title = '';
        switch (this.state.clickType){
            case CHULI:
                title = '处理';
                break;
            case TIQIANJIEQING:
                title = '提前结清';
                break;
            case YUANEHUANKUAN:
                title = '原额还款';
                break;
        }

        return title;
    }



    handleOk() {

        const { order_id } = this.props.location['query'];
        const formVal = this.props.form.getFieldsValue();
        let postData = {
            order_id: order_id,
        };

        let postUrl = '';

        switch (this.state.clickType){
            case CHULI:
                jrFetchPost(apiLoanFailAction,{
                    order_id: order_id,
                    flag: formVal.dealType
                }).then(() =>{
                    message.success('操作成功');
                    setTimeout(() =>{
                        this.onCancleModel();
                    },200);
                });
                break;
            case TIQIANJIEQING:
                postUrl = apiDoaheadsettle;
                Object.assign(postData,{ amount: parseInt(formVal['TQ_realToRepay']*100) });
                break;
            case YUANEHUANKUAN:
                postUrl = apiCancelorder;
                Object.assign(postData,{ amount: parseInt(formVal['YE_realToRepay']*100) });
                break;
        }


        if(this.state.clickType !== CHULI){
            jrFetchPost(apiOfflinerepayrecord,postData).then(() =>{

                //为了安全性，先请求Offlinerepayrecord接口。

                setTimeout(() =>{

                    jrFetchPost(postUrl,{
                        order_id: order_id
                    }).then((ret) =>{

                        message.success('操作成功');
                        setTimeout(() =>{
                            this.onCancleModel();
                        },200);

                    })

                },100);

            });
        }
    }


    render() {

        const { order_id } = this.props.location['query'];

        const { showModel,dataOrderallinfo } = this.state;

        const { status } = dataOrderallinfo;

        return <div>
            <FormBox>
                <Form layout="inline">
                    <FormItem>
                        <span style={{ fontSize: 18,color: '#555555' }}>订单详情<label style={{ fontSize: 14 }}>（订单号：{order_id}）</label></span>
                    </FormItem>
                    <FormItem style={{ float: 'right' }}>
                        <span style={{ display: status === 220 ? '' : 'none' }}>
                            <Button type="primary" onClick={this.handleChuli.bind(this)}>处理</Button>
                            <span className="ant-divider" />
                        </span>
                        <span style={{ display: status === 230 ? '' : 'none' }}>
                            <Button type="primary" onClick={this.handleJieqin.bind(this)}>提前结清</Button>
                            <span className="ant-divider" />
                            <Button type="primary" onClick={this.handleRepay.bind(this)}>原额还款</Button>
                            <span className="ant-divider" />
                        </span>
                        <span style={{ display: status >= 230 ? '' : 'none' }}>
                            <Button type="primary" onClick={this.toRepayList.bind(this)}>还款计划</Button>
                        </span>
                    </FormItem>
                </Form>
            </FormBox>

            { this.getContent() }

            <Modal title={this.getTitle()}
                   visible={ showModel }
                   onOk={this.handleOk.bind(this)}
                   onCancel={()=>{this.onCancleModel()}}
            >
                { this.getModelContent() }

            </Modal>

        </div>
    }

}

OrderDetail = Form.create()(OrderDetail);

export default OrderDetail
