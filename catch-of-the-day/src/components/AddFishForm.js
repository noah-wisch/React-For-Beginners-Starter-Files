import React from 'react';

class AddFishForm extends React.Component {
  render() {
    return (
      <form className="fish-edit">
      <input type="text" placeholder="Fish Name"/>
      <input type="text" placeholder="Fish Price"/>
      <input type="text" placeholder="Fish Status"/>
      <input type="text" placeholder="Fish Desc"/>
      <input type="text" placeholder="Fish Image"/>
      <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
