



import Routes from '../route/index';
require('./index.less');
import reducer from '../redux/reducers';

import { resizeCallback } from '../components/common'

const { hashHistory, browserHistory } = ReactRouter;
const { syncHistoryWithStore } = ReactRouterRedux;
const { Provider } = ReactRedux;
const { createStore, applyMiddleware } = Redux;

const store = createStore(reducer, applyMiddleware(Thunk));
const history = syncHistoryWithStore(hashHistory, store);

resizeCallback.initOnresize();

ReactDOM.render(
<Provider store={store}>
        <div className="data-reactroot">
            <Routes history={history} />
        </div>
</Provider>, document.getElementById('root'));