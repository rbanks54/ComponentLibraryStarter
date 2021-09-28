import React from 'react'
import '../tailwind.css'
import styled from 'styled-components'

const peerSelectors = (selector: string) => `
      peer-${selector}:-top-[20px] peer-${selector}:text-purple-500
      peer-${selector}:text-xs peer-${selector}:mt-0 `

const StyledLabel = styled.label.attrs({
  className: `absolute inset-x-4 pl-0.5 mt-4 
  text-blue-700 
  pointer-events-none 
  duration-500 
  ${peerSelectors('focus')}
  ${peerSelectors('valid')}
`
})``;

const StyledInput = styled.input.attrs({
  className: `min-w-44 pl-0.5 mt-4 
    outline-none 
    border-b-2 border-blue-500 
    peer 
  `
})``;

export const TextBox = ({label, password}: any) => {
  return (
    <div>
      <StyledInput type={!!password ? "password" : "text"} required={true} />
      <StyledLabel>{label ?? 'Enter a value'}</StyledLabel>
    </div>
  )
} 