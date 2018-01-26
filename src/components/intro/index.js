import React from 'react';
import Slider from '../slider/index';
import Styles from './intro.scss';
import { Link } from 'react-router-dom';

export default class Jumbotron extends React.Component {
    render() {
        return (
            <div className={Styles.wrapper}>
                <div className={Styles.intro_brand}>  
                <Link to={`/`}  data-content="Travel Guide" >Travel Guide</Link>
                </div>
                <div className={Styles.slider_wrapper}>
                    <Slider />
                </div>
            </div>  
        )
    }
}