import React, { Component } from "react";

class Dropdown extends React.Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="connectWallet"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://calendar.google.com/calendar/u/0/r/eventedit?dates=20211223T220000Z/20211223T230000Z&location=undefined&text=Mint+Event+&details=This+is+the+sample+event+provided+as+an+example+only", "_blank");
            }}
        >
            
          <i className="fa fa-calendar" aria-hidden="true"></i>Add to Calendar
        </button>
      </div>
    );
  }
}

export default Dropdown;
