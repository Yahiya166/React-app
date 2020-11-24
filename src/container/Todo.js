import React from 'react';
import firebase from './config/firebase';
// import firebase from './config/firebase.js';
import './App.css';  


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // todos : [],
      todos : [{text: "Yahiya" , edit : false}, {text: "Usaid"}, {text: "Asif"}],
      // todos : ["Yahiya","Usaid","Asif"],
      value : "" 
    }
    // this.add_todos = this.add_todos.bind(this)
    // this.edit_todos = this.edit_todos.bind(this)
  }

  // add_todos(){
  //   this.state.todos.push(this.state.value)

  //   this.setState({
  //     todos: this.state.todos,
  //     value : ""
  //   })



  //   // console.log(this.state.todos)
  // };




  add_todos = () => {
    let obj = {text : this.state.value}
    firebase.database().ref("/").child("todos").push(obj)
    this.setState({
      todos : [...this.state.todos,obj],
      // todos : [...this.state.todos,this.state.value],
      value : ""
    })

    // console.log(this.state.value)
  }



  delete_todos = (index) => {

    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })




    // console.log(index)
  }

// edit_todos = (index, value) => {

//   // let updated_value = prompt("Enter value") 

//   // this.state.todos[index] = updated_value;
//   // // this.state.todos
//   // this.setState({
//   //   todos: this.state.todos
//   // })

 
 
 
 
//   // console.log(index)
//   };


  edit_todos = (index, value) => {
  
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
}



hand_changed = (e,index) => {
  this.state.todos[index].text = e.target.value;
  this.setState({
    todos: this.state.todos
  })


  // console.log(e.target.value,index)
}



update_todos =(index) => {
  this.state.todos[index].edit = false;
  this.setState({
    todos: this.state.todos
  })
}



  

  render() {
    let { todos , value} = this.state
    return(
        <div>
          <input value={value} onChange={(e)=> this.setState({value: e.target.value})} type="text" name="todo" placeholder="Enter value" />
          <button onClick={this.add_todos}> Add Items </button>
          <ul>
            {todos.map((value,index)=>{
               {/* return <li key={index}> {value}  */}
              return <li key={index}>
                 {value.edit? <input value={value.text} type="text" onChange={(e)=> this.hand_changed(e,index)} /> : value.text} 
                 {value.edit?  <button onClick={()=>this.update_todos(index)}> Update Items </button>
                 :
                  <button onClick={ () => this.edit_todos(index)}>Edit Items</button>
            }
              <button onClick={ () => this.delete_todos(index)}> Delete Items </button>
              </li>
            })}
          </ul>
        </div>
    )
  }
}


export default App;