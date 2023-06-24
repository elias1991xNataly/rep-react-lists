const spinner = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif';

// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Spinner.scss';

// const Spinner = props => (
// 	<div>This is a component called Spinner.</div>
// );
const Spinner = () => {

	return (
		<div>
			<img src={spinner} alt="loading spinner" />
		</div>
	)
}
	;


export default Spinner;

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Spinner extends React.Component {
//   render() {
//     return <div>This is a component called Spinner.</div>;
//   }
// }

// const SpinnerPropTypes = {
// 	// always use prop types!
// };

// Spinner.propTypes = SpinnerPropTypes;

