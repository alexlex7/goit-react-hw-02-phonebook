import { Component } from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };
  render() {
    const { handleChange, filter } = this.props;
    return (
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          name="filter"
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Filter;
