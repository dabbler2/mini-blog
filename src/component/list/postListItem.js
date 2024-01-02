import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: calc(100%-32px);
	padding: 5px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border: 1px solid purple;
	border-radius: 5px;
	cursor: pointer;
	background: orange;
	:hover {
		background: skyblue;
	}
`

const TitleText = styled.p`
	font-size: 20px;
	font-weight: bold;
`

function PostListItem(props){
	const {post,onClick} = props
	return (
		<Wrapper onClick={onClick}>
			<TitleText>{post.title}</TitleText>
		</Wrapper>
	)
}

export default PostListItem