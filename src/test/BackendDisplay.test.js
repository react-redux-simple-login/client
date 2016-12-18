'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import BackendDisplay from '../components/BackendDisplay';

describe.only('<BackendDisplay />', () => {

    const username = 'demo'
    const node_version = 'v7.0.0';
    const app_path = '/Users/name/directory';

    const wrapper = shallow(<BackendDisplay
                            username={username}
                            node_version={node_version}
                            app_path={app_path}
                          />);

    it ('is a div', () => {
      expect(wrapper.type()).toEqual('div');
    });

    it ('has four children, one h1 and three ps', () => {
      const wrapperChildren = wrapper.children();
      expect(wrapperChildren.length).toEqual(4);
      expect(wrapperChildren.nodes[0].type).toEqual('h1');
      expect(wrapperChildren.nodes[1].type).toEqual('p');
      expect(wrapperChildren.nodes[2].type).toEqual('p');
      expect(wrapperChildren.nodes[3].type).toEqual('p');
    });

    it('component correctly displays props', () => {
      const wrapperChildren = wrapper.children().nodes;

      const h1Text = wrapperChildren[0].props.children.join('');
      expect(h1Text).toEqual(`Welcome, ${username}!`);

      const node_versionText = wrapperChildren[1].props.children[2];
      expect(node_versionText).toEqual(node_version);

      const appPathText = wrapperChildren[2].props.children[2];
      expect(appPathText).toEqual(app_path);
   });

});
