import { Component } from "react";

import List from "./Components/List/index";

import "./App.css"

class App extends Component {

  state = {
    arr: [1, 2],
  }
  componentDidMount() {
    this.timerId = setInterval(this.onUpdateArray, 1000)
  }

  componentWillUnmount() {

    clearInterval(this.timerId)

  }
  updateStyle = (i) => {
    const { arr } = this.state
    if (arr.length === 100) {
      if (i % 6 === 0) {

        return "orange"
      }
      else if (i % 3 === 0) {
        return "green"
      }
      else if (i % 2 === 0) {
        return "blue"
      }

    }
  }

  onUpdateArray = () => {
    const { arr } = this.state
    const updatedNumbers = [...arr, arr.length + 1]
    this.setState({ arr: updatedNumbers })
  }
  render() {
    let { arr } = this.state

    if (arr.length === 100) {

      this.componentWillUnmount()

    }


    return (
      <div className="bg-container">
        <h1>Array</h1>
        {arr.length === 100 ? arr.map((each, i) => <List value={each} style={this.updateStyle(each)} />)
          : arr.map((each, i) => <List value={each} />)}


      </div>


    )
  }
}

export default App;
