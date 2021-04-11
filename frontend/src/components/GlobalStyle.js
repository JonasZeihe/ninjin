import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
      }

  html, body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  }  
  body{
  }
`
// WRAPPER
export const GridWrapper = styled.section`
  display: flex;
  flex-flow: column;
`
export const ContentWrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-flow: column;
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
  margin: 3rem 0 3rem 0;
    border-top: 1px solid #6666;
`
// FORM
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  margin: 1rem;
  height: 2rem;
  outline: none;
  background: #f9f9fa;
  border-radius: 4px;
  padding-left: 0.5rem;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 1rem;
  transition: all 0.01s ease-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  :hover {
    box-shadow: 0 0 3px rgba(162, 162, 162, 0.15);
    border-color: darkgrey;
    color: black;
    }
  :focus {
    color: #000;
    border-color: darkgrey;
  }
`
export const FileInput = styled.input`
  margin: 0 0 0.5rem 0.5rem;
  height: 2rem;
  outline: none;
  padding-left: 0.5rem;
  transition: all 0.01s ease-out;

`

export const Button = styled.button`
  text-decoration: none;
  height: 2rem;
  width: 8rem;
  margin-left: 1rem;
  text-align: center;
  color: rgb(253, 249, 243);
  text-transform: uppercase;
  background: #3da9e7;
  border: none;
  border-radius: 3px 3px 3px 3px;
  outline: 0;
  cursor: pointer;
  transition: all 0.01s ease-out;

  :hover {
    background: #3da9e7;
  }
`
export const LandingButton = styled.button`
  text-decoration: none;
  height: 2rem;
  width: 8rem;
  background: #3da9e7;
  color: rgb(253, 249, 243);
  text-align: center;
  border-radius: 3px 3px 3px 3px;
  cursor: pointer;
  margin-top: 1rem;
  padding-top: 0.45rem;
  text-transform: uppercase;
  font-size: 0.88rem;
`

export const IconButton = styled.button`
  margin: 0 0.1rem 0 0.1rem;
  width: 2rem;
  height: 2rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: inherit;
  color: inherit;
  transition: all 0.01s ease-out;
  :hover {
    background: #c8c8c8;
  }
`


export const Textarea = styled.textarea`
  background-image: linear-gradient(hsl(190, 10%, 98%), hsl(190, 10%, 94%));
  min-width: 2vh;
  min-height: 5rem;
  margin: 0 1rem 1rem 1rem;
  resize:vertical;
  border-radius: 3px;
  color: #000000;
`
export const Title = styled.section`
  font-weight: bold;
  font-size: 1.3rem;
  color: #2a2a29;
  margin: 1rem 0 0 1rem;
`
export const FormTitle = styled.section`
  font-weight: bold;
  font-size: 1rem;
  color: #2a2a29;
  margin: 2rem 0 1rem 1rem;
`
export const PageTitle = styled.h2`
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: bold;
  text-align: left;
  color: #2a2a29;
`

// CONTAINER

export const PreviewContainer = styled.section`
  width: 15rem;
  height: 9rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  overflow: hidden;

`
export const PreviewImage = styled.img`
  border-radius: 40px 0 0 0;
  filter: opacity(0.9);
  width: 100%;
  max-height: 18rem;
  align-self: center;
  margin-bottom: 1rem;
  max-width: 100%;
  bottom: 0;
  left: 0;
  -o-object-fit: contain;
  object-fit: contain;
  :hover {
    filter: opacity(1);
  }
`

/*export const Container = styled.section`
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
`*/

export const LandingContainer = styled.section`
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

export const UserItemContainer = styled.section`
  background: hsl(0, 0%, 95%);
  display: flex;
  margin: 1rem;
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
`

export const CardSpan = styled.span`
  margin-left: 1rem;
  font-weight: bold;
  color: #2a2a29;
`

export const PreviewSpan = styled.span`
  font-weight: bold;
  margin-left: 0.5rem;
  color: #2a2a29;
`
export const UserSpan = styled.span`
  font-weight: bold;
  margin: 0.5rem;
  color: #2a2a29;
`

export const CardImage = styled.img`
  border-radius: 3px;
  margin-bottom: 1rem;
  max-width: 100%;
  max-height: 100%;
  bottom: 0;
  left: 0;
  overflow: auto;
  -o-object-fit: contain;
  object-fit: contain;
`

export const CardIconContainer = styled.span`
  display: flex;
  justify-content: flex-start;  
  flex-flow: row;
`

export const HeaderLogo = styled.h2`
    position: relative;
    color: #3da9e7;
`

export const MarkdownContainer = styled.section`
margin-left: 1rem;
`
