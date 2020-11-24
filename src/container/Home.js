import React, {Component} from 'react' ;

// import { Link } from "react-router-dom"; 




class Home extends Component {
    gotoabout = () => {
        this.props.history.push('/about')

        // console.log("Runing")
    }

    render(){
        return(
            <div>
                <h1>Home page</h1>

                {/* <Link to="/about"> Go to About Page </Link>  */}

                <button onClick={this.gotoabout} className="btn1"> Go to About Page </button>

            </div>
        )
    }   
} 


export default Home;