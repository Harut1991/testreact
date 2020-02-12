import React, {useState, useEffect, useReducer} from 'react';
import Test2 from './Test2';

function reducer(data) {
  switch(data.type){
    case 'plus':
      return 1
    case 'minus': 
      return 6  
  }
}
function Hook() {
  const [item, setItem] = useState(0);

  useEffect(() => {
  }, []);

  return (
    <React.Fragment>
      <p onClick={() => setItem(item + 1)}>{item}</p>
    </React.Fragment>
  )
}



export default Hook;
