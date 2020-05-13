import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import imagesList from 'img/news_images';
import Block from 'components/Block';
import NewsItemHeader from './NewsItemHeader';
import {connect} from "react-redux";

const Wrapper = styled(Primary)`
    padding: 20px;
    flex-direction: column;
	width: 90%;
	margin: 0 auto;
	border-bottom: 1px solid #B7B8B7;	
	background-color: white;
	align-items: flex-start;
	justify-content: flex-start;
	position: relative;
	&:before{	
	  content: '';  	
	  background-color: grey;
	  background-image: url(${(props) => imagesList[props.id]});
	  background-repeat: no-repeat;
	  background-size: cover;
	  position: absolute;
	  left: 0;
	  top: 20px;
	}
	
	& h3{
	color: rgba(23, 24, 32);
	font-size: 20px;
	margin: 16px 0 ;
	}
	
    ${({tablet, mobile, theme}) => {
    const type = tablet
        ? 'primaryTablet'
        : mobile
            ? 'primaryMobile'
            : 'primaryDesktop';

    return `
    padding-left: ${theme.news[type].paddingLeft};
    height: ${theme.news[type].newsItemHeight};
    &:before{
       display: ${theme.news[type].imageDisplay};
       width: ${theme.news[type].imageSize};
       height: ${theme.news[type].imageSize};
    }  
    
        `
} }
`;

class NewsItem extends React.Component {

    render = () => {
        const { mobile, tablet } = this.props;
        const {
            id,
            title,
            description,
            published,
            category
        } = this.props.newsItem;

        return <Wrapper
            id={id}
            mobile={mobile}
            tablet={tablet}>
            <NewsItemHeader>
                <span>
                    {new Date(published).toLocaleString()}
                </span>
                <span>
                    {category}
                </span>
            </NewsItemHeader>
            <div>
            <h3>
                {title}
            </h3>
            <Block>
                {description}
            </Block>
            </div>
        </Wrapper>;
    };
};


export default connect((state) => ({
    ...state.resolution,
}))(NewsItem);
