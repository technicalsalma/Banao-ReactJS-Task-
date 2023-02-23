import React from 'react';

const Container = ({children}) => {
    return (
        <div>
           <div className='container' style={{"width":"1440px"}}>{children}</div> 
        </div>
    );
};

export default Container;