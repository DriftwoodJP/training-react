import React from 'react';
import FilterLink from '../containers/FilterLink';

/**
 * class Footer
 */
class Footer extends React.Component {
  /**
   * @return {string} <p></p>
   */
  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    );
  }
}

export default Footer;
