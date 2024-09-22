import React, { MouseEventHandler, MutableRefObject, useRef, useState } from 'react'
import styled from '@emotion/styled'
import Plus from '../UI/Plus'
import Minus from '../UI/Minus'
import { css, keyframes } from '@emotion/react'


interface IProps{
	question: string
	answer: string
	isOpen: boolean
	onClick: MouseEventHandler
}



const AccordionItem = ({ question, answer, isOpen, onClick } : IProps) => {
	const contentHeight = useRef() as MutableRefObject<HTMLInputElement>
	 return(
		 <Wrapper >
		 <WrapperQuestion className={`question-container ${isOpen ? 'active' : ''}`}   onClick={onClick}>
			<Question className='question-content'>{question}</Question>
			{/* {isOpen ? <Minus/> : <Plus/>} */}
			<WrapperPlus className={isOpen ? 'active' : ''}><Plus/></WrapperPlus>
		 </WrapperQuestion>
 
			<AnswerContainer ref={contentHeight} className="answer-container" style={
					 isOpen
					 ? { height:  contentHeight.current.scrollHeight + 25 }
					 : { height: "0px" }
					}>
			 <Answer className="answer-content">{answer}</Answer>
			</AnswerContainer>
		</Wrapper>
	 )
 }
	const WrapperPlus = styled.div`
 		hight: 24px;
		width: 24px;
		transition: 1s;
		&.active{
		transform: rotate(45deg);
		}
	`
 const Wrapper = styled.div`
 		border-bottom: 1px solid #EDEDED;
		padding-top: 56px;
 	overflow: hidden;
	
`
const Question = styled.p`
 		font-size: 24px;
		line-height: 150%;
		letter-spacing: 0;
		font-weight: 700;
`
const Answer = styled.p`
 		color: #7E8492;
		max-width: 660px;
		font-size: 18px;
		line-height: 32px;
		letter-spacing: 0;
`
const WrapperQuestion = styled.button`
 width: 100%;
 align-items: center;
 		display: flex;
		justify-content: space-between;
			transition: all ease 0.3s;
			&:hover{
		cursor: pointer;
		opacity: 0.9;	
	}
`
const AnswerContainer = styled.div`
 	padding-top: 32px;
	transition: all ease 1s;
`
export default AccordionItem;