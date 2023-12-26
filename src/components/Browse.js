import React from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';

function Browse() {

    useNowPlayingMovies();

    return (
        <div>
            <Header />
            Browse    
        </div>
    )
}

export default Browse;
