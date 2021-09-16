import styles from './style/style.module.css';
import PropTypes from 'prop-types';

const Empty = ({ text }) => {
  return <div className={styles.empty}>{text}</div>;
};

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Empty;
