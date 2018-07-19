
import './Login.less';

import { MSG_SUCCESS, STATUS_SUCCESS, TYPE_ROLE_ADMIN, TYPE_ROLE_RECHECK, TYPE_ROLE_CHECK, TYPE_ROLE_ADMIN_BK } from './../consts';

import logoPng from './../../img/logo.png';



const { Form, Icon, Input, Button, Card, message } = Antd;

const FormItem = Form.Item;

import {apiGetAllProduct, apiLogin} from '../apis';
import { jrFetchPost, jrFetchGet } from '../common';

const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            snackOpen: false,
            snackMsg: '',
            loading: false
        }
    }

    componentDidMount() {
        
    }

    

    goNext() {
        const formVal = this.props.form.getFieldsValue();
        this.setState({
            loading: true
        });


        jrFetchPost(apiLogin, {
            user_name: formVal.username,
            password: formVal.password
        }).then((ret) => {

            localStorage.setItem('name',ret.data['nick_name']);
            localStorage.setItem('role_id',ret.data['role_id']);

            this.setState({
                loading: false
            });

            window.location.href = '#/MainView/Transaction/OrderList';

        }).catch(() => {
            this.setState({
                loading: false
            });
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return <div className="login">
            <div className="content" >
                <div className='login-box animated fadeIn'>
                    <Card title='清算后台'>
                        <Form>
                            <FormItem>
                                { getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                { getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                           type="password"
                                           placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button
                                    className='login-btn'
                                    type="primary"
                                    htmlType="submit"
                                    onClick={ this.goNext.bind(this) }
                                    loading={this.state.loading}
                                    disabled={hasErrors(getFieldsError())}
                                >
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </Card>

                </div>
            </div>

        </div>
    }
}

 Login = Form.create()(Login);

export default Login