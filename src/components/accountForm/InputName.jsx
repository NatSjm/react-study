import React from 'react';

class InputName extends React.Component {
    render = () => {
        return <div className="input_wrapper">
            <label className="input_label"
                   htmlFor="name">Ваше имя</label>
            <input type="text"
                   id="person-name"
                   name="name"
                   className="input" />
        </div>;
    };
};
export default InputName;
