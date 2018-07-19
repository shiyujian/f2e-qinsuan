



const { Table,Form,Pagination,Button,Icon,Input } = Antd;
import { apiGetorderallinfo,apiGetSingleRepayRecord } from '../../apis';
import { REPAY_FLAG } from '../../consts';
import FormBox from '../../Elements/FormBox';
import BtnsToolBar from '../../Elements/BtnsToolBar';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const paginationStyle = {
    float: 'right',
};


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout} from '../../common';

class RepayList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataOrderallinfo: [],
            dataOrderallinfoDetail: [],
            currentPage: DEFAULTPAGE,
            showMain: true,

            dataSingleRepayRecord: []
        }
    }

    componentDidMount() {

        this.getorderallinfo();

    }


    getorderallinfo(){

        const { order_id } = this.props.location['query'];

        jrFetchGet(apiGetorderallinfo,{
            order_id: order_id
        }).then((ret) =>{
            this.setState({
                dataOrderallinfo: ret.data,
                dataOrderallinfoDetail: ret.data['detail']
            });
        })

    }


    toGoback() {
        this.setState({
            showMain: true,
        });
    }

    toRepayRecord(record) {

        const { order_id } = this.props.location['query'];

        //获取指定分期的还款记录
        jrFetchGet(apiGetSingleRepayRecord,{
            duration: record['Duration'],
            order_id: order_id
        }).then((ret) =>{
            console.log(ret);
            this.setState({
                dataSingleRepayRecord: ret.data['list'],
            });
        });

        this.setState({
            showMain: false
        });

    }

    getMain() {

        const { dataOrderallinfo,dataOrderallinfoDetail } = this.state;

        let midArr = [];

        midArr.push(dataOrderallinfo);

        const columns = [
            {
                title:'用户ID',
                dataIndex: 'user_i_d',
                key: 'user_i_d'
            },
            {
                title:'订单号',
                dataIndex: 'order_i_d',
                key: 'order_i_d'
            },
            {
                title:'手机号',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title:'客户名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title:'产品名称',
                dataIndex: 'product_i_d',
                key: 'product_i_d'
            },
            {
                title:'期数',
                dataIndex: 'loan_stages',
                key: 'loan_stages'
            },
            {
                title:'应还金额',
                dataIndex: 'amount',
                key: 'amount	'
            },
            {
                title:'本金',
                dataIndex: 'capital',
                key: 'capital'
            },
            {
                title:'利息',
                dataIndex: 'interest',
                key: 'interest'
            },
            {
                title:'服务费',
                dataIndex: 'service_charge',
                key: 'service_charge'
            },
            {
                title:'手续费',
                dataIndex: 'poundage',
                key: 'poundage'
            },
            {
                title:'滞纳金',
                dataIndex: 'late_fee',
                key: 'late_fee'
            },
            {
                title: '违约金',
                dataIndex: 'liquidated_damages',
                key: 'liquidated_damages',

            }

        ];

        const columns_detail = [
            {
                title: '期数',
                dataIndex: 'Duration',
                key: 'Duration',

            },{
                title: '分期流水',
                dataIndex: 'Id',
                key: 'Id',

            },{
                title: '应还金额',
                dataIndex: 'DueAmount',
                key: 'DueAmount',

            },{
                title: '本金',
                dataIndex: 'DueCapital',
                key: 'DueCapital',

            },{
                title: '利息',
                dataIndex: 'DueInterest',
                key: 'DueInterest',

            },{
                title: '服务费',
                dataIndex: 'DueServiceCharge',
                key: 'DueServiceCharge',

            },{
                title: '手续费',
                dataIndex: 'DuePoundage',
                key: 'DuePoundage',

            },{
                title: '滞纳金',
                dataIndex: 'DueLateFee',
                key: 'DueLateFee',

            },{
                title: '状态',
                key: 'Status',
                render: (record) =>{
                    {
                        let midStatus = '';
                        REPAY_FLAG.map((val,key) =>{
                            if(record['Status'] === val.value) {
                                midStatus = val.name
                            }
                        });

                        return <span> { midStatus } </span>
                    }
                }

            },{
                title: '还款日',
                dataIndex: 'DueRepayTime',
                key: 'DueRepayTime',

            },{
                title: '实际还款日',
                dataIndex: 'ActualRepayTime',
                key: 'ActualRepayTime',

            },{
                title: '逾期标识',
                dataIndex: 'LateDays',
                key: 'LateDays',
            },{
                title: '还款记录',
                key: 'record',
                render: (record)=>{
                    return <span>
                        <Button onClick={this.toRepayRecord.bind(this,record)}>还款记录</Button>
                    </span>
                }
            }
        ];

        return <div>

            <h2>还款计划总览</h2>

            <FormBox>
                <FormItem>
                    <Button type="primary" style={{ float: 'right' }} onClick={() =>{window.history.go(-1)}}>返回上一页面<Icon type="export" /></Button>
                </FormItem>
            </FormBox>

            <Table columns={columns} dataSource={midArr} pagination={false} size={this.props.tableSize}/><br/>

            <h3>分期信息</h3><br/>

            <Table columns={columns_detail} dataSource={dataOrderallinfoDetail} pagination={false} size={this.props.tableSize}/>

        </div>

    }

    getDetail() {

        const { dataSingleRepayRecord } = this.state;

        const detailColumns = [

            {
                title:'用户ID',
                dataIndex: 'UserId',
                key: 'UserId'
            },
            {
                title:'还款流水',
                dataIndex: 'TransNo',
                key: 'TransNo',
            },
            {
                title:'客户名称',
                dataIndex: 'UserName',
                key: 'UserName'
            },
            {
                title:'当前分期',
                dataIndex: 'Duration',
                key: 'Duration'
            },
            {
                title:'还款金额',
                dataIndex: 'RepayAmount',
                key: 'RepayAmount'
            },
            {
                title:'还款渠道',
                dataIndex: 'RepayWay',
                key: 'RepayWay'
            },
            {
                title:'还款时间',
                dataIndex: 'RepayTime',
                key: 'RepayTime'
            },
            {
                title:'状态',
                key: 'Status',
                dataIndex: 'Status',
            },
            {
                title:'失败原因',
                dataIndex: 'FailText',
                key: 'FailText'
            },
            {
                title:'还款标识',
                dataIndex: 'Flag',
                key: 'Flag'
            },
            {
                title:'操作人	',
                dataIndex: 'OperaUser',
                key: 'OperaUser'
            },

        ];

        return <div>

            <h3>还款记录</h3>

            <BtnsToolBar>
                <Button type='primary' onClick={this.toGoback.bind(this)}>返回<Icon type="rollback" /></Button>
            </BtnsToolBar>

            <Table columns={detailColumns} pagination={false} dataSource={dataSingleRepayRecord} size={this.props.tableSize}/>
        </div>
    }

    render() {

        const { showMain } = this.state;

        return <div className="animated-fade-in">
            { showMain ? this.getMain() : this.getDetail() }
        </div>

    }

}

const RepayListForm = Form.create()(RepayList);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(RepayListForm)