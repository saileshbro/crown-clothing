import React from 'react'
import './custom-button.styles.scss'
const CustomButton = ({
	children,
	isGoogleSignin,
	inverted,
	...otherProps
}) => (
	<button
		{...otherProps}
		className={`custom-button ${isGoogleSignin ? 'google-sign-in' : ''} ${
			inverted ? 'inverted' : ''
		}`}>
		{children}
	</button>
)
export default CustomButton
