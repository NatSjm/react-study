import React from 'react';
import AccountForm from 'components/accountForm/AccountForm.jsx';


class Account extends React.Component {
    render = () => {
        return <main className="account_main container">
            <h2 className="account_title">Аккаунт</h2>
            <AccountForm />
        </main>;
    };
};

export default Account;
