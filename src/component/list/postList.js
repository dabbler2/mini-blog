import React from 'react'
import styled from 'styled-components'
import PostListItem from './postListItem'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	& > * {
		:not(:last-child){
			margin-bottom: 5px;
		}
	}
`

function PostList(props){
	const {posts,onClickItem} = props
	return (
		<Wrapper>
			{posts.map(post => (
				<PostListItem key={post.id} post={post} onClick={() => onClickItem(post)} />
			))}
		</Wrapper>
	)
}

export default PostList