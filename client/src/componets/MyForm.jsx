import  { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit} className="w-full max-w-xs mr-4 Form">
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            placeholder="Enter your first name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange}
            placeholder="Enter your last name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
      </>
    );
  }
}

export default MyForm;