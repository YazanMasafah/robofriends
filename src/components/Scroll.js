import React from 'react';

const Scrolling = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'1000px'}}>        
            {props.children}
        </div>
    );
};

export default Scrolling;