const defaultProps = {
    accordionItems: [{
        title: 'First',
        content: '444444444444'
    }, {
        title: 'Second',
        content: '22222222'
    }, {
        title: 'Third',
        content: '3333333333'
    }],
    activeIndex: -1,
};

const accordion = (state = defaultProps, action) => {
    switch (action.type) {
        case 'CHANGE_INDEX':
            return {
                ...state,
                activeIndex: state.activeIndex === action.payload
                    ? -1
                    : action.payload
            };
        default:
            return state;
    }
};

export default accordion;
