import React from 'react';
import PropTypes from 'prop-types';
import News from './components/News';


function Newslist(props) {
    const newsList = [
        {
            id: 1,
            title: 'title 1',
            img: 'https://cdn.eva.vn/upload/3-2022/images/2022-07-05/medium/cover-1657034673-195-width640height480.jpg'
        },
        {
            id: 2,
            title: 'title 2',
            img: 'https://cdn.eva.vn/upload/3-2022/images/2022-07-05/medium/cover-1657034673-195-width640height480.jpg'
        },
        {
            id: 3,
            title: 'title 3',
            img: 'https://cdn.eva.vn/upload/3-2022/images/2022-07-05/medium/cover-1657034673-195-width640height480.jpg'
        },
    ];
    return (
        <div>
            <News newsList={newsList} />
        </div>
    );
}

export default Newslist;