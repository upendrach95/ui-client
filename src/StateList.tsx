import React from 'react';

const states = [
    'Illinois',
    'Wisconsin',
    'NewYork'
];

const StateList = () => {
    return (
        <>
            {states.map((state) => (
                <option key={state} value={state}>
                    {state}
                </option>
            ))}
        </>
    );
};

export default StateList;
