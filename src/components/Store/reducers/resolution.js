const defaultProps = {
    mobile: false,
    tablet: false,
};

const resolution = (state = defaultProps, action) => {
    switch (action.type) {
        case 'TABLET':
            return {...state, mobile: false, tablet: true};

        case 'MOBILE':
            return {...state, mobile: true, tablet: false};

        case 'DESCTOP':
            return {...state, mobile: false, tablet: false};

        default:
            return state;
    }
};

export default resolution;
