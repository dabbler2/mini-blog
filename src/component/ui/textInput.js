import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
	width: calc(100%-32px);
	${props => props.height && `height:${props.height}px`}
	padding: 5px;
	font-size: 15px;
	line-height: 18px;
`

function TextInput(props){
	const {height,value,onChange} = props
	return <StyledTextarea height={height} value={value} onChange={onChange} />
}

export default TextInput