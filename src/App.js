import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  return <div className={styles.container}></div>;
}

export default App;
