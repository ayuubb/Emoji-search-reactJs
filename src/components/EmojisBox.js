import styles from './style/style.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useState, useEffect } from 'react';

const EmojisBox = ({ title, symbol }) => {
  const [selected, setselected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setselected(false), 600);

    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol);
        setselected(true);
      }}
      className={classnames(styles.emojisBox, {
        [styles.selected]: selected,
      })}
    >
      <p
        className={styles.emoji}
        dangerouslySetInnerHTML={{
          __html: `&#${symbol.codePointAt(0)}`,
        }}
      />

      <p className={styles.emojiText}>{title}</p>
    </div>
  );
};

EmojisBox.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default EmojisBox;
