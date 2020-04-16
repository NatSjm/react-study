import React from 'react';

class InputEmail extends React.Component {
    render = () => {
        return <div className="input_wrapper">
            <label className="input_label"
                   htmlFor="mail">Ваш Email</label>
            <input type="email"
                   id="mail"
                   name="mail"
                   className="input" />
        </div>;
    };
};

export default InputEmail;
