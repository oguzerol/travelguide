import React from 'react';
import Slider from '../slider/index';
import Styles from './intro.scss';

export default class Jumbotron extends React.Component {
    render() {
        return (
            <div className={Styles.wrapper}>
                <video src={require('../../assets/video/jumbotron.mp4')} autoPlay muted loop className={Styles.video_wrapper} />

                <div className={Styles.slider_wrapper}>
                    <Slider />
                </div>
            </div>  
        )
    }
}