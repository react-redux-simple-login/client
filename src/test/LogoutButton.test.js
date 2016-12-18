'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import LogoutButton from '../components/LogoutButton';

describe('<LogoutButton />', () => {

  const wrapper = shallow(<LogoutButton />);

  it ('is a form', () => {
    expect(wrapper.type()).toEqual('form');
  });

  it ('has one child, an input field, with type of submit and value of logout', () => {
    const wrapperChildren = wrapper.children();

    expect(wrapperChildren.length).toEqual(1);
    expect(wrapperChildren.type()).toEqual('input');
    expect(wrapperChildren.node.props.type).toEqual('submit');
    expect(wrapperChildren.node.props.value).toEqual('Logout');
  });
});
