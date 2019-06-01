import React, { Component } from 'react';
import Picture from './components/Picture';
import Button from './components/Button';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [
        {id: 1, src: 'https://via.placeholder.com/200x100/f70'},
        {id: 2, src: 'http://via.placeholder.com/700x350/9fd6ea'},
        {id: 3, src: 'http://via.placeholder.com/400x200/f9c2fc'}
      ],
      currentPic: null
    };
  
    this.setCurrentPic = this.setCurrentPic.bind(this);
  }

  setCurrentPic(id) {
    this.setState({currentPic: id});
  }

  render () {
    return (
      <div>
        <div className='squares'>
          {this.state.pictures.map((picture) => {
            return (
              <Picture key={picture.id} src={picture.src}>
                <Button
                  pictureSrc={picture.src}
                  setCurrentPic={this.setCurrentPic}
                  id={picture.id}
                />
              </Picture>
            )
          })}
        </div>
          <p className='output'>
            Current selected picture ID is {this.state.currentPic}
          </p>
      </div>
    )
  }
}

export default App;
