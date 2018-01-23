import React from 'react';
import Swiper from 'react-id-swiper';
import Styles from './slider.scss';


export default class Slider extends React.Component {
    render() {
        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        }

        return (
            <div  className={Styles.wrapper}>
                <Swiper {...params}>
                    <div>Slide 1</div>
                    <div>Slide 2</div>
                    <div>Slide 3</div>
                    <div>Slide 4</div>
                    <div>Slide 5</div>
                </Swiper>
            </div>
        )
    }
}