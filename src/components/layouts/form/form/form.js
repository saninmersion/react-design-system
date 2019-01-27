import React, { Component } from "react";
import PropTypes from "prop-types";
import FormService from "api/formService";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { ...this.props.fields }
    };
  }

  handleChange = e => {
    this.setState({ fields: { name: e.target.value } });
  };

  handleSubmit = e => {
    const { fields } = this.state;
    const { endpoint } = this.props;

    // FormService.submit(endpoint, fields).then(res => {
    //   console.log(res);
    // });

    e.preventDefault();
  };

  resetForm = () => {
    this.setState({
      fields: { ...this.props.fields }
    });
  };

  render() {
    const { fields } = this.state;
    const { hasReset } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.renderFields(fields, this.handleChange)}
        <input type="submit" value="Submit" />
        {hasReset && <span onClick={this.resetForm}>Reset</span>}
      </form>
    );
  }
}

export default Form;

Form.defaultProps = {
  hasReset: false
};

Form.propTypes = {
  fields: PropTypes.shape({}).isRequired,
  renderFields: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
  hasReset: PropTypes.bool
};
