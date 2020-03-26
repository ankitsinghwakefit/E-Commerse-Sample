import React, { Component } from 'react'

export default class EmptyCart extends Component {
    render() {
        console.log("from each empty", this.props)
        return (
            <div>
                <div>
                                                <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
                                                <div className="column">
                                                    <figure className="image is-64x64">
                                                        <img src={this.props.eachProduct.img}/>
                                                    </figure>
                                                </div>
                                                <div className="column">
                                                    {this.props.eachProduct.title}
                                                </div>
                                                <div className="column">
                                                {this.props.eachProduct.price}
                                                </div>
                                                <div className="column">
                                                <button className="button ">-</button>
                                                <button className="button ">2</button>
                                                <button className="button ">+</button>
                                                </div>
                                                <div className="column">
                                                    <button className="button ">Remove All</button>
                                                </div>
                                                <div className="column">
                                                {this.props.eachProduct.total}
                                                </div>
                                                    </div>
                                                </div>
            </div>
        )
    }
}
