import React from 'react';

class Ref extends React.Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus();
  }
  
  render() {
    return <input ref={this.inputRef} type="text" />;
  }
}

export default Ref;
