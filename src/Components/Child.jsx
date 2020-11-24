import React, { Component } from 'react';


class Child extends Component {
    // static getDerivedStateFromProps(props) {
    // console.log("getDerivedStateFromProps==> Children", props)
    //     return null
    // }

    // componentWillUnmount(){
    //     console.log("Component khallas.....")
    // }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}




export default Child;