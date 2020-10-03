import React from 'react';
import CounterButton from './CounterButton';

const Header = React.memo(() => {
    return (
        <div>            
            <h1 className='f1'>RoboFriends</h1>
            <CounterButton color='red' style='margin 10px' />
        </div>
    )   
})

export default Header;