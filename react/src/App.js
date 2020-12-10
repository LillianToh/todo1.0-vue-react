import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: ["apple", "orange", "jackfruit"]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const item = {
      value: this.state.item
    };
    const list = [...this.state.list];
    list.push(item);
  }

  // featureList(props) {
  //   const items = props.items;
  //   const listItems = items.map((item) =>
  //     <li key={item.toString()}>
  //       {item}
  //     </li>
  //   );
  //   return (
  //     <ul>{listItems}</ul>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <h3>To Do List</h3>

        {/* <div>
          {this.featureList}
        </div> */}

        <form>
          <label>
            What are you going to do:
            <input
              type="text"
              value={this.state.item}
              onChange={e => this.handleChange("item", e.target.value)}
            />
          </label>
        </form>

        <div>
          {/* <button onClick={alert("I was clicked")}>Add to List</button> */}
          <button onClick={e => this.handleSubmit(e)}>Add to List</button>
        </div>
      </div>
    );
  }
}

export default App;
