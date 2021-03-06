import React, {Component} from 'react';

export default class AddRealEstateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      zip: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  onCancel() {
    this.props.onCancel();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={this.state.name}
            name="name" onChange={this.handleChange} />
        </div>
        <div>
          <label>Address: </label>
          <input type="text" value={this.state.address}
            name="address" onChange={this.handleChange} />
        </div>
        <div>
          <label>City: </label>
          <input type="text" value={this.state.city}
            name="city" onChange={this.handleChange} />
        </div>
        <div>
          <label>Zip: </label>
          <input type="text" value={this.state.zip}
            name="zip" onChange={this.handleChange} />
        </div>
        <button type="button"
          onClick={this.onCancel}
          className="btn btn-default btn-sm">Cancel</button>
        <button type="submit"
          className="btn btn-success btn-sm">Submit</button>
      </form>
    );
  }
}
