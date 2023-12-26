import React from 'react';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';

function GptSearch() {
    return (
        <>
            <div className="absolute -z-10">
                <img className="" src={BG_URL} alt="logo" />
            </div>
            <div className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    );
}

export default GptSearch;
