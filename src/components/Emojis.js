import styles from './style/style.module.css';
import PropTypes from 'prop-types';
import EmojisBox from './EmojisBox';

const Emojis = ({ emojisData }) => {
  return (
    <div className={styles.emojisGrid}>
      {emojisData.map((data, index) => (
        /* merender sebuah string menjadi sebuah element HTML  */
        <EmojisBox key={index} title={data.title} symbol={data.symbol} />
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
};

export default Emojis;
