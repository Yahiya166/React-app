import React, {Component} from 'react' ;
// import { Link } from "react-router-dom";



class About extends Component {
    gotohome = () => {
        this.props.history.push('/')

        // console.log("Running")
    }

    render(){
        return(
            <div>
                <h1> About page </h1>

                {/* <Link to="/"> Go to Home Page </Link> */}

                <button onClick={this.gotohome} className="btn2 "> Go to Home Page </button>

            </div>
        )
    }
} 


export default About;