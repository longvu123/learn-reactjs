import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

AlbumItem.propTypes = {
    album: PropTypes.object
};

AlbumItem.defaultProps = {
    album: {}
}

function AlbumItem({ album }) {

    return (
        <div className="col-3 fn-item">
            <img src={album.thumb} alt={album.name} className="img-responsive fn-thumb" />
            <div className="des">
                <h3 className="title-item ellipsis-2">
                    <a href="/album/Pop-Viet-Ngay-Nay-Hoang-Dung-AMEE-Duc-Phuc-Truc-Nhan/ZE7BI8ZZ.html#home_musictheme_01" title="Pop Việt Ngày Nay - Hoàng Dũng, AMEE, Đức Phúc, Trúc Nhân{album.name}" className="txt-primary fn-name fn-link _trackLink" tracking="_frombox=#home_musictheme_01">
                        {album.name}
                    </a>
                </h3>
            </div>

        </div>
    );
}

export default AlbumItem;