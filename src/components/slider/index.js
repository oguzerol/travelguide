import React from 'react';
import Swiper from 'react-id-swiper';
import Styles from './slider.scss';
import sliderController from './sliderController';



export default class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.sliderCont = new sliderController();

        this.state = {
            result: []
        }
    }

    componentDidMount() {
        this.sliderCont.fetchSearchTopStories().then(result => {
            this.setState({result});
            console.log(result)
        });
    }

    sliderItem(item) {
        return (
            <div className={Styles.item} key={item.id}>
                <div className={Styles.content} >
                    <img src={item.preview.images[0].source.url} alt="text" />
                    <div className={Styles.text_wrapper}>
                        <p>{item.title}</p>
                    </div>
                </div>
            </div>
        )
    }
    
    render() {
        const params = {
            slidesPerView: 3,
            freeMode: true,
            loop: true,
            rebuildOnUpdate: true
        }

        const myItems = [];

        this.state.result.forEach(item => {
            myItems.push(this.sliderItem(item));
        })

        return (
            <div className={Styles.wrapper}>
                <Swiper {...params}>
                    {myItems}
                </Swiper>
            </div>
        )
    }
}