import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions/index';

export class UnconnectedInput extends Component {
  render() {
    const contents = this.props.success 
      ? null
      : (
        <form className="form-inline" onSubmit>
          <input 
            data-test="input-box" 
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
          />
          <button 
            data-test="submit-button"
            className="btn btn-primary mb-2"
            onClick={() => this.props.guessWord('train')}
            type="submit"
          >Submit</button>
        </form>
      )
    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};;

const actions = { 
  guessWord
}

export default connect(mapStateToProps, actions)(UnconnectedInput);