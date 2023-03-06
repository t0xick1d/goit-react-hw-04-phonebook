import PropTypes from 'prop-types';

import style from './Filter.module.css';

function Filter({ filter, onFilterChage }) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Find contact by name</h3>
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={e => onFilterChage(e)}
        value={filter}
      />
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChage: PropTypes.func.isRequired,
};
