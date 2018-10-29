


import MainView from '../components/Main/MainView';

import AccountManage from '../components/AuthorityManage/AccountManage';
import WorkGroupManage from '../components/AuthorityManage/WorkGroupManage';
import MenuManage from '../components/AuthorityManage/MenuManage';
import FrProduct from '../components/AuthorityManage/FrProduct/FrProduct';
import FrProductDetail from '../components/AuthorityManage/FrProduct/FrProductDetail';
import ApiReource from '../components/AuthorityManage/ApiReource';

import OrderList from '../components/TransactionManage/OrderManage/OrderList';
import RepayList from '../components/TransactionManage/OrderManage/RepayList';
import RepayRecord from '../components/TransactionManage/RepayRecord/RepayRecord';
import DerateList from '../components/TransactionManage/Derate/DerateList';
import PartRepayList from '../components/TransactionManage/PartRepay/PartRepayList';
import OrderDetail from '../components/TransactionManage/OrderManage/OrderDetail';
import ShouldRepayList from '../components/TransactionManage/ShouldRepay/ShouldRepayList';
import CurrentOrder from '../components/TransactionManage/Service/CurrentOrder';

import BankCard from '../components/UserManage/BankcardManage/BankCard';
import Customer from '../components/UserManage/CustmerManage/Customer';


const PropTypes = React.PropTypes;
const { Router, Route,IndexRoute  } = ReactRouter;

const Manage = (that) => {
    return <div className="pro-manage g-content">
        { that.children }
    </div>
};


const common = (that) => {
    return <div className="pro-manage g-content">
        { that.children }
    </div>
};

const allRoute = [
    <Route path='AccountManage' component={ AccountManage }/>,
    <Route path='WorkGroupManage' component={ WorkGroupManage }/>,
    <Route path='MenuManage/:group_id' component={ MenuManage }/>,
    <Route path='FrProduct' component={ FrProduct }/>,
    <Route path='FrProductDetail' component={ FrProductDetail }/>,
    <Route path='ApiReource' component={ ApiReource }/>,

    <Route path='OrderList' component={ OrderList }/>,
    <Route path='RepayList' component={ RepayList }/>,
    <Route path='RepayRecord' component={ RepayRecord }/>,
    <Route path='DerateList' component={ DerateList }/>,
    <Route path='PartRepayList' component={ PartRepayList }/>,
    <Route path='OrderDetail' component={ OrderDetail }/>,
    <Route path='ShouldRepayList' component={ShouldRepayList}/>,
    <Route path='CurrentOrder' component={CurrentOrder}/>,

    <Route path='BankCard' component={ BankCard }/>,
    <Route path='Customer' component={ Customer }/>,
];


const Routes = ({ history }) => {
    return <Router history={ history }>
        <Route path='login' component={ require('react-router-loader!../components/Login/Login.jsx') }/>
        <Route path='MainView' component={ MainView } >

            <Route path='Authority' component={ common }>
                { allRoute }
            </Route>

            <Route path='Transaction' component={ common }>
                { allRoute }
            </Route>

            <Route path='User' component={ common }>
                { allRoute }
            </Route>

        </Route>

    </Router>

};

Routes.propTypes = {
  history: PropTypes.any,
};
export default Routes;

