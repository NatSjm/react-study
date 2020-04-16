import React from 'react';
import {InputAvatar, InputEmail, InputName, InputSubmit} from './index.js';

class AccountForm extends React.Component {
    render = () => {
        return <div>
            <form className='account-form'>
                <InputAvatar className='account-form_avatar'/>
                <div className="account-form_fields">
                <InputEmail />
                <InputName />
                <InputSubmit className="account-form_submit"/>
                </div>
            </form>
        </div>;
    };
};

export default AccountForm;
