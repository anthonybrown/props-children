import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureId: null,
      label: null
    };
    this.buttonLabel = this.buttonLabel.bind(this);
  }
  buttonLabel(src) {
    src.includes('200x100') 
    ? this.setState({pictureId: this.props.id, label: 'Small'})
    : src.includes('400x200') 
    ? this.setState({pictureId: this.props.id, label: 'Medium'})
    : this.setState({pictureId: this.props.id, label: 'Large'})
  }
  
  componentDidMount() {
    this.buttonLabel(this.props.pictureSrc)
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.setCurrentPic(this.props.id)}
        >
          {this.state.label}
        </button>
      </div>
    )
  }
}

export default Button;