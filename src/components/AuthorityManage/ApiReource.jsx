


const { Table,Form,Pagination,Button,Icon,Input,Modal,message,Popconfirm,Select } = Antd;
import { apiGetAllRole,apiGetAllResource,apiAddResource,apiUpdateResource,apiDeleteResource } from '../apis';
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

class ApiReource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            showModal: false,
            isAdd: true,
            dataAllResource: [],
            resourceId: '',
            dataAllRole: []

        }
    }

    componentDidMount() {

        this.getAllResource();
        //获取所有角色
        jrFetchGet(apiGetAllRole).then((ret) =>{
            this.setState({
                dataAllRole: ret.data['result']
            });

        })

    }

    getAllResource() {
        jrFetchGet(apiGetAllResource).then((ret) =>{
            this.setState({
                dataAllResource: ret.data['result']
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
            isAdd: true,
        });

    }

    toEditItem(record) {

        console.log(record);

        setTimeout(() =>{

            this.props.form.setFieldsValue(record);

        },200);


        this.setState({
            showModal: true,
            isAdd: false,
            resourceId: record['resource_id']
        });

    }

    toDeleteItem(record) {

        jrFetchPost(apiDeleteResource,{
            resource_id: record['resource_id']
        }).then(() =>{

            message.success("删除成功");

            this.getAllResource();
        });

    }

    getForm() {

        const { getFieldDecorator } = this.props.form;

        return [
            <FormItem {...formItemLayout} label="接口名称">
                { getFieldDecorator('resource_name', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入接口名称"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="接口地址">
                { getFieldDecorator('resource_url', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入接口地址"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="权限分配">
                { getFieldDecorator('role_id', {
                    rules: [{required: true}]
                })(
                    <Select
                        multiple
                        style={{ width: '100%' }}
                        placeholder="Please select">

                        { this.getOption() }

                    </Select>
                ) }
            </FormItem>,
        ];

    }

    getOption(){

        let midArr = [];

        const { dataAllRole } = this.state;

        { dataAllRole && dataAllRole.forEach((val) =>{

             midArr.push(<Option value={val.id}>{ val.role_name }</Option>);

        }) }

        return midArr;


    }

    handleOk() {

        const formVal = this.props.form.getFieldsValue();

        const { isAdd,resourceId } = this.state;

        let postData = {

            resource_action: 'GET',
            resource_name: formVal.resource_name || '',
            resource_url: formVal.resource_url || '',
            role_id: formVal.role_id

        };
        let postUrl = '';

        this.props.form.validateFields((err, values) => {
            if (err) {
                message.info("标记*的为必填项哦");
            }else{
                switch (isAdd){
                    case true:
                        postUrl = apiAddResource;
                        break;
                    default:
                        Object.assign(postData,{ resource_id: resourceId });
                        postUrl = apiUpdateResource
                }

                jrFetchPost(postUrl,postData).then((ret) =>{

                    message.success(ret.message);

                    this.getAllResource();

                    setTimeout(()=>{
                        this.setState({
                            showModal: false
                        });
                    },100);

                })
            }
        });



    }



    render() {

        const { dataAllResource,isAdd,showModal } = this.state;

        const columns = [
            {
                title: '接口名称',
                dataIndex: 'resource_name',
                key: 'resource_name'
            },
            {
                title: '接口地址',
                dataIndex: 'resource_url',
                key: 'resource_url'
            },
            {
                title: '权限分配',
                dataIndex: 'role_name',
                key: 'role_name'
            },
            {
                title: '操作',
                key: 'operate',
                render: (record,text) => {
                    return <span>
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

            <h2>接口权限</h2>

            <BtnsToolBar>
                <Button type='primary' onClick={this.toAddGroup.bind(this)}>新增<Icon type="plus-circle" /></Button>
            </BtnsToolBar>

            <Table columns={columns} dataSource={dataAllResource} size={this.props.tableSize}/>

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

const ApiReourceForm = Form.create()(ApiReource);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(ApiReourceForm)