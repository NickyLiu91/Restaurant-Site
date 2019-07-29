import React from 'react';

export default class Home extends React.Component {

  state = {
    imageNumber: 1
  }

  componentDidMount() {
    this.changePicture()
  }

  incrementImageNumber = () => {
    if (this.state.imageNumber == 5) {
      this.setState({
        imageNumber: 1
      })
    } else {
      this.setState({
        imageNumber: this.state.imageNumber + 1
      })
    }
  }

  changePicture = () => {
    setInterval(this.incrementImageNumber, 5000)
  }

  clickChangePicture = () => {
    if (this.state.imageNumber == 5) {
      this.setState({
        imageNumber: 1
      })
    } else {
      this.setState({
        imageNumber: this.state.imageNumber + 1
      })
    }
  }


  render() {
    return (
      <div id="home">
        <img className="restaurant" src={`images/restaurant` + `${this.state.imageNumber}` + `.jpg`} onClick={this.clickChangePicture}/>
        <div>
          <p>We’ll provide our customers with great food and hospitality. They will leave happy, satisfied, and eager to pay us another visit.</p>
          <p>We are great people delivering quality food and service</p>
          <p>We will provide amazing food and service, without the usual prices attached to amazing food and service.</p>
        </div>
      </div>
    )
  }
}
