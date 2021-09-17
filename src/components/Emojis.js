import styles from './style/style.module.css';
import PropTypes from 'prop-types';
import EmojisBox from './EmojisBox';
import { useState, useEffect } from 'react';
import { filterEmojis } from '../../src/utils/filterEmojis';
import Empty from './Empty';

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

  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          /* merender sebuah string menjadi sebuah element HTML  */
          <EmojisBox key={index} title={data.title} symbol={data.symbol} />
        ))}
      </div>
    );
  } else {
    return <Empty text="Ga Ketemu" />;
  }
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};

export default Emojis;
