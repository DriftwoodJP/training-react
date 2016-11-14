import React, {PropTypes} from 'react';

/**
 * class Todo
 */
class Todo extends React.Component {
  /**
   * @return {string} <li></li>
   */
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
      >
      {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
