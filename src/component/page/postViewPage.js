import React, {useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import styled from 'styled-components'
import CommentList from '../list/commentList'
import TextInput from '../ui/textInput'
import Button from '../ui/button'
import data from '../../data.json'

const Wrapper = styled.div`
	padding: 15px;
	width: calc(100%-32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Container = styled.div`
	width: 100%;
	max-width: 1000px;
	& > * {
		:not(:last-child){
			margin-bottom: 5px;
		}
	}
`

const PostContainer = styled.div`
	padding: 5px;
	border: 1px solid purple;
	border-radius: 5px;
`

const TitleText = styled.p`
	font-size: 28px;
	font-weight: 500;
`

const ContextText = styled.p`
	font-size: 20px;
	line-height: 32px;
	white-space: pre-wrap;
`

const CommentLabel = styled.p`
	font-size: 16px;
	font-weight: 500;
`

function PostViewPage(props){
	const navigate = useNavigate()
	const {postId} = useParams()
	const post = data.find(item => item.id==postId)
	const [comment,setComment] = useState('')
	
	return (
		<Wrapper>
			<Container>
				<Button title='go back' onClick={() => navigate('/')} />
				<PostContainer>
					<TitleText>{post.title}</TitleText>
					<ContextText>{post.content}</ContextText>
				</PostContainer>
				<CommentLabel>comments</CommentLabel>
				<CommentList comments={post.comments} />
				<TextInput height={40} value={comment} onChange={event => setComment(event.target.value)} />
				<Button title='write comment' onClick={() => navigate('/')} />
			</Container>
		</Wrapper>
	)
}

export default PostViewPage