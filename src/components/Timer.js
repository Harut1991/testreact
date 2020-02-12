import React from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = this.getDate();
  }

  getDate = () => {return {time: new Date()}};

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(this.getDate())
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.time.toString()}</div>
  }
}

export default Timer;
