import React from 'react';
import PropTypes from 'prop-types';

NewsItem.propTypes = {
    news: PropTypes.object
};
NewsItem.defaultProps = {
    news: {}
}

function NewsItem({ news }) {
    return (
        <>
            <div className="col-6 mar-b-25">
                <article className="eva-aut-dsbv-items d-flex">
                    <figure className="eva-aut-dsbv__img mar-r-20">
                        <a>
                            <img src={news.img} alt={news.title} className="img-fluid img-cover" />
                        </a>
                    </figure>
                    <header className="eva-aut-dsbv__tit flex-1 mw-0">
                        <h3>{news.img}</h3>
                    </header>
                </article>
            </div>
        </>
    );
}

export default NewsItem;