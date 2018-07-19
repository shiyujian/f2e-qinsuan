

const { Table,Form,Pagination,Button,Icon,Input,Select,DatePicker } = Antd;
const Option = Select.Option;
const { RangePicker } = DatePicker;
import { apiGetorderlist,apiGetAllProduct } from '../../apis';
import { ORDER_STATUS } from '../../consts';
import FormBox from '../../Elements/FormBox';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const paginationStyle = {
    float: 'right',
};

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout,toExport,myStyle} from '../../common';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class OrderList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataOrderList: [],
            dataHideList: [],
            dataAllProduct: [],
            total: '',
            currentPage: DEFAULTPAGE,
            loan_time_after: '',
            loan_time_before: '',

            apply_time_after: '',
            apply_time_before: ''
        }
    }


    componentDidMount() {

        this.getOrderList(DEFAULTPAGE);
        this.getAllProduct();
        
    }

    getAllProduct() {

        jrFetchGet(apiGetAllProduct).then((ret) =>{
            this.setState({
                dataAllProduct: ret.data.result
            });
        })

    }

    getOrderList(page) {

        const formVal = this.props.form.getFieldsValue();

        const { loan_time_after,loan_time_before,apply_time_after,apply_time_before } = this.state;

        jrFetchGet(apiGetorderlist,{
            page: page,
            limit: 10,
            loan_time_after: loan_time_after,
            loan_time_before: loan_time_before,
            apply_time_after: apply_time_after,
            apply_time_before: apply_time_before,
            order_id: formVal.orderId || '',
            order_status: formVal.orderStatus || '',
            phone: formVal.phoneNum || '',
            product_code: formVal.productName || '',
            stages: formVal.stage || '',
            user_name: formVal.userName || ''
        }).then((ret) =>{
            this.setState({
                dataOrderList: ret.data.list,
                total: ret.data.total
            });
        })

    }
    toLatterExport(event){
        event.preventDefault();
        const formVal = this.props.form.getFieldsValue();

        const { loan_time_after,loan_time_before,apply_time_after,apply_time_before } = this.state;

        jrFetchGet(apiGetorderlist,{
            page: 1,
            limit: 100000,
            loan_time_after: loan_time_after,
            loan_time_before: loan_time_before,
            apply_time_after: apply_time_after,
            apply_time_before: apply_time_before,
            order_id: formVal.orderId || '',
            order_status: formVal.orderStatus || '',
            phone: formVal.phoneNum || '',
            product_code: formVal.productName || '',
            stages: formVal.stage || '',
            user_name: formVal.userName || ''
        }).then((ret) =>{
            this.setState({
                dataHideList: ret.data.list
            },()=>{
                toExport('订单.xls');
            });
        })
    }

    toChangePage(page) {

        this.setState({
            currentPage: page
        });

        this.getOrderList(page);

    }

    toSearch() {
        this.setState({
            currentPage: DEFAULTPAGE
        });

        this.getOrderList(DEFAULTPAGE);
    }

    searchloanTime(date,dateString) {

        this.setState({
            loan_time_before: dateString[0],
            loan_time_after: dateString[1],
        })

    }

    searchApplyTime(date,dateString) {

        this.setState({
            apply_time_before: dateString[0],
            apply_time_after: dateString[1],
        })

    }

    toOrderDetail(record) {

        let order_id = record['order_id'];

        window.open(`#/MainView/Transaction/OrderDetail?order_id=${order_id}`);

        // window.location.href = `#/MainView/Transaction/OrderDetail?order_id=${order_id}`;
    }

    render() {

        const { dataOrderList,dataHideList,dataAllProduct,total,currentPage } = this.state;

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
                title:'产品编号',
                dataIndex: 'product_id',
                key: 'product_id'
            },
            {
                title:'手机号',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title:'用户名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title:'期数',
                dataIndex: 'loan_stages',
                key: 'loan_stages'
            },
            {
                title:'放款金额',
                dataIndex: 'loan_money',
                key: 'loan_money'
            },
            {
                title:'申请时间',
                dataIndex: 'create_time',
                key: 'create_time'
            },
            {
                title:'放款时间',
                dataIndex: 'loan_time',
                key: 'loan_time'
            },
            {
                title:'更新时间',
                dataIndex: 'update_time',
                key: 'update_time'
            },
            {
                title:'订单状态',
                dataIndex: 'str',
                key: 'str'
            },

            {
                title: '操作',
                key: 'operate',
                render: (record,text) => {
                    return <span>
                        <Button type='primary' onClick={this.toOrderDetail.bind(this,record)}>查看详情<Icon type="right" /></Button>
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
                title:'产品编号',
                dataIndex: 'product_id',
                key: 'product_id'
            },
            {
                title:'手机号',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title:'用户名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title:'期数',
                dataIndex: 'loan_stages',
                key: 'loan_stages'
            },
            {
                title:'放款金额',
                dataIndex: 'loan_money',
                key: 'loan_money'
            },
            {
                title:'申请时间',
                dataIndex: 'create_time',
                key: 'create_time'
            },
            {
                title:'放款时间',
                dataIndex: 'loan_time',
                key: 'loan_time'
            },
            {
                title:'更新时间',
                dataIndex: 'update_time',
                key: 'update_time'
            },
            {
                title:'订单状态',
                dataIndex: 'str',
                key: 'str'
            }
        ];
        return <div>

            <h2>订单管理</h2>

            <FormBox>
                <Form layout="inline">
                    <FormItem label="产品名称">
                        {getFieldDecorator('productName')(
                            <Select style={{ width: 100 }} placeholder="请选择">
                                { dataAllProduct.length && dataAllProduct.map((item) =>{
                                    return <Option value={ item['code'] }>{ item['name'] }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="订单状态">
                        {getFieldDecorator('orderStatus')(
                            <Select style={{ width: 140 }} placeholder="请选择" allowClear>
                                { ORDER_STATUS.map((val,key) =>{
                                    return <Option value={ val.value }>{ val.name }</Option>
                                }) }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="放款时间">
                        {getFieldDecorator('loanTime')(
                            <RangePicker onChange={ this.searchloanTime.bind(this) }/>
                        )}
                    </FormItem>
                    <FormItem label="申请时间">
                        {getFieldDecorator('applyTime')(
                            <RangePicker onChange={ this.searchApplyTime.bind(this) }/>
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
                    <FormItem label="订单号">
                        {getFieldDecorator('orderId')(
                            <Input placeholder="请输入订单号" />
                        )}
                    </FormItem>
                    <FormItem label="期数">
                        {getFieldDecorator('stage')(
                            <Input placeholder="请输入期数" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={ this.toSearch.bind(this) }>查询<Icon type="search"/></Button>
                        <Button type="primary" style={{marginLeft:'15px'}} onClick={ this.toLatterExport.bind(this) }><a style={myStyle} id="toLatterExport">导出<Icon type="export"/></a></Button>
                        <span className="ant-divider" />
                        <Button type="danger" onClick={() =>{ this.props.form.resetFields() }}>重置查询条件</Button>
                    </FormItem>
                </Form>
            </FormBox>


            <Table columns={columns} dataSource={dataOrderList} pagination={false} size={this.props.tableSize}/><br/>
            <Table style={{display:'none'}} columns={columns_two} dataSource={dataHideList} pagination={false}/><br/>
            <Pagination
                style={paginationStyle}
                total={total}
                current={ currentPage }
                onChange={ this.toChangePage.bind(this) }/><br/>
        </div>

    }

}

const OrderListForm = Form.create()(OrderList);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(OrderListForm)