import styled from 'styled-components'

export const Text = styled.p`
  font-weight: ${({ fontWeight }) => fontWeight || 'initial'};
  font-size: ${({ fontSize }) => fontSize || 'initial'};
  margin: ${({ margin }) => margin || 'initial'};
  color: ${({ color }) => color || 'inherit'};
`
export const HeadingText = styled.h1`
  ::selection {
    background: ${({ color }) => color || 'inherit'};
  }
`
