const { Table,Form,Pagination,Button,Icon,Input } = Antd;
import { apiBankCardDataSearch } from '../../apis';
import FormBox from '../../Elements/FormBox';
const {connect} = ReactRedux;
const FormItem = Form.Item;

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout} from '../../common';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class BankCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataBankCardList: [],
        }
    }

    componentDidMount() {

        // this.getBankCardList();

    }

    getBankCardList() {

        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiBankCardDataSearch,{
            open_id: formVal.userId || '',
            user_name: formVal.username || '',
            phone: formVal.phoneNumber || '',
        }).then((ret) =>{
            this.setState({
                dataBankCardList: ret.data.result,
            });
        }).catch((error) =>{
            console.log(error)
        })

    }


    render() {

        const { dataBankCardList } = this.state;

        const { getFieldDecorator } = this.props.form;

        const columns = [
            {
                title:'用户ID',
                dataIndex: 'user_id',
                key: 'user_id'
            },
            {
                title:'客户名称',
                dataIndex: 'full_name',
                key: 'full_name'
            },
            {
                title:'手机号',
                dataIndex: 'bank_mobile',
                key: 'bank_mobile'
            },
            {
                title:'绑定账户银行',
                dataIndex: 'bank_name',
                key: 'bank_name'
            },
            {
                title:'银行卡号',
                dataIndex: 'bank_no',
                key: 'bank_no'
            },
            {
                title:'产品名称',
                dataIndex: 'product_code',
                key: 'product_code'
            },
            {
                title:'申请时间',
                dataIndex: 'create_time',
                key: 'create_time'
            },
        ];

        return <div>

            <h2>银行卡管理</h2>

            <FormBox>
                <Form layout="inline">
                    <FormItem label="用户ID">
                        {getFieldDecorator('userId')(
                            <Input placeholder="请输入用户ID" style={{width: 260}}/>
                        )}
                    </FormItem>
                    <FormItem label="客户名称">
                        {getFieldDecorator('username')(
                            <Input placeholder="请输入客户名称" />
                        )}
                    </FormItem>
                    <FormItem label="手机号">
                        {getFieldDecorator('phoneNumber')(
                            <Input placeholder="请输入手机号" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" onClick={() =>{this.getBankCardList()}}>查询<Icon type="search"/></Button>
                    </FormItem>
                </Form>
            </FormBox>


            <Table columns={columns} dataSource={dataBankCardList} size={this.props.tableSize}/><br/>

        </div>

    }

}

const BankCardForm = Form.create()(BankCard);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(BankCardForm)