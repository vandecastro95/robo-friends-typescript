import React from 'react';

interface ISearchBoxProps {
    onSearch(event: string): void; 
}

export default ({ onSearch}: ISearchBoxProps ) => (
    <div className="pa2 ">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots" 
            onChange={(e)=> onSearch(e.target.value)}
            />
    </div>
)