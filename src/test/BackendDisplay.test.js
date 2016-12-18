'use strict';
import React from 'react';
import jsdom from 'jsdom'
import { expect } from 'chai'
import { shallow , mount} from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedBackendDisplay, {BackendDisplay} from '../components/BackendDisplay';
import configureMockStore from 'redux-mock-store';

// the following creates a fake DOM environment so that we can use Enzyme's mount to test decorated components
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe.only('<BackendDisplay />', () => {

    it('undecorated component correctly displays username', () => {
        // defines the props passed into the component
        const username = 'Foo'


        // renders the component with the props
        const wrapper = mount(<BackendDisplay username={username} />);


        // tests that the text of the elements equals the props passed in
        expect(wrapper.find('h1').first().text()).to.equal(`Welcome, ${username}!`);


   });

   //folowing is not working; need to study up a bit more to understand why

  //   it('decorated component correctly displays username', () => {
  //       // define the prop we want to pass in
  //       const username = 'Foo'
  //       const initialState = { }
  //       // create our mock store with an empyty initial state
  //       const store = configureMockStore(initialState)
   //
  //       // render the component with the mockStore
  //       console.log(ConnectedBackendDisplay)
  //       const wrapper = mount(<Provider store={store}>
  //                                 <ConnectedBackendDisplay username={username}/>
  //                               </Provider>);
   //
  //       // test that the text of the first <p> equals username prop that we passed in
  //       expect(wrapper.find('h1').first().text()).to.equal(`Welcome, ${username}!`);
  //  });
});
