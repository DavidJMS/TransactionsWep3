import styled from 'styled-components'

export const Heading = styled.h1`
  width: ${({ width }) => width || '100%'};
  font-weight: ${({ fontWeight }) => fontWeight || 'initial'};
  font-size: ${({ fontSize }) => fontSize || 'initial'};
  margin: ${({ margin }) => margin || 'initial'};
  color: ${({ color }) => color || 'inherit'};
`
