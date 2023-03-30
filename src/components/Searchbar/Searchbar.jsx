import React from 'react';
import styles from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = props => {
  const { onSubmit } = props;
  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={onSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
