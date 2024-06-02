import PropTypes from 'prop-types';

export default function Template({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
