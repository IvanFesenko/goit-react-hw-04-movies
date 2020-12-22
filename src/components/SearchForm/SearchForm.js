import { useState } from 'react';

import s from './SearchForm.module.css';

function SearchForm({ onSearch }) {
  const [query, setstate] = useState('');

  const handleChange = ({ target }) => {
    setstate(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </>
  );
}

export default SearchForm;
