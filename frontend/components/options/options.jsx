import React from 'react'
import {withRouter} from 'react-router-dom'

class Options extends React.Component {
    constructor(props) {
        super(props)

        this.handleIndexClick = this.handleIndexClick.bind(this)
        this.handleCreateClick = this.handleCreateClick.bind(this)
    }

    handleIndexClick() {
        this.props.history.push("/listings")
    }

    handleCreateClick() {
        this.props.history.push("/listings/create")
    }


    render() {
        return(
        <div className = "options-links">
                {/* Will eventually go to search bar */}
            <div className = "option-link" onClick = {this.handleIndexClick}>
                <div className = "buy-home">
                </div>
                <p className = "headline option-block">Buy a home</p>
                <p className = "option-block-text">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <button className = 'sign-in-button option-block-button'>Search homes</button>
            </div>
            <div className = "option-link" onClick = {this.handleCreateClick}>
                <div className = "sell-home">
                </div>
                <p className = "headline option-block">Sell a home</p>
                <p className = "option-block-text">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                <button className = 'sign-in-button option-block-button'>See your options</button>
            </div>
            <div className = "option-link" onClick = {this.handleIndexClick}>
                <div className = "rent-home">
                </div>
                <p className = "headline option-block">Rent a home</p>
                <p className = "option-block-text">Whether you get a cash offer through Zillow Offers® or choose to sell traditionally, we can help you navigate a successful sale.</p>
                <button className = 'sign-in-button option-block-button'>Find rentals</button>
            </div>
        </div>)
    }
}

export default withRouter(Options)