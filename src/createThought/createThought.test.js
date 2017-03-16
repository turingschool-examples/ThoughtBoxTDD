import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it.skip('has a two input field', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('input').length).toEqual(2);
  });

  it.skip('fires onChange on first input which should update state & input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').first();
    const expectedState = {
      title: 'abc',
      body: ''
    };
    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it.skip('fires onChange on second input which should update state & input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').last();
    const expectedState = {
      title: '',
      body: 'abc'
    };
    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it.skip('has a submit button', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it.skip('fires submitIdea function with the state object while confirming that input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const wrapper = mount(
      <CreateThought createThought={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    const input = wrapper.find('input').last();
    input.simulate('change', { target: { value: 'abc' } });
    wrapper.find('button').simulate('click');


    // What input field are we trying to target? What is the action we want to simulate?

    // Find the DOM element you want to click on and click on that thing

    // Expect that the value of the input node equals a string
  });



});
