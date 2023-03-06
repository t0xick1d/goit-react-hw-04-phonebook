import PropTypes from 'prop-types';
import ItemList from './ItemList';

import style from './NumberList.module.css';

function NumberList({ list = [], deleteContact }) {
  return (
    <>
      <div className={style.title}>Contacts</div>
      <ul className={style.list}>
        {list.map(e => {
          return (
            <ItemList
              key={e.id}
              id={e.id}
              name={e.name}
              number={e.number}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </>
  );
}

export default NumberList;

NumberList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
