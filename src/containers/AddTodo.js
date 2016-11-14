import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

/**
 * class AddTodo
 */
class AddTodo extends React.Component {
  /**
   * @return {string} <form></form>
   */
  render() {
    let input;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          this.props.dispatch(addTodo(input.value));
          input.value = '';
        }}>
          <input ref={(node) => {
            input = node;
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(AddTodo);
