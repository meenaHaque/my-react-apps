import PropTypes from 'prop-types'

const Button = (props ) => {
const  { color, text, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
      aria-label='toggle'
      data-testid='toggle'
    >
      {text}
    </button> 
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
