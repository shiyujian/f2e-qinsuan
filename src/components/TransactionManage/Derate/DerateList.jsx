
const { Table,Form,Pagination,Button,Icon,Input,Select,DatePicker } = Antd;
import {apiGetorderlist, apiReductionList,apiGetAllProduct} from '../../apis';
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
import { REDUCTION_TYPE} from '../../consts';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class DerateList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataReductionList: [],
            dataHideList: [],
            dataAllProduct: [],
            total: '',
            currentPage: DEFAULTPAGE,

            startOperateTime: '',
            endOperateTime: '',
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

        const { startOperateTime,endOperateTime } = this.state;
        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiReductionList,{
            page: page,
            limit: 10,
            operate_time_before: startOperateTime,
            operate_time_after: endOperateTime,
            product_code: formVal.productName || '',
            user_name: formVal.username || '',
            phone: formVal.phoneNum || '',
            user_id: formVal.userId || '',
            order_id: formVal.orderId || ''
        }).then((ret) =>{
            this.setState({
                dataReductionList: ret.data.list,
                total: ret.data.total
            });
        })

    }
    toLatterExport(event){
        event.preventDefault();
        const { startOperateTime,endOperateTime } = this.state;
        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiReductionList,{
            page: 1,
            limit: 100000,
            operate_time_before: startOperateTime,
            operate_time_after: endOperateTime,
            product_code: formVal.productName || '',
            user_name: formVal.username || '',
            phone: formVal.phoneNum || '',
            user_id: formVal.userId || '',
            order_id: formVal.orderId || ''
        }).then((ret) =>{
            this.setState({
                dataHideList: ret.data.list
            },()=>{
                toExport('减免单.xls');
            });
        })
    }

    getOperateTime(date,dateString) {

        this.setState({
            startOperateTime: dateString[0],
            endOperateTime: dateString[1]
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

    render() {

        const { dataReductionList,dataHideList,dataAllProduct,total,currentPage } = this.state;

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
                title:'减免总金额',
                dataIndex: 'reduction',
                key: 'reduction'
            },
            {
                title:'操作人',
                dataIndex: 'reduction_opera_name',
                key: 'reduction_opera_name'
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
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
                title:'减免总金额',
                dataIndex: 'reduction',
                key: 'reduction'
            },
            {
                title:'操作人',
                dataIndex: 'reduction_opera_name',
                key: 'reduction_opera_name'
            },
            {
                title:'应还日期',
                dataIndex: 'due_repay_time',
                key: 'due_repay_time'
            }
        ];

        return <div>

            <h2>减免管理</h2>

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
                    <FormItem label="减免类型">
                        {getFieldDecorator('reduction_type')(
                            <Select style={{ width: 100 }} placeholder="请选择" allowClear>
                                { REDUCTION_TYPE.map((val,key) =>{
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
                    <FormItem label="操作时间">
                        {getFieldDecorator('operaTime')(
                            <RangePicker onChange={ this.getOperateTime.bind(this) }/>
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


            <Table columns={columns} dataSource={dataReductionList} pagination={false} size={this.props.tableSize}/><br/>
            <Table style={{display:'none'}} columns={columns_two} dataSource={dataHideList} pagination={false}/><br/>

            <Pagination
                style={paginationStyle}
                total={total}
                current={ currentPage }
                onChange={ this.toChangePage.bind(this) }/><br/>
        </div>

    }

}

const DerateListForm = Form.create()(DerateList);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(DerateListForm)