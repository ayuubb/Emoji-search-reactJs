import styles from './style/style.module.css';
import PropTypes from 'prop-types';

const Emojis = ({ emojisData }) => {
  return (
    <div className={styles.emojisGrid}>
      {emojisData.map((data, index) => (
        <div>
          {/* merender sebuah string menjadi sebuah element HTML  */}
          <p
            dangerouslySetInnerHTML={{
              __html: `&#${data.symbol.codePointAt(0)}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
};

export default Emojis;
