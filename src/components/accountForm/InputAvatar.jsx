import React from 'react';
import avatarImage from 'pictures/avatarDefault.jpg'

class InputAvatar extends React.Component {

    render = () => {
        let elementClass = this.props.className + ' avatar';
        let avatarBackground = {backgroundImage: `url("${avatarImage}")`};
        return <div className={elementClass}>
            <input type="file" className="avatar_input" id="avatar" name="avatar"/>
            <label htmlFor="avatar"
                   className="avatar_label"
                   style={avatarBackground}/>
                   <span>Ваш аватар</span>
        </div>;
    };
};

export default InputAvatar;
