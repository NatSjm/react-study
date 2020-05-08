import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
    Name as InputName,
    Email as InputEmail,
} from 'components/Input';
import { Save as ButtonSave } from 'components/Button';
import { City as SelectCity } from 'components/Select';
import Form from './Form.jsx';

const Wrapper = styled(Form)`
	flex-direction: column;
	width: 440px;
		${({ tablet, mobile, theme }) => {
    const type = (tablet || mobile)
        ? 'primaryMobile'
        : 'primaryDesktop'

    return `
    align-items: ${theme.form[type].alignItems};
    width: ${theme.form[type].width};
     `
}
    }
`;

class User extends React.Component {

    render = () => {
        const { mobile, tablet } = this.props;
        return <Wrapper
            mobile={ mobile }
            tablet={ tablet }>
            <InputName/>
            <InputEmail/>
            <SelectCity/>
            <ButtonSave>
                Добавить
            </ButtonSave>
        </Wrapper>;
    };
};
export default connect((state) => ({
    ...state.resolution,
}))(User);
//export default User;
