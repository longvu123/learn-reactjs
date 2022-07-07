import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../NewsItem';

News.propTypes = {
    newsList: PropTypes.array
};
News.defaultProps = {
    newsList: []
}
function News({ newsList }) {
    return (
        <div>
            <ul>
                {newsList.map(news => (
                    <li key={news.id}><NewsItem news={news} /></li>
                ))}
            </ul>
        </div>
    );
}

export default News;