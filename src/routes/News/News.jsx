import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {news} from 'components/Store/actions';
import Block from 'components/Block';
import {PageTitle} from 'components/Text';
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
            <PageTitle>Новости</PageTitle>
            {(data && data.length)
                ? (() => {
                    return data.map((item, i) => {
                        return <NewsItem
                                key={ i }
                                newsItem={ item }/>
                            });
                })()
                : <Loader/>
            }
                </Block>;
    };
};

export default connect((store) => ({
    data: store.news,
}), (dispatch) => ({
    news: bindActionCreators(news, dispatch),
}))(News);
