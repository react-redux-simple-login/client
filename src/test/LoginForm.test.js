'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from '../components/LoginForm';

xdescribe('<LoginForm />', () => {

  const wrapper = shallow(<LoginForm />);

  it ('is a div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it ('has two children, one h1 and one form', () => {
    const wrapperChildren = wrapper.children();
    expect(wrapperChildren.length).toEqual(2);
    expect(wrapperChildren.nodes[0].type).toEqual('h1');
    expect(wrapperChildren.nodes[1].type).toEqual('form');

    console.log("THE children:", wrapperChildren.nodes[1].props.children);

  });

  it('has child form, which has three children of type input', () => {
    const formChildren = wrapper.children().nodes[1].props.children;

    expect(formChildren[0].type).toEqual('input');
    expect(formChildren[0].props.placeholder).toEqual('username');

    expect(formChildren[1].type).toEqual('input');
    expect(formChildren[1].props.placeholder).toEqual('password');

    expect(formChildren[2].type).toEqual('input');
    expect(formChildren[2].props.value).toEqual('Login');

  });

  xit('receives props from its parent component', () => {
    //TODO: figure out how to test this
  });

  xit('triggers handleLogoutSubmit on submit', () => {
    //TODO: figure out how to test this
  });

});
