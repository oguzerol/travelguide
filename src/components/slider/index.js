import React from 'react';
import Swiper from 'react-id-swiper';
import Styles from './slider.scss';



export default class Slider extends React.Component {
    render() {
        const params = {
            slidesPerView: 3,
            freeMode: true,
            loop: true,
        }

        return (
            <div  className={Styles.wrapper}>
                <Swiper {...params}>
                    <div className={Styles.item}>Slide 1</div>
                    <div className={Styles.item}>Slide 2</div>
                    <div className={Styles.item}>Slide 3</div>
                    <div className={Styles.item}>Slide 4</div>
                    <div className={Styles.item}>Slide 5</div>
                    <div className={Styles.item}>Slide 6</div>
                    <div className={Styles.item}>Slide 7</div>
                    <div className={Styles.item}>Slide 8</div>
                    <div className={Styles.item}>Slide 9</div>
                    <div className={Styles.item}>Slide 10</div>
                </Swiper>
            </div>
        )
    }
}