import React, { Component } from 'react';
import LOGOO from '../Images/logo-transparent.png';





// class Header extends Component{
//     render(){
//         return(
//             <div className="Header">
//                 <h2> Header Component </h2>
//                 {/* <Logo /> */}
//             </div>
//         )
//     }
// }


// export default class Header extends Component{
//     render(){
//         return(
//             <div>
//                 <h1> Header Component </h1>
//             </div>
//         )
//     }
// }


class Header extends Component {
  render() {
    // console.log("props===>", this.props)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100% ">

        < Logo />
        {/* < Logo /> {this.props.email} */}
        {/* < Logo /> <button className="btnn" onClick={()=> this.props.get_props(this.props.name)}>Send props</button> */}
        {/* < Logo /> <button onClick={()=> this.props.get_props("Yahiya")}>Send props</button> */}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"> <br /> <b> MY React App </b> <span className="sr-only">(current)</span></li>
            {/* <a className="nav-link" href="#" ></a> */}

          </ul>
        </div>
      </nav>
    )
  }
}


class Logo extends Component {
  render() {
    return (
      <div>
        <img src={LOGOO} alt="Car" width="200px" />
      </div>
    )
  }
}




export {
  Header,
  Logo
};








// class Header extends Component {
//   render(){
//     return(
//       <div>
//       <h2>{this.props.name}</h2>
//       <h4> RS: {this.props.pricing} </h4>
//       <button onClick={()=> this.props.getData("Yahiya")}> Send Data </button>
//       </div>
//     )
//   }
// }





// export default Header;