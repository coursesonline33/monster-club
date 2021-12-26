import React from 'react';
import './search-box.styles.css';

export const SearchField = props => (
    <div className='search'>
        <input type='search' placeholder={props.placeholder} onChange={props.handleChange} />
    </div>
);