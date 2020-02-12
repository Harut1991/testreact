import React from 'react';
import Item from './Item';

class Test1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem('data')) || [
        {
          Id: 1,
          title: 'Name1'
        }
      ]
    }
  }

  handleChildClicked = () => {
    var lastItem = this.state.data[this.state.data.length - 1];
    this.setState({
      ...this.state,
      data: [...this.state.data, {Id: lastItem.Id + 1, title: `Name${lastItem.Id + 1}`}]
    }, () => {
      localStorage.setItem('data', JSON.stringify(this.state.data));
    });
  }

  handleMinusChildClicked = (data) => {
    this.setState({
      ...this.state,
      data: this.state.data.filter(item => item.Id !== data)
    }, () => {
      if (!this.state.data.length) {
        localStorage.removeItem('data');
        this.setState({
          ...this.state,
          data: [{
            Id: 1,
            title: 'Name1'
          }]
        }, () => {
          localStorage.setItem('data', JSON.stringify(this.state.data));
        });
      }else localStorage.setItem('data', JSON.stringify(this.state.data));
    });
  }

  render() {
    return <ul>
      {
       this.state.data.map((item, index) => {
         return <Item onClick={this.handleChildClicked} onClickMinus={(data) => this.handleMinusChildClicked(data)} key={index} item={item} />
       })
      }
    </ul>
  }
}

export default Test1;
