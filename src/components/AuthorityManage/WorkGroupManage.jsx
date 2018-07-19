


const { Table,Form,Pagination,Button,Icon,Input,Modal,message,Popconfirm } = Antd;
const { Link } = ReactRouter;
import { apiGetAllRole,apiAddRole,apiDeleteRole } from '../apis';
import { getRouteString } from '../common';
import FormBox from '../Elements/FormBox';
import BtnsToolBar from '../Elements/BtnsToolBar';
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

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout} from '../common';

class WorkGroupManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            showModal: false,
            isAdd: true,
            dataAllRole: [],
            roleId: ''

        }
    }

    componentDidMount() {

        //获取所有角色
        this.getAllRoleList();

    }

    getAllRoleList() {
        jrFetchGet(apiGetAllRole).then((ret) =>{
            this.setState({
                dataAllRole: ret.data['result']
            });
        })
    }

    resetForm() {
        setTimeout(() => {
            this.props.form.resetFields();
        }, 200);
    }

    toAddGroup() {

        this.setState({
            showModal: true,
            isAdd: true
        });

    }

    toEditItem(record) {

        setTimeout(() =>{

            this.props.form.setFieldsValue(record);

        },200);


        this.setState({
            showModal: true,
            roleId: record['id'],
            isAdd: false
        });

    }


    toDeleteItem(record) {

        jrFetchGet(apiDeleteRole,{
            role_id: record.id
        }).then((ret) =>{

            this.getAllRoleList();

        })

    }

    getForm() {

        const { getFieldDecorator } = this.props.form;
        return [
            <FormItem {...formItemLayout} label="工作组名称">
                { getFieldDecorator('role_name', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入工作组名"/>
                ) }
            </FormItem>,
        ];

    }

    handleOk() {

        const formVal = this.props.form.getFieldsValue();

        const { isAdd,roleId } = this.state;

        let postData = {};

        switch (isAdd) {
            case true:
                postData = {
                    role_level: 1,
                    role_name: formVal.role_name || ''
                };
                break;
            default:
                postData = {
                    role_level: 1,
                    role_name: formVal.role_name || '',
                    id: roleId
                };
        }

        jrFetchPost(apiAddRole,postData).then((ret) =>{

            this.getAllRoleList();

            message.success("操作成功");

            this.setState({
                showModal: false
            });

        })

    }



    render() {

        const { dataAllRole,isAdd,showModal } = this.state;

        const columns = [
            {
                title: '工作组名称',
                dataIndex: 'role_name',
                key: 'role_name'
            },
            {
                title: '操作',
                key: 'operate',
                render: (record,text) => {
                    return <span>
                        <a><Link to={ getRouteString(this.props.routes,2)+'MenuManage/'+record['id'] }><Button type="dashed">权限编辑</Button></Link></a>
                        &nbsp;&nbsp;&nbsp;
                        <a onClick={this.toEditItem.bind(this,record)}>编辑<Icon type="edit"/></a>
                        &nbsp;&nbsp;&nbsp;
                        <Popconfirm title="确认删除？" okText="Yes" cancelText="No" onConfirm={this.toDeleteItem.bind(this,record)}>
                            <a><Icon type="delete"/></a>
                        </Popconfirm>
                    </span>
                }
            },

        ];


        return <div>

            <h2>工作组管理</h2>

            <BtnsToolBar>
                <Button type='primary' onClick={this.toAddGroup.bind(this)}>新增工作组<Icon type="plus-circle" /></Button>
            </BtnsToolBar>

            <Table columns={columns} dataSource={ dataAllRole } size={this.props.tableSize}/>

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

const WorkGroupManageForm = Form.create()(WorkGroupManage);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(WorkGroupManageForm)