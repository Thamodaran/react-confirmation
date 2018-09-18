import React from 'react';
import PropTypes from 'prop-types';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{position: "fixed", top: "20%", width: "100%"}}>
        <div
          style={{padding: "25px",
            backgroundColor: "#fff",
            width: "35%",
            margin: "auto",
            boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)"
          }}
        >
          <h2
            style={{height: "40px"}}
          >
            {this.props.options.title}
          </h2>
          <div
            style={{minHeight: "40px"}}
          >
            {this.props.options.message}
          </div>
          <div>
            {this.props.options.buttons.map(button => (
              <button
                type="button"
                onClick={button.onClick}
                key={button.label}
                style={{
                  background: "#000",
                  border: "1px solid #000",
                  color: "#fff",
                  padding: "5px",
                  minWidth: "100px",
                  marginRight: "10px"
                }}
              >
                {button.label}
              </button>
            ))
            }
          </div>
        </div>
      </div>
    );
  }
}

Confirmation.propTypes = {
  options: PropTypes.object.isRequired
};

export default Confirmation;
