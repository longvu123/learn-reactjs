import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';

Album.propTypes = {
    albumList: PropTypes.array
};

Album.defaultProps = {
    albumList: []
}
const test = () => (
    <div>

    </div>
);


function Album({ albumList }) {
    return (
        <>
            <ul className='album-item'>
                {albumList.map(album => (
                    <li><AlbumItem key={album.id} album={album} /></li>
                ))}
            </ul>
        </>
    );
}

export default Album;