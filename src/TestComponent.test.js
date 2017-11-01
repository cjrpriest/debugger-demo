import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TestComponent from './TestComponent';

Enzyme.configure({ adapter: new Adapter() });

it('test', () => {
    let testComponentWrapper = shallow(<TestComponent a={1}/>);

    expect(testComponentWrapper.state().number).toBe(2);
});