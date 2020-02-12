import React from 'react';

class Item extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <>
        <li style={{cursor: 'pointer'}} onClick={() => this.props.onClick()} >({this.props.item.Id}) {this.props.item.title}</li>
        <p style={{cursor: 'pointer'}} onClick={() => this.props.onClickMinus(this.props.item.Id)} >-</p>
        </>
    )
    
    
  }
}

export default Item;
