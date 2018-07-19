const { Table,Form,Pagination,Button,Icon,Input } = Antd;
import { apiUserSearch } from '../../apis';
import FormBox from '../../Elements/FormBox';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const paginationStyle = {
    float: 'right',
};

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout} from '../../common';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataUserList: [],
        }
    }

    componentDidMount() {

        // this.getUserList();

    }

    getUserList() {

        const formVal = this.props.form.getFieldsValue();

        jrFetchGet(apiUserSearch,{
            open_id: formVal.userId || '',
            user_name: formVal.username || '',
            phone: formVal.phoneNumber || '',
            id_card: formVal.idNumber || '',
        }).then((ret) =>{
            this.setState({
                dataUserList: ret.data.result,
            });
        })

    }

    render() {

        const { dataUserList } = this.state;

        const { getFieldDecorator } = this.props.form;

        const columns = [
            {
                title:'用户ID',
                dataIndex: 'open_id',
                key: 'open_id'
            },
            {
                title:'客户名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title:'手机号',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title:'身份证号',
                dataIndex: 'id_card',
                key: 'id_card'
            },

        ];

        return <div>

            <h2>客户管理</h2>

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
                    <FormItem label="身份证号">
                        {getFieldDecorator('idNumber')(
                            <Input placeholder="请输入身份证号" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" onClick={() =>{this.getUserList()}}>查询<Icon type="search"/></Button>
                    </FormItem>
                </Form>
            </FormBox>


            <Table columns={columns} dataSource={dataUserList}  size={this.props.tableSize}/><br/>

        </div>

    }

}

const CustomerForm = Form.create()(Customer);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(CustomerForm)