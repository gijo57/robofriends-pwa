import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'

it('renders CardList component', () => {
    const robots = [
        {
            id: 1,
            name: 'John',
            username: 'john',
            email: 'john@john.com'
        }
    ]
    expect(shallow(<CardList robots={robots} />)).toMatchSnapshot()
})
