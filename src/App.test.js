'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';

describe('<LogoutButton />', () => {

  it ('is a form', () => {
    const wrapper = shallow(<LogoutButton />);
    expect(wrapper.type()).toEqual('form');
    
    console.log(wrapper.children().length);
    expect(wrapper.find('input').type()).toEqual('input');

  });

})

describe('<LoginForm />', () => {

  it ('is a div', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.type()).toEqual('div');
  });

})
