import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {news} from 'components/Store/actions';
import Block from 'components/Block';
import Text from 'components/Text';
import {NewsItem} from 'components/News';
import Loader from 'components/Loader'

class News extends React.Component {
    static defaultProps = {
        data: [],
    };

    componentDidMount = () => {
        this.props.news.get();
    };

    render = () => {
        const {data} = this.props;
        return <Block>
            <h1>Новости</h1>
            {(data && data.length)
                ? (() => {
                    return data.map(({
                                         id,
                                         title,
                                         description
                                     }, i) => {
                        return <NewsItem key={i}>
                            <Text>
                                {id} {title}
                            </Text>
                            <Block>
                                {description}
                            </Block>
                        </NewsItem>;
                    });
                })()
                :
                <Loader/>
            }
                    </Block>;
    };
};

export default connect((store) => ({
    data: store.news,
}), (dispatch) => ({
    news: bindActionCreators(news, dispatch),
}))(News);
