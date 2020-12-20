import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                Navbar
                {this.props.totalcounters}
            </div>
        )
    }
}

export default Navbar
