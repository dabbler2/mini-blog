import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import TextInput from '../ui/textInput'
import Button from '../ui/button'

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

function PostWritePage(props){
	const navigate = useNavigate()
	const [title,setTitle] = useState('')
	const [content,setContent] = useState('')
	
	return (
		<Wrapper>
			<Container>
				<TextInput height={20} value={title} onChange ={event => setTitle(event.target.value)} />
				<TextInput height={400} value={content} onChange ={event => setContent(event.target.value)} />
				<Button title='write post' onClick={() => navigate('/')} />
			</Container>
		</Wrapper>
	)
}

export default PostWritePage