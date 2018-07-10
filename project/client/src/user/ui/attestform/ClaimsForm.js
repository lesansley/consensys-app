import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import { attributes } from '../../../helpers/attributes';

const attributeOptions = [];
Object.keys(attributes).map(key => {
  return attributeOptions.push({
    key: attributes[key].value,
    value: attributes[key].value,
    text: key
  });
});

class ClaimsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      value: '',
      property: ''
    };
  }

  onSubmit = ev => {
    ev.preventDefault();
    this.props.onClaimsFormSubmit(this.state);
  }

  onChange = (ev, { name, value }) => {
    ev.preventDefault();
    this.setState({ [name]: value });
  }
  render() {
    return(
      <Form onSubmit={this.onSubmit} autoComplete='off'>
        <Form.Group>
          <Form.Select
            search
            selection
            autoComplete='off'
            name='property'
            onChange={this.onChange}
            placeholder='Select...'
            options={attributeOptions}
            value={this.state.property}
          />
          <Form.Input
            name='value'
            type='text'
            onChange={this.onChange}
            value={this.state.value}
          />
          <Form.Button content='Attest' />
        </Form.Group>
      </Form>
    );
  }
}

ClaimsForm.propTypes = {
  onClaimsFormSubmit: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired
};

export default ClaimsForm;
