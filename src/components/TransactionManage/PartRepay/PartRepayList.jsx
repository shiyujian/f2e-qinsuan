

const { Table,Form,Pagination,Button,Icon,Input,Select,DatePicker,Modal,message } = Antd;
import {apiPartrepaylist, apiPartRepayEdit, apiGetorderlist,apiGetAllProduct} from '../../apis';
import FormBox from '../../Elements/FormBox';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const paginationStyle = {
    float: 'right',
};

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout, toExport, myStyle} from '../../common';
import { REPAY_FLAG, ADD, EDIt, REPAY_STATUS, SHOULD_REPAY_FLAG} from '../../consts';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class PartRepayList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataPartrepaylist: [],
            dataHideList: [],
            dataAllProduct: [],
            total: '',
            currentPage: DEFAULTPAGE,
            showModel: false,
            id: '',

            startCreateTime: '',
            endCreateTime: '',
            startUpdateTime: '',
            endUpdateTime: '',
            startRepayTime: '',
            endRepayTime: ''
        }
    }

    componentDidMount() {

        this.getPartrepaylist(DEFAULTPAGE);
        this.getAllProduct();
    }
    getAllProduct() {

        jrFetchGet(apiGetAllProduct).then((ret) =>{
            this.setState({
                dataAllProduct: ret.data.result
            });
        })

    }

    resetForm() {
        this.setState({
            showModel: false
        });

        setTimeout(() => {
            this.props.form.resetFields();
        }, 200);
    }

    getPartrepaylist(page) {

        const { startCreateTime,endCreateTime,startUpdateTime,endUpdateTime,startRepayTime,endRepayTime } = this.state;
        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiPartrepaylist,{
            page: page,
            limit: 10,
            create_time_before: startCreateTime,
            create_time_after: endCreateTime,
            repay_time_before: startRepayTime,
            repay_time_after: endRepayTime,
            update_time_before: startUpdateTime,
            update_time_after: endUpdateTime,
            order_id: formVal.orderId || '',
            phone: formVal.phoneNum || '',
            product_code: formVal.productName || '',
            user_id: formVal.userId || '',
            user_name: formVal.username || '',
            status: formVal.repayStatus || ''
        }).then((ret) =>{
            this.setState({
                dataPartrepaylist: ret.data.list,
                total: ret.data.total
            });
        })

    }
    toLatterExport(event){
        event.preventDefault();
        const { startCreateTime,endCreateTime,startUpdateTime,endUpdateTime,startRepayTime,endRepayTime } = this.state;
        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiPartrepaylist,{
            page: 1,
            limit: 100000,
            create_time_before: startCreateTime,
            create_time_after: endCreateTime,
            repay_time_before: startRepayTime,
            repay_time_after: endRepayTime,
            update_time_before: startUpdateTime,
            update_time_after: endUpdateTime,
            order_id: formVal.orderId || '',
            phone: formVal.phoneNum || '',
            product_code: formVal.productName || '',
            user_id: formVal.userId || '',
            user_name: formVal.username || '',
            status: formVal.repayStatus || ''
        }).then((ret) =>{
            this.setState({
                dataHideList: ret.data.list
            },()=>{
                toExport('部分还款记录.xls');
            });
        })
    }

    toSearch() {
        this.setState({
            currentPage: DEFAULTPAGE
        });

        this.getPartrepaylist(DEFAULTPAGE);
    }

    getCreateTime(date,dateString) {

        this.setState({
            startCreateTime: dateString[0],
            endCreateTime: dateString[1]
        });
    }
    getRepayTime(date,dateString) {

        this.setState({
            startRepayTime: dateString[0],
            endRepayTime: dateString[1]
        });
    }
    getUpdateTime(date,dateString) {

        this.setState({
            startUpdateTime: dateString[0],
            endUpdateTime: dateString[1]
        });
    }

    toChangePage(page) {

        this.setState({
            currentPage: page
        });

        this.getPartrepaylist(page);

    }


    toEditItem(record) {

        this.setState({
            showModel: true,
            id: record['id']
        });

        setTimeout(()=>{
            this.props.form.setFieldsValue(record);
        },200)

    }

    getRepayForm() {

        const { getFieldDecorator } = this.props.form;

        return [
            <FormItem {...formItemLayout} label="用户名称">
                {getFieldDecorator('user_name')(
                    <Input placeholder="user_name" disabled/>
                )}
            </FormItem>,

            <FormItem {...formItemLayout} label="用户ID">
                {getFieldDecorator('user_id')(
                    <Input placeholder="user_id" disabled/>
                )}
            </FormItem>,

            <FormItem {...formItemLayout} label="订单号">
                {getFieldDecorator('order_id')(
                    <Input placeholder="order_id" disabled/>
                )}
            </FormItem>,

            <FormItem {...formItemLayout} label="总期数">
                {getFieldDecorator('duration')(
                    <Input placeholder="duration" disabled/>
                )}
            </FormItem>,

            <FormItem {...formItemLayout} label="当前期数">
                {getFieldDecorator('cur_duration')(
                    <Input placeholder="cur_duration" disabled/>
                )}
            </FormItem>,

            <FormItem {...formItemLayout} label="总金额">
                {getFieldDecorator('due_amount')(
                    <Input placeholder="due_amount" disabled/>
                )}
            </FormItem>,

            <FormItem {...formItemLayout} label="已还金额">
                {getFieldDecorator('amount')(
                    <Input placeholder="amount" />
                )}
            </FormItem>,

            <FormItem {...formItemLayout} label="状态">
                {getFieldDecorator('status')(
                    <Select style={{ width: 140 }} allowClear>
                        { REPAY_STATUS.map((val,key) =>{
                            return <Option value={ val.value }>{ val.name }</Option>
                        }) }
                    </Select>
                )}
            </FormItem>

        ]

    }

    handleOk() {

        const { amount,status,order_id,duration } = this.props.form.getFieldsValue();

        jrFetchPost(apiPartRepayEdit,{
            amount: parseInt(amount * 100),
            duration: duration,
            order_id: order_id,
            status: status,
            id: this.state.id
        }).then((ret) =>{

            this.getPartrepaylist(this.state.currentPage);
            message.success('操作成功');
            setTimeout(() =>{
                this.resetForm();
            },200)

        })


    }

    render() {

        const { dataPartrepaylist,dataHideList,dataAllProduct,total,currentPage,showModel } = this.state;

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
                title:'总分期',
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
                title:'已还金额',
                dataIndex: 'amount',
                key: 'amount'
            },

            {
                title:'状态',
                key: 'status',
                render: (record) =>{
                    {
                        let midStatus = '';
                        REPAY_STATUS.map((val,key) =>{
                            if(record['status'] === `${val.value}`) {
                                midStatus = val.name
                            }
                        });

                        return <span> { midStatus } </span>
                    }
                }
            },
            {
                title:'操作人',
                dataIndex: 'opera_name',
                key: 'opera_name'
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
            },
            {
                title:'创建日期',
                dataIndex: 'create_time',
                key: 'create_time'
            },
            {
                title:'更新时间',
                dataIndex: 'update_time',
                key: 'update_time'
            },
            {
                title: '操作',
                key: 'operate',
                render: (record,text) => {
                    return <span>
                        <a onClick={this.toEditItem.bind(this,record)}>编辑<Icon type="edit"/></a>
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
                title:'总分期',
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
                title:'已还金额',
                dataIndex: 'amount',
                key: 'amount'
            },

            {
                title:'状态',
                key: 'status',
                render: (record) =>{
                    {
                        let midStatus = '';
                        REPAY_STATUS.map((val,key) =>{
                            if(record['status'] === `${val.value}`) {
                                midStatus = val.name
                            }
                        });
                        return <span> { midStatus } </span>
                    }
                }
            },
            {
                title:'操作人',
                dataIndex: 'opera_name',
                key: 'opera_name'
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
            },
            {
                title:'创建日期',
                dataIndex: 'create_time',
                key: 'create_time'
            },
            {
                title:'更新时间',
                dataIndex: 'update_time',
                key: 'update_time'
            }
        ];
        return <div>

            <h2>部分还款记录</h2>

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
                    <FormItem label="应还日期">
                        {getFieldDecorator('repayTime')(
                            <RangePicker onChange={ this.getRepayTime.bind(this) }/>
                        )}
                    </FormItem>
                    <FormItem label="创建时间">
                        {getFieldDecorator('createTime')(
                            <RangePicker onChange={ this.getCreateTime.bind(this) }/>
                        )}
                    </FormItem>
                    <FormItem label="更新时间">
                        {getFieldDecorator('updateTime')(
                            <RangePicker onChange={ this.getUpdateTime.bind(this) }/>
                        )}
                    </FormItem>
                    <FormItem label="状态">
                        {getFieldDecorator('status')(
                            <Select style={{ width: 100 }} placeholder="请选择" allowClear>
                                { REPAY_STATUS.map((val,key) =>{
                                    return <Option value={ val.value }>{ val.name }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="客户名称">
                        {getFieldDecorator('username')(
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

                    <FormItem>
                        <Button type="primary" htmlType="submit" onClick={this.toSearch.bind(this)}>查询<Icon type="search"/></Button>
                        <Button type="primary" style={{marginLeft:'15px'}} onClick={ this.toLatterExport.bind(this) }><a style={myStyle} id="toLatterExport">导出<Icon type="export"/></a></Button>
                        <span className="ant-divider" />
                        <Button type="danger" onClick={() =>{ this.props.form.resetFields() }}>重置查询条件</Button>
                    </FormItem>
                </Form>
            </FormBox>


            <Table columns={columns} dataSource={dataPartrepaylist} pagination={false} size={this.props.tableSize}/><br/>
            <Table style={{display:'none'}} columns={columns_two} dataSource={dataHideList} pagination={false}/><br/>
            <Pagination
                style={paginationStyle}
                total={total}
                current={ currentPage }
                onChange={ this.toChangePage.bind(this) }/><br/>

            <Modal title='编辑'
                   visible={showModel}
                   onOk={this.handleOk.bind(this)}
                   onCancel={()=>{this.resetForm()}}
            >
                { showModel ? this.getRepayForm() : [] }
            </Modal>

        </div>

    }

}

const PartRepayListForm = Form.create()(PartRepayList);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(PartRepayListForm)