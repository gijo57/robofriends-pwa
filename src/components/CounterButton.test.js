import { shallow } from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton'

describe('<CounterButton/>', () => {
    const wrapper = shallow(<CounterButton/>)
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState])

    it('renders CounterButton component', () => {
        expect(shallow(<CounterButton/>)).toMatchSnapshot()
    })
    
    it('adds one to counter on button click', () => {
        const button = wrapper.find('[id="count"]')
        
    })
})
