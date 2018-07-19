const {Layout, Dropdown, Menu, Icon, Tooltip, Button, Spin, Popconfirm} = Antd;
const {Header, Footer, Sider, Content} = Layout;
const {Item, SubMenu} = Menu;
import './MainView.less';
const DEFALUT_TITLEA = '简融清算平台';
const {Link} = ReactRouter;
const MenuItemGroup = Menu.ItemGroup;

import {jrFetchGet, jrFetchPost, jrTip, formItemLayout, resizeCallback} from '../common';

import {apiLogout, apiGetUserInfo, apiGetMenuItemByRoleId} from '../apis';
const {connect} = ReactRedux;
const text = <span><Icon type="smile" /></span>;


let realContext;
const setTableSize = (val) => {
    return {
        type: 'setTableSize',
        val: val
    }
};

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: DEFALUT_TITLEA,
            dataList: [],
            userInfo: {
                nick: localStorage.getItem('name')
            },
            loading: true,
            collapsed: false,

            currentKey: this.props.location['pathname'],
        }
    }


    componentWillMount() {
        realContext = this;
    }

    static getSetLoadiingFunc(loadingState) {
        if (realContext && realContext.state.loading !== loadingState) {
            realContext.setState({
                loading: loadingState
            })
        }
    }


    componentDidMount() {
        this.getMenuItemByRoleId();
    }

    
    
    getMenuItemByRoleId(){
        const role_id = localStorage.getItem('role_id');
        jrFetchPost(apiGetMenuItemByRoleId,{role_id: role_id}).then((ret)=>{
            const dataList = ret.data.ret;
            this.setState({
                dataList: dataList
            })
        })
    }

    toExit() {

        jrFetchGet(apiLogout).then((ret) => {
            window.location.href = '#/login'
        })
    }


    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    toChangeMenu(e) {
        this.setState({
            currentKey: e.key,
        });
    }

    changeStyle() {

        const tableSizeArr = ['small', 'middle', 'default'];

        switch (this.props.tableSize) {
            case 'small':
                this.props.setTableSize('middle');
                break;
            case 'middle':
                this.props.setTableSize('default');
                break;
            case 'default':
                this.props.setTableSize('small');
                break;

        }

    }

    getForm() {

        const { dataList } = this.state;
        const arr = [];
        dataList.map((item,index)=>{
            arr.push(<SubMenu title={<span><Icon type="exception" /><span className="nav-text">{item['menu_name']}</span></span>}>
                {item['childrens'].map((ite,ind)=>{
                    if(ite['Status'] === 1){
                        return <Menu.Item key={`/MainView/${item['menu_code']}/${ite['MenuItemCode']}`}>
                            <a href={`#/MainView/${item['menu_code']}/${ite['MenuItemCode']}`}>
                                <Icon type="bars" />{ite['MenuItemName']}
                            </a>
                        </Menu.Item>
                    }
                })}
            </SubMenu>)
        })

        switch (true){

            case true:
                return arr;

        }

    }


    render() {

        const {loading, collapsed, userInfo,currentKey} = this.state;

        return <Layout className='main-view'>

            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="fr-logo" />

                <Menu theme="dark"
                      mode="inline"
                      onClick={this.toChangeMenu.bind(this)}
                      defaultSelectedKeys={currentKey}
                      >
                    { this.getForm() }
                </Menu>

            </Sider>
            <Layout className="right-layout" style={{minHeight: (window.screen.availHeight - 1) + 'px'}}>
                <Header className="header-bar">
                    <Icon
                        className="fr-trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle.bind(this)}
                    />

                    <p className="header-title animated fadeIn"></p>

                    <p className="user-info animated fadeIn">

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Icon type="user"/>&nbsp;
                            <Tooltip placement="bottom" title={text}>
                                { userInfo.nick || userInfo.name }
                            </Tooltip>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Tooltip placement="bottom" title='自定义表格'>
                            <span className="hover-click animated fadeIn" onClick={this.changeStyle.bind(this)}><Icon type="switcher"/></span>
                        </Tooltip>
                        &nbsp;&nbsp;&nbsp;

                        <Popconfirm title="确定退出登录吗？" onConfirm={this.toExit.bind(this)} okText="确定" cancelText="取消">
                            <Button size='small'>退出<Icon type="logout" /></Button>
                        </Popconfirm>


                    </p>
                </Header>

                <Spin  wrapperClassName="global-spin" spinning={loading} size="large" tip="玩儿命加载中...">
                    <Content className='content'>{ this.props.children }</Content>
                </Spin>
            </Layout>


        </Layout>

    }
}

const mapStateToProps = (state) => {
    return {
        tableSize: state.update.tableSize
    }
};


export default connect(mapStateToProps, {setTableSize})(MainView)

