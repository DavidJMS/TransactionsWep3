import styled from 'styled-components'

export const Box = styled.div`
  width: ${({ width }) => width || '100%'};
  min-height: ${({ minH }) => minH || 'unset'};
  padding: ${({ padding }) => padding || 'unset'};
  background: ${({ bg }) => bg || 'unset'};
  color: ${({ color }) => color || 'initial'};
  text-align: ${({ textAlign }) => textAlign || 'initial'};
  border-radius: ${({ borderRadius }) => borderRadius || 'unset'};
  display: ${({ display }) => display || 'block'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  margin: ${({ margin }) => margin || 'initial'};
`
