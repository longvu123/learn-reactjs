import React from 'react';

import Album from './components/Album';

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name: 'test 1',
            thumb: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/c/7/d/dc7dbafbec3621bfacd250e35ce647f9.jpg'
        },
        {
            id: 2,
            name: 'test 2',
            thumb: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/0/8/a/b08a2c701f308ba92261e83441dbe124.jpg'
        },
        {
            id: 3,
            name: 'test 3',
            thumb: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/2/b/5/62b5e6ba4a349f5759a7eed572c3dbad.jpg'
        },
        {
            id: 4,
            name: 'test 4',
            thumb: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/1/e/9/c1e9ab8ee8e8f4f86554e58628d76a2d.jpg'
        },
    ];
    return (
        <div>
            <Album albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;