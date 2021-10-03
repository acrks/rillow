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
            <div className = "option-link" onClick = {this.handleIndexClick}>
                Buy A Home
            </div>
            <div className = "option-link" onClick = {this.handleIndexClick}>
                Rent A Home
            </div>
            <div className = "option-link" onClick = {this.handleCreateClick}>
                Sell A Home
            </div>
        </div>)
    }
}

export default withRouter(Options)