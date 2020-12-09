import React, { Component } from 'react';

import s from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSearch } = this.props;
    onSearch(query);
  };

  render() {
    return (
      <>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </>
    );
  }
}

// function MoviesSearch(params) {
//   return <div></div>;
// }
export default SearchForm;
