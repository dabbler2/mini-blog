import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	padding: 5px;
	font-size: 15px;
	border-width: 1px;
	border-radius: 5px;
	cursor: pointer;
`

function Button(props){
	const {title,onClick} = props
	return <StyledButton onClick={onClick}>{title || 'Click!'}</StyledButton>
}

export default Button