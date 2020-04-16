import React from 'react';

class InputSubmit extends React.Component {
    render = () => {
        return <input type="submit" className={this.props.className + ' button wine'} value="Отправить"/>;
    };
};

export default InputSubmit;
