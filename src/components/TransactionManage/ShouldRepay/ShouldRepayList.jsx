

const { Table,Form,Pagination,Button,Icon,Input,Select,DatePicker,Modal,message,Checkbox } = Antd;
import {apiGetneedsrepaylist, apiGetorderlist,apiGetAllProduct} from '../../apis';
import FormBox from '../../Elements/FormBox';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const { RangePicker } = DatePicker;
const paginationStyle = {
    float: 'right',
};
const [XXHK,ZDDK,SQJM] = ['线下还款','自动代扣','申请减免'];

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout,toExport,myStyle} from '../../common';
import { SHOULD_REPAY_FLAG, SHOULD_REPAY_MAP } from '../../consts';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val,
    }
};

class ShouldRepayList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataNeedsrepaylist: [],
            dataHideList: [],
            dataAllProduct: [],
            total: '',
            currentPage: DEFAULTPAGE,
            showModel: false,

            startRepayTime: '',
            endRepayTime: '',

            title: '',
            dataReductionInfo: [],
            repay_money: 0,

            reduceInterest: 0,
            reduceService: 0,
            reducePoundage: 0
        }
    }

    componentDidMount() {

        this.getReductionList(DEFAULTPAGE);
        this.getAllProduct();
    }
    getAllProduct() {

        jrFetchGet(apiGetAllProduct).then((ret) =>{
            this.setState({
                dataAllProduct: ret.data.result
            });
        })

    }


    getReductionList(page) {

        const { startRepayTime,endRepayTime } = this.state;

        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiGetneedsrepaylist,{
            page: page,
            limit: 10,
            should_time_before: startRepayTime,
            should_time_after: endRepayTime,
            product_code: formVal.productName || '',
            user_name: formVal.username || '',
            phone: formVal.phoneNum || '',
            over_due: formVal.isOverdue || '',
            duration: formVal.stages || '',
            repay_status: formVal.S_status || '',
            user_id: formVal.userId || '',
            order_id: formVal.orderId || ''
        }).then((ret) =>{
            this.setState({
                dataNeedsrepaylist: ret.data.list,
                total: ret.data.total
            });
        })

    }
    toLatterExport(event){
        event.preventDefault();
        const { startRepayTime,endRepayTime } = this.state;

        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiGetneedsrepaylist,{
            page: 1,
            limit: 100000,
            should_time_before: startRepayTime,
            should_time_after: endRepayTime,
            product_code: formVal.productName || '',
            user_name: formVal.username || '',
            phone: formVal.phoneNum || '',
            over_due: formVal.isOverdue || '',
            duration: formVal.stages || '',
            repay_status: formVal.S_status || '',
            user_id: formVal.userId || '',
            order_id: formVal.orderId || ''
        }).then((ret) =>{
            this.setState({
                dataHideList: ret.data.list
            },()=>{
                toExport('应还款.xls');
            });
        })
    }

    getRepayTime(date,dateString) {

        this.setState({
            startRepayTime: dateString[0],
            endRepayTime: dateString[1]
        });

    }

    toSearch() {

        this.setState({
            currentPage: DEFAULTPAGE
        });

        this.getReductionList(DEFAULTPAGE);

    }

    toChangePage(page) {

        this.setState({
            currentPage: page
        });

        this.getReductionList(page);

    }




    getModelContent() {

        const { title,dataReductionInfo,showModel } = this.state;

        const { getFieldDecorator } = this.props.form;

        switch (title){

            case XXHK:
                return <Form layout="inline" style={{lineHeight: '50px'}}>
                    <FormItem label="用户名">
                        {getFieldDecorator('user_name')(
                            <Input placeholder="user_name" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="客户号">
                        {getFieldDecorator('user_id')(
                            <Input placeholder="user_id" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="订单号">
                        {getFieldDecorator('order_id')(
                            <Input placeholder="order_id" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="当前分期">
                        {getFieldDecorator('duration')(
                            <Input placeholder="duration" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="服务费">
                        {getFieldDecorator('due_service_charge')(
                            <Input placeholder="due_service_charge" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="利息">
                        {getFieldDecorator('due_interest')(
                            <Input placeholder="due_interest" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="滞纳金">
                        {getFieldDecorator('due_late_fee')(
                            <Input placeholder="due_late_fee" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="本期应还">
                        {getFieldDecorator('due_amount')(
                            <Input placeholder="due_amount" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="剩余应还">
                        {getFieldDecorator('surplus')(
                            <Input placeholder="surplus" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="实际还款">
                        {getFieldDecorator('repayMoney', {
                            rules: [{ required: true}],
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="还款方式">
                        {getFieldDecorator('repayType',{
                            rules: [{ required: true}],
                        })(
                            <Select style={{ width: 100 }} placeholder="请选择">
                                <Option value='all'>完整还款</Option>
                                <Option value='part'>部分还款</Option>
                            </Select>
                        )}
                    </FormItem>
                </Form>;
                break;
            case ZDDK:
                return <Form layout="inline" style={{lineHeight: '50px'}}>
                    <FormItem label="用户名">
                        {getFieldDecorator('user_name')(
                            <Input placeholder="user_name" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="客户号">
                        {getFieldDecorator('user_id')(
                            <Input placeholder="user_id" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="订单号">
                        {getFieldDecorator('order_id')(
                            <Input placeholder="order_id" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="当前分期">
                        {getFieldDecorator('duration')(
                            <Input placeholder="duration" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="服务费">
                        {getFieldDecorator('due_service_charge')(
                            <Input placeholder="due_service_charge" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="手续费">
                        {getFieldDecorator('due_poundage')(
                            <Input placeholder="due_poundage" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="利息">
                        {getFieldDecorator('due_interest')(
                            <Input placeholder="due_interest" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="滞纳金">
                        {getFieldDecorator('due_late_fee')(
                            <Input placeholder="due_late_fee" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="本期应还">
                        {getFieldDecorator('due_amount')(
                            <Input placeholder="due_amount" disabled/>
                        )}
                    </FormItem>

                    <FormItem label="剩余应还">
                        {getFieldDecorator('surplus')(
                            <Input placeholder="surplus" disabled/>
                        )}
                    </FormItem>
                </Form>;
                break;
            case SQJM:
                return <Form layout="inline" style={{lineHeight: '50px'}}>

                    <FormItem>
                        {getFieldDecorator('checkGroup_one')(
                            <Checkbox onChange={this.Group_one.bind(this)} >利息:{ dataReductionInfo.interest }</Checkbox>
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('checkGroup_two')(
                            <Checkbox onChange={this.Group_two.bind(this)} >服务费:{ dataReductionInfo.service_fee }</Checkbox>
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('checkGroup_three')(
                            <Checkbox onChange={this.Group_three.bind(this)} >手续费:{ dataReductionInfo.poundage }</Checkbox>
                        )}
                    </FormItem>

                    <FormItem label="滞纳金">
                        <span>{ dataReductionInfo.late_fee }</span>
                    </FormItem>

                    <FormItem label="减免天数">
                        {getFieldDecorator('reduceDays',{
                            rules: [{ required: true}],
                        })(
                            <Select style={{ width: 100 }} placeholder="请选择" allowClear>
                                { this.getOption(dataReductionInfo.late_day) }
                            </Select>
                        )}
                    </FormItem>

                    <FormItem>
                        <p>共减免 <b>{ (this.getReduceMoney(dataReductionInfo)).toFixed(2) }</b>元</p>
                    </FormItem>
                </Form>;
                break;

        }

    }


    Group_one(e) {

        const { interest } = this.state.dataReductionInfo;

        e.target.checked ? this.setState({ reduceInterest: interest }) : this.setState({ reduceInterest: 0 })
    }

    Group_two(e) {

        const { service_fee } = this.state.dataReductionInfo;

        e.target.checked ? this.setState({ reduceService: service_fee }) : this.setState({ reduceService: 0 })
    }

    Group_three(e) {

        const { poundage } = this.state.dataReductionInfo;

        e.target.checked ? this.setState({ reducePoundage: poundage }) : this.setState({ reducePoundage: 0 })
    }

    getReduceMoney(data){

        //这里的实现方式不怎么好，有心的话可以改一下

        let money = 0;

        const { reduceDays } = this.props.form.getFieldsValue();

        const { reduceInterest,reduceService,reducePoundage } = this.state;

        if(reduceDays === undefined){

            money = money + reduceInterest + reduceService + reducePoundage;

        }else{

            money = money + reduceInterest + reduceService + reducePoundage + parseInt(reduceDays) * data['single_late_fee'];

        }

        return money;

    }

    getOption(days){

        let midArr = [];

        for(let i = 0;i <= days; i++){
            midArr.push(<Option value={i}>{i}</Option>)
        }
        return midArr

    }

    onCancleModel(){

        this.props.form.resetFields();

        this.setState({
            showModel: false,
            reduceInterest: 0,
            reduceService: 0,
            reducePoundage: 0
        });

    }



    onOkHandle() {

        message.success('操作成功');

        this.getReductionList(this.state.currentPage);

        setTimeout(()=>{
            this.onCancleModel();
        },100);



    }

    toSQJM(record){

        this.setState({
            showModel: true,
            title: SQJM
        });


        jrFetchGet('/auth/repayment/GetReductionInfo',{
            duration: record.duration,
            order_id: record.order_id
        }).then((ret) =>{
            this.setState({
                dataReductionInfo: ret.data
            });
        })

    }

    handleOk() {

        const { repayMoney,repayType,duration,order_id,reduceDays } = this.props.form.getFieldsValue();

        const { single_late_fee,single_order_id,single_duration } = this.state.dataReductionInfo;

        const { reduceInterest,reduceService,reducePoundage } = this.state;

        this.props.form.validateFields((err, values) => {
            if (err) {
                message.info("标记*的为必填项哦");
            }else{

                switch (this.state.title){
                    case XXHK:
                        let postData = {
                            amount: Math.ceil(repayMoney * 100),
                            duration: duration,
                            order_id: order_id
                        };

                        switch (repayType){

                            case 'part':
                                jrFetchPost('/auth/repayment/partrepay',postData)
                                    .then((ret)=>{
                                        this.onOkHandle();
                                    });
                                break;
                            default:
                                jrFetchPost('/auth/repayment/offlinerepayrecord',postData)
                                    .then((ret)=>{
                                        jrFetchPost('/auth/repayment/offlinerepay',{
                                            stage: duration,
                                            order_id: order_id
                                        }).then((ret) =>{
                                            this.onOkHandle();
                                        })
                                    });

                        }
                        break;
                    case ZDDK:
                        jrFetchPost('/auth/repayment/ManualDeduct',{
                            duration: duration,
                            order_id: order_id
                        }).then((ret) =>{
                            this.onOkHandle();
                        });

                        break;
                    case SQJM:

                        jrFetchPost('/auth/repayment/reduction',{
                            order_id: single_order_id,
                            stage: single_duration,
                            interest: parseInt(reduceInterest * 100),
                            service_charge: parseInt(reduceService * 100),
                            poundage: parseInt(reducePoundage * 100),
                            late_fee: parseInt(reduceDays)
                        }).then((ret) =>{
                            this.onOkHandle();
                        });
                        break;
                }

            }
        });


    }

    render() {

        const { dataNeedsrepaylist,dataHideList,dataAllProduct,total,currentPage,showModel,title } = this.state;

        const { getFieldDecorator } = this.props.form;

        const columns = [
            {
                title:'用户ID',
                dataIndex: 'user_id',
                key: 'user_id'
            },
            {
                title:'订单编号',
                dataIndex: 'order_id',
                key: 'order_id'
            },
            {
                title:'手机号',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title:'客户名称',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title:'总期数',
                dataIndex: 'stages',
                key: 'stages'
            },
            {
                title:'当前分期',
                dataIndex: 'duration',
                key: 'duration'
            },
            {
                title:'应还金额',
                dataIndex: 'due_amount',
                key: 'due_amount'
            },
            {
                title:'剩余应还',
                dataIndex: 'surplus',
                key: 'surplus'
            },
            {
                title:'本金',
                dataIndex: 'due_capital',
                key: 'due_capital'
            },
            {
                title:'利息',
                dataIndex: 'due_interest',
                key: 'due_interest'
            },
            {
                title:'服务费',
                dataIndex: 'due_service_charge',
                key: 'due_service_charge'
            },
            {
                title:'手续费',
                dataIndex: 'due_poundage',
                key: 'due_poundage'
            },
            {
                title:'滞纳金',
                dataIndex: 'due_late_fee',
                key: 'due_late_fee'
            },

            {
                title:'逾期天数',
                dataIndex: 'late_days',
                key: 'late_days'
            },
            {
                title:'状态',
                key: 'status',
                dataIndex: 'status',
                render: text => SHOULD_REPAY_MAP[text+'']
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
            },
            {
                title:'操作',
                key: 'operate',
                width: 250,
                fixed: 'right',
                render: (record)=>{
                    return <span>
                        <a onClick={()=>{
                            this.setState({
                                showModel: true,
                                title: XXHK
                            });
                            setTimeout(()=>{
                                this.props.form.setFieldsValue(record);
                            },200)
                        }}>线下还款</a>

                        <span className="ant-divider" />

                        <a onClick={() =>{
                            this.setState({
                                showModel: true,
                                title: ZDDK
                            });
                            setTimeout(()=>{
                                this.props.form.setFieldsValue(record);
                            },200)
                        }}>自动代扣</a>

                        <span className="ant-divider" />

                        <a onClick={this.toSQJM.bind(this,record)}>申请减免</a>

                        <span className="ant-divider" />

                        <a onClick={() => {
                            window.open(`/#/MainView/Transaction/RepayList?order_id=${record.order_id}`)
                        }}>还款记录</a>
                    </span>
                }
            }
        ];
        const columns_two = [
            {
                title:'用户ID',
                dataIndex: 'user_id',
                key: 'user_id'
            },
            {
                title:'订单编号',
                key: 'order_id',
                render: (record)=>{
                    return `'${record.id_card}`;
                }
            },
            {
                title:'手机号',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title:'客户名称',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title:'总期数',
                dataIndex: 'stages',
                key: 'stages'
            },
            {
                title:'当前分期',
                dataIndex: 'duration',
                key: 'duration'
            },
            {
                title:'应还金额',
                dataIndex: 'due_amount',
                key: 'due_amount'
            },
            {
                title:'剩余应还',
                dataIndex: 'surplus',
                key: 'surplus'
            },
            {
                title:'本金',
                dataIndex: 'due_capital',
                key: 'due_capital'
            },
            {
                title:'利息',
                dataIndex: 'due_interest',
                key: 'due_interest'
            },
            {
                title:'服务费',
                dataIndex: 'due_service_charge',
                key: 'due_service_charge'
            },
            {
                title:'手续费',
                dataIndex: 'due_poundage',
                key: 'due_poundage'
            },
            {
                title:'滞纳金',
                dataIndex: 'due_late_fee',
                key: 'due_late_fee'
            },

            {
                title:'逾期天数',
                dataIndex: 'late_days',
                key: 'late_days'
            },
            {
                title:'状态',
                key: 'status',
                dataIndex: 'status',
                render: text => SHOULD_REPAY_MAP[text+'']
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
            }
        ];

        return <div>

            <h2>应还款查询</h2>

            <FormBox>
                <Form layout="inline">
                    <FormItem label="产品名称">
                        {getFieldDecorator('productName')(
                            <Select style={{ width: 140 }} placeholder="请选择">
                                { dataAllProduct.map((item) =>{
                                    return <Option value={item['code']}>{ item['name'] }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>

                    <FormItem label="订单号">
                        {getFieldDecorator('orderId')(
                            <Input placeholder="请输入订单号"/>
                        )}
                    </FormItem>
                    <FormItem label="应还时间">
                        {getFieldDecorator('time')(
                            <RangePicker onChange={ this.getRepayTime.bind(this) }/>
                        )}
                    </FormItem>
                    <FormItem label="客户名称">
                        {getFieldDecorator('username')(
                            <Input placeholder="请输入客户名称" />
                        )}
                    </FormItem>
                    <FormItem label="手机号">
                        {getFieldDecorator('phoneNum')(
                            <Input placeholder="请输入手机号"/>
                        )}
                    </FormItem>
                    <FormItem label="用户ID">
                        {getFieldDecorator('userId')(
                            <Input placeholder="请输入用户ID"/>
                        )}
                    </FormItem>

                    <FormItem label="状态">
                        {getFieldDecorator('S_status')(
                            <Select style={{ width: 140 }} placeholder="请选择" allowClear>
                                { SHOULD_REPAY_FLAG.map((val,key) =>{
                                    return <Option value={val.value}>{ val.name }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>


                    <FormItem label="当前分期">
                        {getFieldDecorator('stages')(
                            <Input placeholder="请输入当前分期" />
                        )}
                    </FormItem>
                    <FormItem label="是否逾期">
                        {getFieldDecorator('isOverdue')(
                            <Select style={{ width: 140 }} placeholder="请选择" allowClear>
                                <Option value='1'>是</Option>
                                <Option value='0'>否</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" onClick={this.toSearch.bind(this)}>查询<Icon type="search"/></Button>
                        <Button type="primary" style={{marginLeft:'15px'}} onClick={ this.toLatterExport.bind(this) }><a style={myStyle} id="toLatterExport">导出<Icon type="export"/></a></Button>

                        <span className="ant-divider" />
                        <Button type="danger" onClick={() =>{ this.props.form.resetFields() }}>重置查询条件</Button>
                    </FormItem>
                </Form>
            </FormBox>


            <Table columns={columns} dataSource={dataNeedsrepaylist} scroll={{ x: 1500 }} pagination={false} size={this.props.tableSize}/><br/>
            <Table style={{display:'none'}} columns={columns_two} dataSource={dataHideList} pagination={false}/><br/>

            <Pagination
                style={paginationStyle}
                total={total}
                current={ currentPage }
                onChange={ this.toChangePage.bind(this) }/><br/>


            {
                showModel ? <Modal title={ title }
                                   visible={ showModel }
                                   onOk={this.handleOk.bind(this)}
                                   onCancel={()=>{this.onCancleModel()}}
                >
                    { this.getModelContent() }

                </Modal> : []
            }

        </div>

    }

}

const ShouldRepayListForm = Form.create()(ShouldRepayList);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(ShouldRepayListForm)