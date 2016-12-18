'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from '../components/LoginForm';

describe('<LoginForm />', () => {

  const wrapper = shallow(<LoginForm />);

  it ('is a div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it ('has two children, one h1 and one form', () => {
    const wrapperChildren = wrapper.children();
    expect(wrapperChildren.length).toEqual(2);
    expect(wrapperChildren.nodes[0].type).toEqual('h1');
    expect(wrapperChildren.nodes[1].type).toEqual('form');

    console.log("THE children:", wrapperChildren.nodes[1].type);

  });


});
