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
};

const accordion = (state = defaultProps, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default accordion;
