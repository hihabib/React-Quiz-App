import React from 'react';

const Checkbox = ({children}) => {
    return (
        <label> <input type="checkbox"/> <span>{children}</span> </label>
    );
};

export default Checkbox;