import React from 'react';

const Greeter = props => {
    
    return (
        <>
            <h4 className="card m-auto my-3 p-2 w-75 text-center bg-warning-subtle">{ props.phrase }, { props.name } </h4>
        </>
    )
}

export default Greeter;