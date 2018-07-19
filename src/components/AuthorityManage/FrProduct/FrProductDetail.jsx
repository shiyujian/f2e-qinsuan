



const { Table,Form,Pagination,Button,Icon,Input,Modal,Select,message,Popconfirm,Radio } = Antd;
import { apiGetChannelList,apiGetProductItmByCode,apiDeleteProductItem,apiUpdateProductItem,apiAddProductItem,apiAddFeeRate,apiGetFeeNameAndCode,apiGetFeeRate,apiDeleteFeeRate} from '../../apis';
import FormBox from '../../Elements/FormBox';
import BtnsToolBar from '../../Elements/BtnsToolBar';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
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

class FrProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            channelList: [],
            dataProductItem: [],
            showModal: false,
            showModalTwo: false,
            isAdd: true,
            productId: '',
            costDetailValue: [{id:'',title: 'INTEREST', name: '利息',desc: '',time:''}],
            reduction_type: [],
            reduction: null
        }
    }

    componentDidMount() {

        this.getProductItemList();

        this.getFeeNameAndCode();

        this.getChannelList();
    }

    getChannelList(){
        jrFetchPost(apiGetChannelList).then((ret)=>{
            this.setState({
                channelList: ret.data['List']
            })
        })
    }

    getFeeNameAndCode(){
        jrFetchPost(apiGetFeeNameAndCode).then((ret)=>{
            this.setState({
                reduction: ret.data.result,
                reduction_type: [{
                    fee_code: 'CONSULTING_FEE',
                    fee_name: ret.data.result['CONSULTING_FEE']
                },{
                    fee_code: 'INTEREST',
                    fee_name: ret.data.result['INTEREST']
                },{
                    fee_code: 'LATE_FEE',
                    fee_name: ret.data.result['LATE_FEE']
                },{
                    fee_code: 'LIQUIDATED_DAMAGES',
                    fee_name: ret.data.result['LIQUIDATED_DAMAGES']
                },{
                    fee_code: 'MANAGEMENT_EXPENSE',
                    fee_name: ret.data.result['MANAGEMENT_EXPENSE']
                },{
                    fee_code: 'POUNDAGE',
                    fee_name: ret.data.result['POUNDAGE']
                },{
                    fee_code: 'SERVICE_CHARGE',
                    fee_name: ret.data.result['SERVICE_CHARGE']
                }]
            })
        })
    }

    getProductItemList() {

        const {code} = this.props.location['query'];

        jrFetchGet(apiGetProductItmByCode,{
            product_code: code
        }).then((ret) =>{
            this.setState({
                dataProductItem: ret.data.result
            });
        })

    }


    resetForm() {
        setTimeout(() => {
            this.props.form.resetFields();
        }, 200);
    }

    toAddItem() {

        this.setState({
            showModal: true,
            isAdd: true
        });
    }

    toEditItem(record) {

        this.setState({
            showModal: true,
            isAdd: false,
            productId: record['id']
        });

        setTimeout(()=>{
            this.props.form.setFieldsValue(record);
        },200)

    }

    toDeleteItem(record) {

        jrFetchPost(apiDeleteProductItem,{
            product_item_id: record['id']
        }).then((ret) =>{
            message.success("删除成功");
            setTimeout(()=>{
                this.getProductItemList()
            },200)
        })

    }

    handleOk() {

        const formVal = this.props.form.getFieldsValue();
        const { isAdd,productId } = this.state;
        const {code} = this.props.location['query'];

        let postData = {
            charge_structure: formVal.charge_structure || '',
            funds_channel: formVal.funds_channel || '',
            item_description: formVal.item_description || '',
            item_level: formVal.item_level || '',
            item_name: formVal.item_name || '',
            product_code: code,
            repay_type: formVal.repay_type || '',
        };

        if(!isAdd){
            Object.assign(postData,{product_item_id: productId})
        }

        let postUrl = isAdd ? apiAddProductItem : apiUpdateProductItem;

        this.props.form.validateFields((err, values) => {
            if (err) {
                message.info("标记*的为必填项哦");
            }else{
                jrFetchPost(postUrl,postData).then((ret) =>{

                    this.getProductItemList();

                    message.success("操作成功");

                    setTimeout(() =>{
                        this.setState({
                            showModal: false
                        });
                    });

                })
            }
        });


    }


    getForm() {

        const { getFieldDecorator } = this.props.form;
        const { dataProductItem, channelList } = this.state;

        return [
            <FormItem {...formItemLayout} label="小类名称">
                { getFieldDecorator('item_name', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入小类名称"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="支付渠道">
                { getFieldDecorator('funds_channel', {
                    rules: [{required: true}]
                })(
                    <Select style={{ width: 100 }} placeholder="请选择">
                        { channelList.map((item)=>{
                            return <Option value={item['Id']}>{item['ChannelName']}</Option>
                        }) }
                    </Select>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="用户风险等级">
                { getFieldDecorator('item_level', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入用户风险等级"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="还款方式">
                { getFieldDecorator('repay_type', {
                    rules: [{required: true}]
                })(
                    <RadioGroup>
                        <Radio value='等本等息'>等本等息</Radio>
                    </RadioGroup>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="收费结构">
                { getFieldDecorator('charge_structure', {
                    rules: [{required: true}]
                })(
                    <RadioGroup>
                        <Radio value='服务费后置'>服务费后置</Radio>
                    </RadioGroup>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="产品描述">
                { getFieldDecorator('item_description', {
                    rules: [{required: true}]
                })(
                    <Input type='textarea' placeholder="请确认产品描述"/>
                ) }
            </FormItem>,
        ];


    }

    goBack() {

        window.history.go(-1);

    }
    toEditCost(record){
        let arr = [];
        
        jrFetchPost(apiGetFeeRate,{product_item_id: record['id']}).then((ret) =>{
            
            if(ret.data.result){
                ret.data.result.map((item,index)=>{
                    const obj = {id:item.id,title: item.fee_code, name: item.fee_name, desc: item.fee_rate,time: item.unit};
                    arr.push(obj);
                })
            }
            this.setState({
                costDetailValue: arr,
                showModalTwo: true,
                productId: record['id']
            })
        })

    }
    handleOkCost(){
        const { productId, costDetailValue} = this.state;
        let arr = [];
        costDetailValue.map((item,index)=>{
            arr.push({
                fee_code: item.title,
                fee_name: item.name,
                fee_rate: parseFloat(item.desc),
                unit: item.time
            })
        })
        jrFetchPost(apiAddFeeRate,{product_item_id: productId,fee_rate_struct: JSON.stringify(arr)}).then((ret) =>{

            message.success("操作成功");

            setTimeout(() =>{
                this.setState({
                    showModalTwo: false
                });
            });

        }).catch((error)=>{
            message.success("操作失败");
        })
    }
    addCostDetail(){
        let arr = this.state.costDetailValue;
        const obj = {id:'',title: '',name:'', desc: '',time:''};
        arr.push(obj);
        this.setState({
            costDetailValue: arr
        });
    }
    delCostDetail(index){
        let arr = this.state.costDetailValue;
        
        if(arr.length>0){
           arr.splice(index,1);
           this.setState({
                costDetailValue: arr
            })
           
           jrFetchPost(apiDeleteFeeRate,{fee_rate_id:`${arr[index].id}`}).then((ret)=>{
                message.success("操作成功");
           })
        }
    }
    handleChangeTitle( index,value){
        let arr = this.state.costDetailValue;
        const {reduction} = this.state;
        arr[index].title = value;
        arr[index].name = reduction[value];
        this.setState({
            costDetailValue: arr
        });
    }
    handleChangeDesc( index, e){
        let arr = this.state.costDetailValue;
        arr[index].desc = e.target.value;
        this.setState({
            costDetailValue: arr
        });
    }
    handleChangeTime(index,value){
        let arr = this.state.costDetailValue;
        arr[index].time = value;
        this.setState({
            costDetailValue: arr
        });
    }
    render() {

        const columns = [
            {
                title: '小类名称',
                dataIndex: 'item_name',
                key: 'item_name'
            },
            {
                title: '支付渠道',
                key: 'funds_channel',
                render:(record)=>{
                    let dom;
                    this.state.channelList.map((item)=>{
                        if(item['Id'] === record['funds_channel']){
                            dom =  item['ChannelName'];
                        }
                    })
                    return dom;
                }
            },
            {
                title: '用户风险等级',
                dataIndex: 'item_level',
                key: 'item_level'
            },
            {
                title: '还款方式',
                dataIndex: 'repay_type',
                key: 'repay_type'
            },
            {
                title: '收费结构',
                dataIndex: 'charge_structure',
                key: 'charge_structure'
            },
            {
                title: '操作',
                key: 'operate',
                render: (record) => {
                    return <span>
                        <a onClick={this.toEditItem.bind(this,record)}>编辑<Icon type="edit"/></a>
                        &nbsp;&nbsp;&nbsp;
                        <a onClick={this.toEditCost.bind(this,record)}>费用结构<Icon type="edit"/></a>
                        &nbsp;&nbsp;&nbsp;
                        <Popconfirm title="确认删除？" onConfirm={this.toDeleteItem.bind(this,record)} okText="Yes" cancelText="No">
                            <a><Icon type="delete"/></a>
                        </Popconfirm>
                    </span>
                }
            },
        ];

        const { isAdd,showModal,showModalTwo,dataProductItem,costDetailValue,reduction_type} = this.state;
        const {name} = this.props.location['query'];


        return <div>
            <h2>{name}</h2>

            <BtnsToolBar>
                <Button type='primary' onClick={this.toAddItem.bind(this)}>新增<Icon type="plus-circle" /></Button>
                <Button type='primary' onClick={ this.goBack.bind(this) }>返回</Button>
            </BtnsToolBar>

            <Table columns={columns} dataSource={dataProductItem} size={this.props.tableSize}/>

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
            <Modal title={ '费用结构' }
                   visible={ showModalTwo }
                   onOk={this.handleOkCost.bind(this)}
                   onCancel={ () =>{
                       this.resetForm();
                       this.setState({
                           showModalTwo: false
                       });
                   } }
            >
                <Form layout="inline">
                    { costDetailValue.length?costDetailValue.map((item,index)=>{
                        return (<div style={{marginBottom: 10}}>
                            <FormItem>
                                <Select style={{ width: 100 }} placeholder="请选择" defaultValue={item.title} value={item.title} onChange={this.handleChangeTitle.bind(this,index)}>
                                    {reduction_type.length?reduction_type.map((ite)=>{
                                        return <Option value={ite.fee_code}>{ite.fee_name}</Option>
                                    }):''}                       
                                </Select>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="请输入费用" defaultValue={item.desc} value={item.desc} onChange={this.handleChangeDesc.bind(this,index)}/>
                            </FormItem>
                            <FormItem>
                                <Select style={{ width: 100 }} placeholder="请选择" defaultValue={item.time} value={item.time} onChange={this.handleChangeTime.bind(this,index)}>
                                    <Option value="all">一次性</Option>   
                                    <Option value="year">年</Option>                    
                                    <Option value="month">月</Option>                    
                                    <Option value="day">日</Option>
                                </Select>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" onClick={this.delCostDetail.bind(this,index)} icon="minus" />
                            </FormItem>
                        </div>)
                    }):'' }
                </Form>
                <Button type="primary" onClick={this.addCostDetail.bind(this)} icon="plus" />
            </Modal>
        </div>

    }

}

const FrProductDetailForm = Form.create()(FrProductDetail);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(FrProductDetailForm)