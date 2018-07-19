

const { Table,Form,Pagination,Button,Icon,Input,Modal,InputNumber,Radio,message,Select } = Antd;

import {apiGetAllProduct, apiAddProduct, apiDeleteFeeRate,apiGetPartDeductPolicy,apiUpdateDeductPolicy} from '../../apis';
import FormBox from '../../Elements/FormBox';
import BtnsToolBar from '../../Elements/BtnsToolBar';
const {connect} = ReactRedux;
const DEFAULTPAGE = 1;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const paginationStyle = {
    float: 'right',
};
const ADD = 'add';

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout} from '../../common';


const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class FrProduct extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModel: false,
            dataAllProduct: [],
            minAmount: '',
            minStages: '',
            visible: false,
            costDetailValue: [],


            sustained_day: 0,
            product_code: ''
        }
    }

    componentDidMount() {

        this.getAllProduct()

    }

    getAllProduct() {

        jrFetchGet(apiGetAllProduct).then((ret) =>{
            this.setState({
                dataAllProduct: ret.data.result
            });
        })

    }

    onCancleModel(){

        this.setState({
            showModel: false,
            visible: false
        });

        setTimeout(() => {
            this.props.form.resetFields();
        }, 200);

    }


    getFormItem() {

        const { getFieldDecorator } = this.props.form;
        return [
            <FormItem {...formItemLayout} label="产品名称">
                { getFieldDecorator('productName', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入产品名称"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="产品code">
                { getFieldDecorator('productCode', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入产品code"/>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="额度区间">
                { getFieldDecorator('amount', {
                    rules: [{required: true}]
                })(
                    <span>
                        <InputNumber onChange={value => {this.setState({ minAmount: value })}}/> - <InputNumber/>
                    </span>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="期数">
                { getFieldDecorator('stages', {
                    rules: [{required: true}]
                })(
                    <span>
                        <InputNumber onChange={value => { this.setState({ minStages: value })} }/> - <InputNumber/>
                    </span>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="期数单位">
                { getFieldDecorator('unit', {
                    rules: [{required: true}]
                })(
                    <RadioGroup>
                        <Radio value='month'>月</Radio>
                        <Radio value='week'>周</Radio>
                    </RadioGroup>
                ) }
            </FormItem>,
            <FormItem {...formItemLayout} label="产品描述">
                { getFieldDecorator('productDesc', {
                    rules: [{required: true}]
                })(
                    <Input placeholder="请输入产品相关描述" type='textarea'/>
                ) }
            </FormItem>,
        ]

    }

    handleOk() {

        const formVal = this.props.form.getFieldsValue();
        const { minStages,minAmount } = this.state;

        this.props.form.validateFields((err, values) => {
            if (err) {
                message.info("标记*的为必填项哦");
            }else{
                jrFetchPost(apiAddProduct,{
                    description: formVal.productDesc || '',
                    loan_day_unit: formVal.unit || '',
                    loan_max_amt: formVal.amount || '',
                    loan_min_amt: minAmount,
                    loan_max_day: formVal.stages || '',
                    loan_min_day: minStages,
                    product_code: formVal.productCode || '',
                    product_name: formVal.productName || ''
                }).then((ret) =>{

                    this.getAllProduct();

                    message.success('新增成功');

                    setTimeout(() =>{
                        this.onCancleModel();
                    },200);

                })
            }
        });
    }

    toProductDetail(record) {

        location.href = `#/MainView/Authority/FrProductDetail?code=${ record.code }&name=${ record.name }`;

    }

    toDrawStrategy(record){

        jrFetchPost(apiGetPartDeductPolicy,{id: record.id,product_code: record.code}).then((ret)=>{
            const data = ret.data.result[0];
            const arr  = [];
            data.deduct_time.split(',').map((item,index)=>{
                arr.push({time: item+':00'});
            })
            this.setState({
                visible: true,
                sustained_day: data.sustained_day,
                product_code: data.product_code,
                costDetailValue: arr
            })
        })


    }

    handleOkDraw(){

        const { costDetailValue, product_code,sustained_day } = this.state;
        let arr = [];
        costDetailValue.map((item,index)=>{
            arr.push(parseInt(item.time));
        })
        let pro = {
            deduct_frequency: costDetailValue.length,
            deduct_time: arr.toString(),
            product_code: product_code,
            sustained_day: sustained_day
        }
        jrFetchPost(apiUpdateDeductPolicy,pro).then((ret)=>{
            message.success('修改成功');
            this.setState({
                visible: false
            })
        })
    }

    getFormItemDraw() {
        const { getFieldDecorator } = this.props.form;
        return [
            <FormItem>
                {getFieldDecorator('userName')(
                    <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                )}
            </FormItem>,
        ];
    }
    addCostDetail(){
        let arr = this.state.costDetailValue;
        const obj = { time:''};
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
        }
    }
    handleChangeTime(index, e){
        let arr = this.state.costDetailValue;
        arr[index].time = e.target.value;
        this.setState({
            costDetailValue: arr
        });
    }
    handleChangeDay(value){
        this.setState({
            sustained_day: value
        })
    }

    render(){

        const columns = [
            {
                title: '产品名称',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: '产品code',
                dataIndex: 'code',
                key: 'code'
            }, {
                title: '额度区间',
                key: 'mountRegion',
                render: (record) =>{
                    return <span>
                        { record.loan_min_amt } - {record.loan_max_amt}
                    </span>
                }
            },{
                title: '期数区间',
                key: 'stageRegion',
                render: (record) =>{
                    return <span>
                        { record.loan_min_day } - {record.loan_max_day} {record.loan_day_unit}
                    </span>
                }
            },{
                title: '操作',
                key: 'oprate',
                render: (record)=>{
                    return <span>
                        <Button type='dashed' onClick={this.toProductDetail.bind(this,record)}>
                            小类产品配置<Icon type="right" />
                        </Button>
                        <Button style={{marginLeft: '15px'}} type='dashed' onClick={this.toDrawStrategy.bind(this,record)}>
                            划扣策略<Icon type="right" />
                        </Button>
                    </span>
                }
            }
        ];

        const { showModel,visible,costDetailValue,dataAllProduct,sustained_day } = this.state;

        return <div>
            <h2>产品配置</h2>

            <BtnsToolBar>
                <Button type='primary' onClick={()=>{this.setState({showModel: true})}}>添加<Icon type="plus-circle" /></Button>
            </BtnsToolBar>

            <Table columns={columns} dataSource={dataAllProduct} pagination={false} size={this.props.tableSize}/><br/>

            <Modal title='添加'
                   visible={ showModel }
                   onOk={this.handleOk.bind(this)}
                   onCancel={()=>{this.onCancleModel()}}
            >
                { this.getFormItem() }

            </Modal>
            <Modal title='划扣策略'
                   visible={ visible }
                   onOk={this.handleOkDraw.bind(this)}
                   onCancel={()=>{this.onCancleModel()}}
            >
                <Form layout="inline">
                    <FormItem label="持续划扣天数" style={{marginBottom:'10px'}}>
                        <InputNumber style={{width:'146px'}} value={sustained_day} onChange={this.handleChangeDay.bind(this)}/>
                    </FormItem>
                    <FormItem label="划扣时间点" style={{marginBottom:'10px'}}>
                        { costDetailValue.length ? costDetailValue.map((item,index)=>{
                            return (<div style={{marginBottom: 10}}>
                                <FormItem>
                                    <Input placeholder="示例：12:00" value={item.time} onChange={this.handleChangeTime.bind(this,index)}/>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" onClick={this.delCostDetail.bind(this,index)} icon="minus" />
                                </FormItem>
                            </div>)
                        }):'' }
                    </FormItem>
                </Form>
                <Button type="primary" onClick={this.addCostDetail.bind(this)} icon="plus"/>
            </Modal>
        </div>
    }

}

const FrProductForm = Form.create()(FrProduct);

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};

export default connect(mapStateToProps,{setTableSize})(FrProductForm);