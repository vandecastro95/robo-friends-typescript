import React from 'react';
import Card from './Card';
import { IRobot } from '../App'


export default ({ data }: { data: Array<IRobot>}) => {    
    
    return (
    <div style={{maxWidth: '1200px',
                margin: '0 auto '}}>
        {
            data.map(({id, name, username, email}) => (
            <Card 
                key={id}
                img={`https://robohash.org/${id}?size=200x200`}
                name={name}
                email={email}
            />
            ))
        }
    </div>
)}