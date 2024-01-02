import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import PostList from '../list/postList'
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

function MainPage(props){
	const navigate = useNavigate()
	
	return (
		<Wrapper>
			<Container>
				<Button title='write post' onClick={() => navigate('/post-write')} />
				<PostList posts={data} onClickItem={item => navigate(`/post/${item.id}`)} />
			</Container>
		</Wrapper>
	)
}

export default MainPage