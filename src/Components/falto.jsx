import React, { Component } from 'react';
// import LOGOIMAGE from '../Images/5d4db6e517a689e87c4266f61d77f803.png'




// class App extends Component{
//     render(){
//       return(
// <div>
//   <Header />
//   <br />
//   <br />
//   {/* <Logo /> */}
//   <br />
//   <br />
//   <h1> Main Component </h1>
//   <br/>
//   <BasicTextFields />
//   <br/>
//   <br/>
//   <button type="button" className="btn btn-dark"> Dark </button>
//   <br/>
//   <br/>
//   <Footer />
// </div>
//       )
//     }
//   }







// function App() {
//   return (
//     <div className="App">

//       <h1>Hello World</h1>

//     </div>
//   );
// }



// const name = "Yahiya";

// class Falto extends ReactComponent{
//   render() {
//     let firstName = "Yahiya";
//     let lastName = "Asif";
//     let fullName = firstName + " " + lastName
//     let arr = [1, 2, 3, 4, 5];

//     return(
//       <div>

//       <h1> {`${firstName} ${lastName}`} </h1>
//       <h1> {fullName} </h1>
//       <h1> {arr} </h1>

//       </div>      
//   )
//   }
// }













// class App extends Component{
//   render(){
//     let todos = [{name: "Yahiya"},{name: "Asif"}];
//     return(
//       <div>
//         <ul>
//           {todos.map((item,index)=>{
//             console.log(index)
//             console.log(item.name)
//           })}
//         </ul>
//       </div>
//     )
//   }
// }









// class App extends Component{
//   render(){
//     let todos = [{name: "Yahiya"},{name: "Usaid"}];
//     return(
//       <div>
//         <ul>
//           <li>{todos[0].name}</li>
//           <li>{todos[1].name}</li>
//         </ul>
//       </div>
//     )
//   }
// }










// class App extends Component{
//   render(){
//     let todos = [{name: "Yahiya"},{name: "Usaid"},{name: "Amna"},{name: "Mariyam"}];
//     return(
//       <div>
//         <ul>
//           {todos.map((item,index)=>{
//             return <li key={index}> {item.name} </li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }







// class Header extends Component{
//   render(){
//     return(
//       <div className="Header">
//       <h2>Header Component</h2>
//       </div>
//     )
//   }
// }











// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Header />
//           <h1 style={{backgroundColor: "blue"}}>Main Component</h1>
//           {/* <h1 style={{color: "blue", fontSize: 16, margin: "5px"}}> Component</h1> */}
//           <Footer />
//       </div>
//     )
//   }
// }












// class Footer extends Component{
//   render(){
//     return(
//       <div className="Footer">
//         <h2> Footer Component </h2>
//       </div>
//     )
//   }
// }














// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Header />
//         <h1> Main Component </h1>
//         {/* <img src="https://images.pexels.com/photos/1098662/pexels-photo-1098662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Car" width="200"/> */}
//           <Footer />
//       </div>
//     )
//   }
// }











// class Logo extends Component{
//     render(){
//       return(
//         <div>
//             <h2 className="Logo">LOGO</h2>
//         </div>
//       )
//     }
//   }












// class Logo extends Component{
//   render(){
//     return(
//       <div>
//          <img src={LOGOIMAGE} alt="Car" width="200px"/>
//       </div>
//     )
//   }
// }






// class App extends Component {

//     getData(data) {
//       console.log(data);
//     }

//   render() {
//       return(
//         <div>
//         <h1> Parent Component </h1>
//         <br/>
//         <br/>
//         <Header getData={this.getData} name="House" pricing="10000000" />
//         </div>
//       )
//     }
// };






// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Parent Component</h1>
//         <Header  name="House" pricing="10000000"/>
//       </div>
//     )
//   }
// }




// class App extends Component {
//   render(){
//     return(
//       <div>
//        <AppRouter />
//       </div>
//     )
//   }
// }







// class App extends Component {
//   render(){
//     return(
//       <div>
//         <center>
//         <h1 style={{marginTop: "250px"}}>React LifeCycle</h1>
//         </center>
//       </div>
//     )
//   }
// }





// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       count : 0,
//       data : []
//     }
//   }

//   render(){
//     // console.log("Data ==> ", this.state.data)

//     return(
//       <div>

//         <center>
//         <h1 style={{marginTop: "250px"}}>React LifeCycle</h1>
//         {/* {this.state.data.map((value,index) => {
//           return(
//           <h4 key={index}>{value.title}</h4>
//           )
//         })} */}

//         </center>

//       <h4 style={{textAlign: 'center'}}>
//         {this.state.count}
//       </h4>

//       </div>
//     )
//   }
// }



// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       count : 0,
//     }
// //     console.log("constructorr")
//   }


//   //   static getDerivedStateFromProps() {
// //     // console.log("getDerivedStateFromProps")
// //     return{
// //       count : 5
// //     }
// //   }


//   // shouldComponentUpdate(){
//   //   // return false

//   //   if (this.state.count < 5) {
//   //     return true
//   //   } else {
//   //     return false
//   //   }
//   // }


// //   // componentDidMount(){
// //   //   // console.log("componentDidMount")
// //   //   // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //   //   fetch('https://jsonplaceholder.typicode.com/todos')
// //   // .then(response => response.json())
// //   // // .then(json => console.log(json)) 
// //   // .then(data =>  {
// //   //  this.setState({
// //   //    data : data
// //   //  })
// //   // })
// //   // .catch(err => {
// //   //   console.log(err)
// //   // })
// //   // }

//   // staticgetDerivedStateFromProps(props, state) {
//   //   console.log("getDerivedStateFromProps==> ", state)
//   //       return null
//   //   }


//     // getSnapshotBeforeUpdate(preProps, preState){
//     //   console.log("getSnapshotBeforeUpdate ==>", preState)
//     //   return 10
//     // }

//     // componentDidUpdate(preProps, preState, snapShot){
//     //   console.log("componentDidUpdate ==>", snapShot)
//     // }


//     // {Child Component}
//      // componentWillUnmount(){
//     //     console.log("Component khallas.....")
//     // }

//   render(){
//     // console.log("render..")
//     return(
//       <div style={{textAlign: 'center', marginTop: '200px', marginBottom: '30px'}}>

//       <h1>
//         {this.state.count}
//       </h1>
//       {/* {this.state.count < 5 && <Child count={this.state.count} />} */}
//       <button className="btnnn" onClick={()=> this.setState({count: this.state.count + 1})}> Increament </button>
//       <button className="btnnn" onClick={()=> this.setState({count: this.state.count - 1})}> decreament </button>

//       </div>
//     )
//   }
// }













// class App extends Component{
//         constructor(){
//             super()
//             this.state = {
//               name: "Yahiya Asif",
//               email: "muhammadyahiya166@gmail.com",
//               // name1: ""
//             }
//             // this.set_name = this.set_name.bind(this)
//         };


//         // set_name() {
//         //   console.log(this.state.name)
//         //   console.log(this.state.email)
//         // }


//         // set_name = ()=> {
//         //   // this.setState({name: this.State.name1});
//         //   // this.setState({
//         //   //   name : "Usaid"
//         //   // });


//         //   // console.log(this.state.name)
//         //   // console.log(this.state.email)
//         // };  


//         // get_name = ()=> {
//         //   console.log(this.state.name)
//         // }



//         set_value(e){


//           this.setState({
//             [e.target.name]: e.target.value
//           })



//           // console.log(e.target.name)
//           // console.log(e.target)
// }


// get_props= (props)=>{
//     console.log(props);
// }

// render(){
//   return(
//     <div>
//     {/* <Header /> */}
//     {/* <Header page="App Page" /> */}
//     <Header get_props={this.get_props} name={this.state.name} email={this.state.email}/>
//     <br/> 
//     <h2>My name is "{this.state.name}" </h2>
//     <h4>My email is "{this.state.email}" </h4>
//     {/* <input onChange={(e)=> this.setState({name: e.target.name})} name="name" type="text" placeholder="Enter your name" />  */}
//     <input onChange={(e)=> this.set_value(e)} name="name" type="text" placeholder="Enter your name" /> 
//     <input onChange={(e)=> this.set_value(e)} name="email" type="text" placeholder="Enter your email" /> 

//     {/* <button onClick={this.set_name}> Click </button> */}

//     {/* <button className="btnn" onClick={()=> this.set_name()}> Set Name </button> */}
//     {/* <button className="btnn" onClick={()=> this.get_name()} > Get Name </button> */}
//     <br/>
//     <br/>
//     <Footer />
//   </div>
//   )
// }
// } 









// export {
//   Header,
//   Logo
// }






// class App extends Component {
// constructor(){
// super()
// this.state = {
// count : 0,
// }
// }
// render(){
// console.log("Redux_Data=>",this.props)
// return(
// <div style={{textAlign: 'center', marginTop: '200px', marginBottom: '30px'}}>
{/*  */ }
{/* <h1> */ }
// {this.state.count}
{/* </h1> */ }
// {this.state.count < 5 && <Child count={this.state.count} />}
{/* <button className="btnnn" onClick={()=> this.setState({count: this.state.count + 1})}> Increament </button> */ }
{/* <button className="btnnn" onClick={()=> this.setState({count: this.state.count - 1})}> decreament </button> */ }
{/* <br/> */ }
{/* <button className="btnnn" onClick={()=> this.props.set_data("Hello brothers")}>Set Data</button> */ }
{/* </div> */ }
    // )
  // }
// }
// const mapStateToProps = (state) => ({
    // username: state.auth.username,
    // email: state.auth.email,
    // app_name: state.app.app_name
// })
// 
// 
// const mapDispatchToProps = (dispatch) => ({
  // set_data: (data)=> dispatch(set_data(data))
// })
  // 
// 
// export default connect(mapStateToProps, mapDispatchToProps)(App);























// export default Falto;