import React, { Component } from 'react';
import './Development.css';


class Development extends Component {
    constructor() {
        super();
        this.state = {
            title1: "The Design",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, adipisci earum natus saepe corporis asperiores mollitia modi provident deserunt dolore quam eveniet quasi, vitae voluptatem eaque ipsum itaque esse labore delectus nesciunt quae dolorem odio. Suscipit expedita possimus est doloribus! Similique explicabo nisi recusandae, laborum iure non molestias facilis, odio harum mollitia accusantium eius unde eveniet, nobis impedit quasi! Pariatur similique consectetur ex autem temporibus delectus reiciendis, nam deserunt? Perferendis!",
            designContent: true,
            productionContent: false

        }
        this.showDesign = this.showDesign.bind(this);
        this.showProduction = this.showProduction.bind(this);

    }

    showDesign() {
        console.log("working")
        this.setState({designContent: true, productionContent: false})
    }

    showProduction() {
        this.setState({productionContent: true, designContent: false})
    }

    render() {

        return (
            <div className="main-section-bottom__right-section">
            <div className="main-section-bottom__right-section-header-container">
                    <span className="tight-section__header">Development</span>
                </div>
            <div className="main-section-bottom__right-section__container">
            <div className="tabs-container">
            <input type = "radio" className="design-radio" checked />
            <label className="design-label show" htmlFor = "main-section-bottom__right-section__content" style = {this.state.designContent ? {backgroundColor: "white"} : {backgroundColor: "lightgrey"}} onClick={this.showDesign}>The Design</label>
            {this.state.designContent ? 
                <div className="inputs-content design-content">
                <h3 className="right-section-content__header">{this.state.title1}</h3>
                <p className="right-section-content__paragraph italic">{this.state.content}</p>
                <button className="blue-btn btn__read-more">Read More</button>
            </div> : null }
            <input type = "radio" className="production-radio" />
            <label className="production-label" htmlFor = "main-section-bottom__right-section__content" style = {this.state.designContent ? {backgroundColor: "lightgrey"} : {backgroundColor: "white"}} onClick={this.showProduction}>The Production</label>
            {this.state.productionContent ?
            <div className="inputs-content production-content">
                <h3 className="right-section-content__header">The Production</h3>
                <p className="right-section-content__paragraph italic production-paragraph">{this.state.content}</p>
                <button className="blue-btn btn__read-more tabs-read-more" >Read More</button>
            </div> : null}
        </div>
    </div>

        </div>
        )
    }
}

export default Development;
