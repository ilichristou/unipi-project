import React from 'react';
import {Link, Typography} from "@material-ui/core";
import {img} from '../components/news-img'

const Card = (props) => {

    const marginTop = {marginTop: 15}

    return (
        <div className='tc bg-lightest-blue hover-bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5?100x100'>
            {/* eslint-disable-next-line no-undef */}
            <img alt='photo' src={'https://robohash.org/S{props.id}?20x20'}/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}
                </p>
            </div>
        </div>
    );
}

export default Card;