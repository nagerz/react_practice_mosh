import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    // tags: ["tag1", "tag2", "tag3"]
    // tags: []
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //Instead of this custom constuctor method which rebinds 'this' event handler
  //   constructor() {
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //Arrow functions don't rebind 'this' keyword, they inherit it
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>No tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {this.state.tags.length === 0 && "Create new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
