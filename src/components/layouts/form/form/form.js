import React, { Component } from "react";
import PropTypes from "prop-types";
import FormService from "api/formService";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { ...this.props.fields },
      errors: {}
    };
  }

  handleChange = e => {
    this.setState({ fields: { name: e.target.value } });
  };

  getFieldsData = () => {
    const { fields } = this.state;
    const { defaultFields } = this.props;

    let payload = fields;

    if (defaultFields && typeof defaultFields === "object") {
      payload = { ...fields, ...{ ...defaultFields } };
    }

    return payload;
  };

  handleSubmit = e => {
    const { endpoint, onSuccess, onError } = this.props;

    FormService.submit(endpoint, this.getFieldsData())
      .then(res => {
        onSuccess(res);
      })
      .catch(error => {
        this.setState(
          {
            error: error
          },
          () => {
            onError(error);
          }
        );
      });

    e.preventDefault();
  };

  resetForm = () => {
    this.setState({
      fields: { ...this.props.fields }
    });
  };

  render() {
    const { fields, errors } = this.state;
    const { hasReset } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.renderFields(fields, errors, this.handleChange)}
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
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  endpoint: PropTypes.string.isRequired,
  hasReset: PropTypes.bool,
  defaultFields: PropTypes.shape({})
};
