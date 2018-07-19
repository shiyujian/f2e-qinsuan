/**
 * Created by yuenan on 2017/8/14.
 */



import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { hashHistory, browserHistory, Router, Route, useRouterHistory, IndexRoute, Link } from 'react-router';

import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';

import {Layout,Tabs, Dropdown, Menu, Radio, Checkbox, Tooltip, Card, Table, Popconfirm, Alert,Button, Modal,Col, Row, Form, Input,InputNumber, Select, message, Tree, Icon,Popover,Switch,Upload,Collapse,Pagination,Progress,DatePicker,Spin,Badge } from 'antd';


require('babel-polyfill');
require('es6-promise').polyfill();
import 'whatwg-fetch';
import 'fetch-detector';
import { createHashHistory } from 'history';
import 'fetch-ie8';

const Antd = {
    Table: Table,
    Popconfirm: Popconfirm,
    Button: Button,
    Radio: Radio,
    Modal: Modal,
    Form: Form,
    Input: Input,
    InputNumber: InputNumber,
    Select: Select,
    message: message,
    Tree: Tree,
    Layout: Layout,
    Tabs: Tabs,
    Dropdown: Dropdown,
    Menu: Menu,
    Tooltip: Tooltip,
    Checkbox: Checkbox,
    Alert: Alert,
    Card: Card,
    Popover: Popover,
    Switch: Switch,
    Upload: Upload,
    Icon: Icon,
    Collapse: Collapse,
    Pagination: Pagination,
    Progress: Progress,
    DatePicker: DatePicker,
    Col: Col,
    Row: Row,
    Spin: Spin,
    Badge: Badge
};


const ReactRouter = {
    hashHistory: hashHistory,
    Router: Router,
    Route: Route,
    IndexRoute: IndexRoute,
    Link: Link,
    useRouterHistory: useRouterHistory
};
const Redux = {
    createStore: createStore,
    applyMiddleware: applyMiddleware,
    combineReducers: combineReducers
};
const ReactRouterRedux = {
    routerReducer: routerReducer,
    syncHistoryWithStore: syncHistoryWithStore
};

const ReactRedux = {
    Provider: Provider,
    connect: connect
};

const history = {
    createHashHistory: createHashHistory
};


window.React = React;
window.ReactDOM = ReactDOM;
window.Redux = Redux;
window.ReactRouter = ReactRouter;
window.ReactRedux = ReactRedux;
window.ReactRouterRedux = ReactRouterRedux;
window.Thunk = thunk;
window.ThisHistory = history;
window.Antd = Antd;
window.Antd2 = 'hello';





