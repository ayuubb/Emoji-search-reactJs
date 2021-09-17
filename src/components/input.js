import styles from './style/style.module.css';
import PropTypes from 'prop-types';

const Input = ({ onChange, value }) => {
  return <input className={styles.input} onChange={onChange} placeholder="Search" value={value} />;
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
