import React from "react";
import "./App.css";

// function FeatureList(props) {
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [
        { id: 0, value: "apple" },
        { id: 1, value: "orange" },
        { id: 2, value: "jackfruit" }
      ],
      txt: "red"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    const item = {
      id: Math.random(),
      value: this.state.item
    };
    const list = [...this.state.list];
    list.push(item);
    this.setState({
      item,
      list
    });
    console.log(this.state);
  }

  handleComplete() {
    console.log("I was clicked");
    this.setState({
      txt: "grey"
    });
  }

  render() {
    return (
      <div className="App">
        <h3>To Do List</h3>

        <form>
          <div>
            <label>
              What are you going to do:
              <input
                type="text"
                onChange={e => this.handleChange("item", e.target.value)}
              />
            </label>
          </div>
          <button onClick={e => this.handleSubmit(e)}>Add to List</button>
        </form>

        <ol>
          {/* <li> {this.state.list[0]} </li>
          <li> {this.state.list[1]} </li>
          <li> {this.state.list[2]} </li> */}

          {this.state.list.map(e => {
            return (
              <li
                key={e.id}
                style={{ color: this.state.handleComplete }}
                onClick={() => this.handleComplete()}
              >
                {e.value}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
