import styles from './style/style.module.css';
import PropTypes from 'prop-types';
import EmojisBox from './EmojisBox';
import { useState, useEffect } from 'react';
import { filterEmojis } from '../../src/utils/filterEmojis';

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setfilteredEmojis] = useState([]);

  useEffect(() => {
    setfilteredEmojis(
      filterEmojis({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);

  return (
    <div className={styles.emojisGrid}>
      {filteredEmojis.map((data, index) => (
        /* merender sebuah string menjadi sebuah element HTML  */
        <EmojisBox key={index} title={data.title} symbol={data.symbol} />
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};

export default Emojis;
