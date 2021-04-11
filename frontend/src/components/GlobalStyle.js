import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'
import bgHeader from '../images/mizu-kiri.png.svg'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: Helvetica, sans-serif;
    padding: 0;
    /*
    background-image: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 97%));
    */
  }
`
// HEADER
export const HeaderWrapper = styled.section`
  background-image: url(${bgHeader});
  background-repeat: no-repeat;
`
export const HeaderSection = styled.section`
  font-size: 3em;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Montserrat', sans-serif;
`
export const HeaderImage = styled.img``

// WRAPPER
export const GridWrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1vmax auto;
`
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  justify-content: flex-start;
`
export const LandingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  max-width: 1400px;
  justify-content: flex-start;
`
export const ListWrapper = styled.section`
  list-style-type: none;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const FormWrapper = styled.section`
  list-style-type: none;
`
// FORM
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  margin:0 1rem 0 1rem;
  background: #f9f9fa;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 1rem;
  transition: all 0.3s ease-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(162, 162, 162, 0.15),
      0 1px 5px rgba(84, 84, 84, 0.1);
  }
`
export const Button = styled.button`
  margin: 0 0.1rem 0 0.1rem;
  text-decoration: none;
  height: 2rem;
  align-content: center;
  color: rgb(253, 249, 243);
  text-transform: uppercase;
  background: #bf7279;
  border: none;
  border-radius: 3px 3px 3px 3px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ca9499;
  }
`
export const Textarea = styled.textarea`
  background-image: linear-gradient(hsl(190, 10%, 98%), hsl(190, 10%, 94%));
  min-width: 2vh;
  min-height: 5rem;
  resize:vertical;
  border-radius: 3px;
  color: #000000;
`
export const Title = styled.h3`
  font-weight: bold;
  color: #2a2a29;
`
export const PageTitle = styled.h2`
  font-weight: bold;
  align-self: center;
  text-align: center;
  color: #2a2a29;
`

// CONTAINER

export const PreviewContainer = styled.section`
  width: 15rem;
  height: 6rem;
  font-size: 1rem;
  overflow: hidden;
  /*
  filter: blur(2px) sepia(100%);
  */
`
export const PreviewImage = styled.img`
  width: inherit;
  border-radius: 40px 0 0 0;
  filter: opacity(0.9);
  align-self: center;
  margin-bottom: 1rem;
  max-width: 100%;
  max-height: 100%;
  bottom: 0;
  left: 0;
  -o-object-fit: contain;
  object-fit: contain;
  /*
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2);
  */
  :hover {
    filter: opacity(1);
  }
`

export const Container = styled.section`
  background-image: linear-gradient(hsl(190, 10%, 98%), hsl(190, 10%, 94%));
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-flow: column;
  transition: all 0.3s ease-out;
  text-decoration: none;
  color: inherit;
  font-family: 'Helvetica', sans-serif;
`

export const ListItemContainer = styled.section`
  background-image: linear-gradient(hsl(0, 0%, 95%), hsl(0, 0%, 87%));
  display: flex;
  border-radius: 40px 0 40px 0;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  flex-flow: column;
  transition: all 0.1s ease-out;
  text-decoration: none;
  color: inherit;
`

export const AdviceContainer = styled.section`
  background: rgba(212, 212, 212, 0.2);
  text-align: center;
  max-width: 25rem;
  margin: 2rem 2rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`

export const CardContainer = styled.section`
  background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 87%));
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-flow: column;
`
export const Footer = styled.footer`
  text-align: center;
`

export const Span = styled.span`
  text-align: center;
  font-weight: bold;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`

export const CardSpan = styled.span`
  font-weight: bold;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`

export const PreviewSpan = styled.span`
  font-weight: bold;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`

export const CardImage = styled.img`
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  max-width: 100%;
  max-height: 100%;
  bottom: 0;
  left: 0;
  overflow: auto;
  -o-object-fit: contain;
  object-fit: contain;
`
