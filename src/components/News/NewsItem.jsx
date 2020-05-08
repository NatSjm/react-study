import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import imagesList from 'img/news_images';
import Block from 'components/Block';
import NewsItemHeader from './NewsItemHeader';


const Wrapper = styled(Primary)`
	flex-direction: column;
	width: 90%;
	margin: 0 auto;
	padding: 20px;
	border-bottom: 1px solid #B7B8B7;
	height: 220px;
	background-color: white;
	align-items: flex-start;
	justify-content: flex-start;
	padding-left: 200px;
	position: relative;
	&:before{
	  content: '${(props) => props.id};';
	  width: 180px;
	  height: 180px;
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
	}
	
`;

class NewsItem extends React.Component {

    render = () => {
        const {
            id,
            title,
            description,
            published,
            category
        } = this.props.newsItem;

        return <Wrapper id={id}>
            <NewsItemHeader>
                <span>
                    {new Date(published).toLocaleString()}
                </span>
                <span>
                    {category}
                </span>
            </NewsItemHeader>
            <h3>
                {title}
            </h3>
            <Block>
                {description}
            </Block>
        </Wrapper>;
    };
};

export default NewsItem;
