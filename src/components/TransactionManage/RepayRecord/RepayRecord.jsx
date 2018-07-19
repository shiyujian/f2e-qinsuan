

const { Table,Form,Pagination,Button,Icon,Input,Select,DatePicker } = Antd;
import {apiGetorderlist, apiGetrecordlist,apiGetAllProduct} from '../../apis';
import FormBox from '../../Elements/FormBox';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const paginationStyle = {
    float: 'right',
};

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout,toExport,myStyle} from '../../common';
import { ORDER_STATUS,REPAY_FLAG, REPAY_STATUS } from '../../consts';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class RepayRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataRecordList: [],
            dataHideList: [],
            dataAllProduct: [],
            total: '',
            currentPage: DEFAULTPAGE,

            startRepayTime: '',
            endRepayTime: '',
            startShouldRepayTime: '',
            endShouldRepayTime: ''

        }
    }

    componentDidMount() {

        this.getRecordList(DEFAULTPAGE);
        this.getAllProduct();
    }
    getAllProduct() {

        jrFetchGet(apiGetAllProduct).then((ret) =>{
            this.setState({
                dataAllProduct: ret.data.result
            });
        })

    }

    getRecordList(page) {

        const formVal = this.props.form.getFieldsValue();
        const { startRepayTime,endRepayTime,startShouldRepayTime,endShouldRepayTime } = this.state;

        jrFetchGet(apiGetrecordlist,{
            page: page,
            limit: 8,
            duration: formVal.curDuration || '',
            phone: formVal.phoneNum || '',
            product_code: formVal.productName || '',
            repay_flag: formVal.repayFlag || '',
            repay_status: formVal.repayStatus ||'',
            repay_time_before: startRepayTime,
            repay_time_after: endRepayTime,
            should_time_before: startShouldRepayTime,
            should_time_after: endShouldRepayTime,
            user_id: formVal.userId || '',
            user_name: formVal.userName || '',
            order_id: formVal.orderId || ''
        }).then((ret) =>{
            this.setState({
                dataRecordList: ret.data.list,
                total: ret.data.total
            });
        })

    }
    toLatterExport(event){
        event.preventDefault();
        const formVal = this.props.form.getFieldsValue();
        const { startRepayTime,endRepayTime,startShouldRepayTime,endShouldRepayTime } = this.state;

        jrFetchGet(apiGetrecordlist,{
            page: 1,
            limit: 100000,
            duration: formVal.curDuration || '',
            phone: formVal.phoneNum || '',
            product_code: formVal.productName || '',
            repay_flag: formVal.repayFlag || '',
            repay_status: formVal.repayStatus ||'',
            repay_time_before: startRepayTime,
            repay_time_after: endRepayTime,
            should_time_before: startShouldRepayTime,
            should_time_after: endShouldRepayTime,
            user_id: formVal.userId || '',
            user_name: formVal.userName || '',
            order_id: formVal.orderId || ''
        }).then((ret) =>{
            this.setState({
                dataHideList: ret.data.list
            },()=>{
                toExport('还款记录.xls');
            });
        })
    }

    getRepayTime(date,dateString) {

        this.setState({
            startRepayTime: dateString[0],
            endRepayTime: dateString[1]
        });

    }

    getShouldRepayTime(date,dateString) {

        this.setState({
            startShouldRepayTime: dateString[0],
            endShouldRepayTime: dateString[1]
        });

    }

    toSearch() {

        this.setState({
            currentPage: DEFAULTPAGE
        });

        this.getRecordList(DEFAULTPAGE);


    }

    toChangePage(page) {

        this.setState({
            currentPage: page
        });

        this.getRecordList(page);

    }

    render() {

        const { dataRecordList,dataHideList,dataAllProduct,total,currentPage } = this.state;

        const { getFieldDecorator } = this.props.form;

        const columns = [
            {
                title:'用户ID',
                dataIndex: 'user_id',
                key: 'user_id',
                width: 80,
                fixed: 'left'
            },
            {
                title:'订单编号',
                dataIndex: 'order_id',
                key: 'order_id'
            },
            {
                title:'还款流水',
                dataIndex: 'trans_no',
                key: 'trans_no',
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
                title: '应还金额',
                dataIndex: 'due_amount',
                key: 'due_amount'
            },

            {
                title:'实际还款',
                dataIndex: 'repay_amount',
                key: 'repay_amount'
            },
            {
                title:'本金',
                dataIndex: 'repay_capital',
                key: 'repay_capital'
            },
            {
                title:'利息',
                dataIndex: 'repay_interest',
                key: 'repay_interest'
            },
            {
                title:'服务费',
                dataIndex: 'repay_service_charge',
                key: 'repay_service_charge'
            },
            {
                title:'手续费',
                dataIndex: 'repay_poundage',
                key: 'repay_poundage'
            },
            {
                title:'滞纳金',
                dataIndex: 'repay_late_fee',
                key: 'repay_late_fee'
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
            },
            {
                title:'还款日期',
                dataIndex: 'create_time',
                key: 'create_time'
            },
            {
                title:'状态',
                key: 'repay_status',
                render: (record) =>{
                    let midStatus = '';
                    if(record.repay_status === '1'){
                        midStatus = '失败'
                    }else{
                        midStatus = '成功'
                    }
                    return <span> { midStatus } </span>
                }
            },
            {
                title:'还款标识',
                key: 'status',
                render: (record) =>{
                    {
                        let midStatus = '';
                        REPAY_FLAG.map((val,key) =>{
                            if(record['status'] === `${val.value}`) {
                                midStatus = val.name
                            }
                        });

                        return <span> { midStatus } </span>
                    }
                }
            },
            {
                title:'失败原因',
                dataIndex: 'repay_message',
                key: 'repay_message'
            },
            {
                title:'还款渠道',
                key: 'trans_channel',
                render: (record) => {
                    return <span>
                        { record.trans_no === '' ? '线下还款' : '线上还款' }
                    </span>
                }
            },
            {
                title:'操作者',
                dataIndex: 'opera_name',
                key: 'opera_name',
                width: 80,
                fixed: 'right'
            },

        ];
        const columns_two = [
            {
                title:'用户ID',
                dataIndex: 'user_id',
                key: 'user_id',
            },
            {
                title:'订单编号',
                key: 'order_id',
                render: (record)=>{
                    return `'${record.id_card}`;
                }
            },
            {
                title:'还款流水',
                dataIndex: 'trans_no',
                key: 'trans_no',
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
                dataIndex: 'repay_amount',
                key: 'repay_amount'
            },
            {
                title:'本金',
                dataIndex: 'repay_capital',
                key: 'repay_capital'
            },
            {
                title:'利息',
                dataIndex: 'repay_interest',
                key: 'repay_interest'
            },
            {
                title:'服务费',
                dataIndex: 'repay_service_charge',
                key: 'repay_service_charge'
            },
            {
                title:'手续费',
                dataIndex: 'repay_poundage',
                key: 'repay_poundage'
            },
            {
                title:'滞纳金',
                dataIndex: 'repay_late_fee',
                key: 'repay_late_fee'
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
            },
            {
                title:'还款日期',
                dataIndex: 'create_time',
                key: 'create_time'
            },
            {
                title:'状态',
                key: 'repay_status',
                render: (record) =>{
                    let midStatus = '';
                    if(record.repay_status === '1'){
                        midStatus = '失败'
                    }else{
                        midStatus = '成功'
                    }
                    return <span> { midStatus } </span>
                }
            },
            {
                title:'还款标识',
                key: 'status',
                render: (record) =>{
                    {
                        let midStatus = '';
                        REPAY_FLAG.map((val,key) =>{
                            if(record['status'] === `${val.value}`) {
                                midStatus = val.name
                            }
                        });

                        return <span> { midStatus } </span>
                    }
                }
            },
            {
                title:'失败原因',
                dataIndex: 'repay_message',
                key: 'repay_message'
            },
            {
                title:'还款渠道',
                key: 'trans_channel',
                render: (record) => {
                    return <span>
                        { record.trans_no === '' ? '线下还款' : '线上还款' }
                    </span>
                }
            },
            {
                title:'操作者',
                dataIndex: 'opera_name',
                key: 'opera_name'
            },

        ];
        return <div>

            <h2>还款记录</h2>

            <FormBox>
                <Form layout="inline">
                    <FormItem label="产品名称">
                        {getFieldDecorator('productName')(
                            <Select style={{ width: 100 }} placeholder="请选择" allowClear>
                                { dataAllProduct.map((item) =>{
                                    return <Option value={item['code']}>{ item['name'] }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="订单号">
                        {getFieldDecorator('orderId')(
                            <Input placeholder="请输入订单号" />
                        )}
                    </FormItem>
                    <FormItem label="还款时间">
                        {getFieldDecorator('repayTime')(
                            <RangePicker onChange={ this.getRepayTime.bind(this) }/>
                        )}
                    </FormItem>
                    <FormItem label="应还时间">
                        {getFieldDecorator('shouldRepayTime')(
                            <RangePicker onChange={ this.getShouldRepayTime.bind(this) }/>
                        )}
                    </FormItem>
                    <FormItem label="客户名称">
                        {getFieldDecorator('userName')(
                            <Input placeholder="请输入客户名称" />
                        )}
                    </FormItem>
                    <FormItem label="手机号">
                        {getFieldDecorator('phoneNum')(
                            <Input placeholder="请输入手机号" />
                        )}
                    </FormItem>
                    <FormItem label="用户ID">
                        {getFieldDecorator('userId')(
                            <Input placeholder="请输入用户ID" />
                        )}
                    </FormItem>
                    <FormItem label="还款标识">
                        {getFieldDecorator('repayFlag')(
                            <Select style={{ width: 140 }} placeholder="请选择" allowClear>
                                { REPAY_FLAG.map((val,key) =>{
                                    return <Option value={val.value}>{ val.name }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="当前分期">
                        {getFieldDecorator('curDuration')(
                            <Input placeholder="请输入当前分期" />
                        )}
                    </FormItem>
                    <FormItem label="还款状态">
                        {getFieldDecorator('repayStatus')(
                            <Select style={{ width: 140 }} placeholder="请选择" allowClear>
                                { REPAY_STATUS.map((val,key) =>{
                                    return <Option value={val.value}>{ val.name }</Option>
                                }) }
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


            <Table columns={columns} dataSource={dataRecordList} pagination={false} size={this.props.tableSize} scroll={{ x: 1900 }}/><br/>
            <Table style={{display:'none'}} columns={columns_two} dataSource={dataHideList} pagination={false}/><br/>

            <Pagination
                style={paginationStyle}
                total={total}
                current={ currentPage }
                onChange={ this.toChangePage.bind(this) }/><br/>
        </div>

    }

}

const RepayRecordForm = Form.create()(RepayRecord);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(RepayRecordForm)