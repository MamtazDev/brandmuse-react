import React from 'react';
import Marquee from "react-fast-marquee";
import LetsTalk from './LetsTalk';

const MarqueeFast = () => {
    return (

        <div className='marqueeContainer'>
            <Marquee direction='right' speed={100}>
                <LetsTalk />
                <LetsTalk />
                <LetsTalk />
                <LetsTalk />
            </Marquee>
        </div>
    );
};

export default MarqueeFast;