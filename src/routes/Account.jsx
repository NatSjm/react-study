import React from 'react';
import logo from '../img/avatar.png';



const avatar = (
	<div className="avatar__wrap">
		<img src={logo} className="avatar__img" alt="avatar"/>
	</div>
);
const form = (
	<div className="form__wrap">
		<input className="form__input" type="text" placeholder="Введите имя"/>
		<input className="form__input" type="email" placeholder="Введите эл.почту"/>
		<input className="form__btnSave" type="submit" value="Сохранить"/>
	</div>
);

class Account extends React.Component {
    render = () => {
        return 	<div className="account__wrap">
					{avatar}
					{form}
				</div>;
		
    };
};

export default Account;