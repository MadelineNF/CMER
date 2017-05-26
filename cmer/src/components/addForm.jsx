import React, { Component } from 'react';

class AddForm extends Component {
  
  render() {
    return (
      <div id="AddForm">
       <form>
        <input type='text' placeholder='song link'></input>
        <input type='text' placeholder='artist'></input>
        <input type='text' placeholder='title'></input>
        <button>save</button>
       </form>
      </div>
    );
  }
}

export default AddForm;