import React from 'react';

class TimeApp extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div >
        <p>Sent: {this.state.curDT}</p>
      </div>
    );
  }
}

export default TimeApp;