import React from 'react';
import FormInput from './components/FormInput';
import Button from './components/Button';
import TodoItem from './components/TodoItem';
import './App.css';
import logo from './logo.svg'

class App extends React.Component{
  state = {
    todos: [{id: 1, nama: "reading book"},{id: 2, nama: "workout training"}]
  }

  deleteTask = id => {
    this.setState({
      todos : this.state.todos.filter(item=> item.id != id)
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id : id +1,
      nama : data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }


 render() {
  const {todos} = this.state;
  return (

    <div className="app">
      <div className='logo'>
            <img src={logo} Alt="logo" />
            <h3>Task List</h3>
      </div>
      <div className='list'>
        {todos.map (item => 
         <TodoItem key={item.id} todo={item} del={this.deleteTask}/>
         
          )}
       

      </div>

      <div className="input-form">
        <FormInput add={this.addTask} />
        <Button/>
      </div>

    </div>
  );
}
}

export default App;
