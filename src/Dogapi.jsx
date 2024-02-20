import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: {}, // Changed to an object
      loading: true
    };
  }

  componentDidMount() {
    // Fetch data from an API after the component has been mounted
    fetch('http://localhost:8900/laptops')
      .then(response => response.json())
      .then(data => {
        this.setState({ laptops: data, loading: false }); // Changed state to laptops and removed .facts
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { laptops, loading } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>Laptop Models</h2>
            <ul> {/* Changed to ul for list */}
              {Object.keys(laptops).map((model, index) => (
                <li key={index}>
                  <h3>{model}</h3> {/* Changed to display laptop model as heading */}
                  <p>Brand: {laptops[model].brand}</p> {/* Accessing brand from laptop object */}
                  <p>Processor: {laptops[model].processor}</p> {/* Accessing processor from laptop object */}
                  <p>RAM: {laptops[model].ram}</p> {/* Accessing RAM from laptop object */}
                  <p>Price: ${laptops[model].price}</p> {/* Accessing price from laptop object */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default MyComponent;
