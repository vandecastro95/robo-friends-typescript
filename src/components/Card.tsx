import React from 'react';

interface CardStatelessProps {
    name: string;
    email: string;
    img: string;
}

const Card: React.SFC<CardStatelessProps> = ({ name, email, img}) => (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" style={{minWidth: '250px', minHeight: '250px'}}>
       <img alt='Robot' src={img} />
       <div>
        <h2>{name}</h2>
        <p>{email}</p>
       </div>
    </div>
)

export default Card;