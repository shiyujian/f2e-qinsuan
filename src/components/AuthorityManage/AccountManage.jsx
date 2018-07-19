


const { Table,Form,Pagination,Button,Icon,Input,Modal,Select,message,Popconfirm } = Antd;
import { apiGetAllRole,apiAddUser,apiGetUserInfo,apiDeleteUser,apiUpdateUserInfo } from '../apis';
import FormBox from '../Elements/FormBox';
import BtnsToolBar from '../Elements/BtnsToolBar';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const Option = Select.Option;
const paginationStyle = {
    float: 'right',
};


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout} from '../common';

class AccountManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            showModal: false,
            isAdd: true,
            dataAllRole: [],
            dataAllUser: [],
            userId: ''

        }
    }

    componentDidMount() {

        //获取所有角色
        jrFetchGet(apiGetAllRole).then((ret) =>{
            this.setState({
                dataAllRole: ret.data['result']
            });
        });
        //获取用户列表
        this.getAllUser();

    }

    getAllUser() {

        jrFetchGet(apiGetUserInfo).then((ret) =>{

            this.setState({
                dataAllUser: ret.data['result']
            });

        })

    }

    resetForm() {
        setTimeout(() => {
            this.props.form.resetFields();
        }, 200);
    }

    toAddAcount() {

        this.setState({
            showModal: true,
            isAdd: true
        });
    }

    toEditItem(record) {

        this.setState({
            showModal: true,
            isAdd: false,
            userId: record['id']
        });

        setTimeout(()=>{
            this.props.form.setFieldsValue(record);
        },200)

    }

    toDeleteItem(record) {

        jrFetchPost(apiDeleteUser,{
            user_id: record['id']
        }).then(()=>{
            this.getAllUser();
        })

    }

    handleOk() {

        const formVal = this.props.form.getFieldsValue();
        const { isAdd,userId } = this.state;

        if(formVal.password !== formVal.confirm){
            message.error("两次输入的密码不一致");
            return false;
        }

        let postData = {
            nick_name: formVal.nick_name || '',
            password: formVal.password || '',
            role_id: formVal.role_id || '',
            user_name: formVal.user_name || ''
        };
        let postUrl = isAdd ? apiAddUser : apiUpdateUserInfo;

        this.props.form.validateFields((err, values) => {
            if (err) {
                message.info("标记*的为必填项哦");
            }else{

                if(!isAdd){
                    Object.assign(postData,{user_id: userId})
                }

                jrFetchPost(postUrl,postData).then((ret) =>{
                    this.getAllUser();
                    message.success("操作成功");
                    this.setState({
                        showModal: false
                    });
                });
            }
        });





    }


    getForm() {

        const { getFieldDecorator } = this.props.form;
        const { dataAllRole } = this.state;

        return [
            <FormItem {...formItemLayout} label="昵称">
                { getFieldDecorator('nick_name', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入用户名"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="用户名">
                { getFieldDecorator('user_name', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入用户名"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="密码">
                { getFieldDecorator('password', {
                    rules: [{required: true},{min: 6,message: '密码长度必须大于6位'}]
                })(
                    <Input placeholder="请输入密码" type='password'/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="确认密码">
                { getFieldDecorator('confirm', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请确认密码" type='password'/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="工作组">
                { getFieldDecorator('role_id', {
                    rules: [{required: true}]
                })(
                    <Select style={{ width: 120 }} placeholder="请选择">
                        { dataAllRole.map((val,key) =>{
                            return <Option value={ val.id }>{ val.role_name }</Option>
                        }) }
                    </Select>
                ) }
            </FormItem>,
        ];


    }



    render() {

        const columns = [
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '用户组',
                dataIndex: 'role_name',
                key: 'role_name'
            },
            {
                title: '操作',
                key: 'operate',
                render: (record) => {
                    return <span>
                        <a onClick={this.toEditItem.bind(this,record)}>编辑<Icon type="edit"/></a>
                        &nbsp;&nbsp;&nbsp;
                        <Popconfirm title="确认删除？" onConfirm={this.toDeleteItem.bind(this,record)} okText="Yes" cancelText="No">
                            <a><Icon type="delete"/></a>
                        </Popconfirm>
                    </span>
                }
            },
        ];

        const { isAdd,showModal,dataAllUser } = this.state;


        return <div>
            <h2>账号管理</h2>

            <BtnsToolBar>
                <Button type='primary' onClick={this.toAddAcount.bind(this)}>新增账号<Icon type="plus-circle" /></Button>
            </BtnsToolBar>

            <Table columns={columns} dataSource={dataAllUser} size={this.props.tableSize}/>

            <Modal title={ isAdd ? '新增' : '编辑' }
                   visible={ showModal }
                   onOk={this.handleOk.bind(this)}
                   onCancel={ () =>{
                       this.resetForm();
                       this.setState({
                           showModal: false
                       });
                   } }
            >
                { showModal ? this.getForm() : [] }
            </Modal>
        </div>

    }

}

const AccountManageForm = Form.create()(AccountManage);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(AccountManageForm)