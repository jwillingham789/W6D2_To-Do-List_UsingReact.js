import React from 'react'
import ReactMixin from 'react-mixin'
import ReactLocalStorageMixin from 'react-localstorage'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [],
      value: ''
    }
  }
  captureEnter(e) {
    if (e.charCode === 13) {
      var items = this.state.todoItems
      items.push(e.target.value)
      this.setState({value: '', todoItems: items});
    }
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    var todoItems = this.state.todoItems.map((todoItem, i) => {
      return <li key={i}>{todoItem}</li>
    })
    return <div>
      <TodoInput value={this.state.value} onKeyPress={(e) => this.captureEnter(e)} onChange={(e) => this.handleChange(e)}/>
      <ul>
      {todoItems}
      </ul>
    </div>
  }
}

var TodoInput = (props) => <input type="text" {...props} />

ReactMixin.onClass(TodoList, ReactLocalStorageMixin)

export default TodoList
