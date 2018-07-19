
import { apiGetMenuList, apiGetMenuItemList, apiMenuToRole, apiGetMenuItemByRoleId} from "../apis";
import BtnsToolBar from "../Elements/BtnsToolBar";
import {jrFetchGet, jrFetchPost} from "../common";

const { Table, Popconfirm, Button, Modal, Form, Input, Icon, message, Tree } = Antd;
const TreeNode = Tree.TreeNode;
let checkedData = 'DATA_INNIT';
class MenuManage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataList: [],
            saving: false,
            menu_item_id: '',
            pitchOnArr: []
        }
    }
    componentDidMount(){
        this.getMenuItemByRoleId();
    }
    getMenuItemByRoleId(){
        jrFetchPost(apiGetMenuItemByRoleId,{role_id: this.props.params['group_id']}).then((ret)=>{
            const dataList = ret.data.ret;
            let arr= [];
            dataList.map((item)=>{
                item['childrens'].map((ite)=>{
                    if(ite['Status'] === 1 ){
                        arr.push(ite['Id']+'')
                    }
                })
            })
            this.setState({
                dataList: dataList,
                pitchOnArr: arr
            })
        })
    }

    toSave(){
        if(checkedData === 'DATA_INNIT') {
            message.info('没有做任何操作');
            return false
        }
        let checkedArr = [];
        checkedData.forEach((item) => {
            if(item.key){
                checkedArr.push(item.key);
            }
        });
        console.log(checkedArr.toString());
        jrFetchPost(apiMenuToRole,{
            action: 'read',
            menu_item_id: checkedArr.toString(),
            role_id: parseInt(this.props.params['group_id'])
        }).then((ret) => {
            message.success(MSG_SUCCESS);
            this.setState({
                saving: false
            });
        }).catch((ret) => {
            this.setState({
                saving: false
            });
        })
    }


    onCheckTree(checkedKeys,info){
        checkedData = info.checkedNodes;
    }
    createTree(dataList){
        console.log(dataList,'数据');
        return dataList.map((item,index)=>{
            return <TreeNode title={item['menu_name']}>
                { item['childrens'].map((ite)=>{
                    return <TreeNode title={ite['MenuItemName']} key={ite['Id']+''}/>
                })}
            </TreeNode>;
        })
    }
    render(){
        const { dataList,saving,pitchOnArr } = this.state;
        return <div>
            <h2>菜单管理</h2>
            <BtnsToolBar>
                <Button loading={saving} onClick={this.toSave.bind(this)}>保存</Button>
            </BtnsToolBar>
            {dataList.length > 0 && <Tree checkable defaultCheckedKeys={pitchOnArr} defaultExpandedKeys={pitchOnArr} onCheck={this.onCheckTree.bind(this)}>
                {this.createTree(dataList)}
            </Tree>}
        </div>
    }
}

export default MenuManage;