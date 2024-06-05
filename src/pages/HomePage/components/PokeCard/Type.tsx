import React from 'react';
import "./Type.scss";

function Type({ typeName, children }){

    return(
        <div className={`type-${typeName}`}>
            {typeName}
        </div>
    );
}

export default Type;
