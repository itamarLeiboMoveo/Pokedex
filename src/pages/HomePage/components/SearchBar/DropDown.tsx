import React from 'react';

import { typesDict } from '../../../../services/TypesDict.tsx';
import './DropDown.scss';

const DropDown = ({ setDropDown, value }) => {
    return (
        <select value={value} onChange={setDropDown}>
            <option value="" >Insert a type</option>
            {Object.entries(typesDict).map(([key, label]) => (
                <option key={key} value={key}>
                    {key}
                </option>
            ))}
        </select>
    );
};

export default DropDown;