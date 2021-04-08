import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'
import bgHeader from "../images/Appheader.png";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: sans-serif;
    padding: 0;
  }
`
// HEADER
export const HeaderWrapper = styled.section`
  background-image: url(${bgHeader});
  background-position: center center; 
  position: relative; 
  height: 100%;
  width: 150vmax;
  max-width: 1400px;
  max-height: 471px;
  min-height: 20em;
  min-width: 400px;
`
export const HeaderSection = styled.section`
  font-size: 3em;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
`
// WRAPPER
export const GridWrapper = styled.section`
  max-width: 1400px;
  display: flex;
  flex-flow: column;
  grid-template-rows: auto 1vmax auto;
  align-items: center;
  justify-content: flex-start;
`
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  justify-content: flex-start;
`
export const ListWrapper = styled.div`
  list-style-type: none;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const FormWrapper = styled.div`
  list-style-type: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`
// FORM
export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  height: 3rem;
  min-width: 10rem;
  background: #f9f9fa;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 1rem;
  transition: all 0.3s ease-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`
export const Button = styled.button`
  max-width: 30%;
  align-self: flex-end;
  align-content: center;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #bf7279;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  z-index: 1;
  :hover {
    background: #ca9499;
  }
`
export const ButtonLink = styled.div`
  max-width: 30%;
  font-size: 13px;
  align-content: center;
  align-self: flex-start;
  color: rgb(253, 249, 243);
  background: #bf7279;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #de4655;
  }
`
export const Textarea = styled.textarea`
  background-image: linear-gradient(hsl(190, 10%, 98%), hsl(190, 10%, 94%));
  min-width: 2vh;
  min-height: 5rem;
  padding: 1ex;
  font-size: 1vh;
  color: #000000;
`
export const Title = styled.h2`
  font-weight: bold;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`
// CONTAINER
export const Container = styled.div`
  background: rgba(191, 114, 121, 0.2);
  margin: 2rem 2rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-flow: column;
  transition: all 0.3s ease-out;
  text-decoration: none;
  color: inherit;
`
export const ListItemContainer = styled.div`
  background: rgba(191, 114, 121, 0.2);
  display: flex;
  width: 20rem;
  min-height: 20rem;
  border-radius: 40px 0 40px 0;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  flex-flow: column;
  transition: all 0.1s ease-out;
  text-decoration: none;
  color: inherit;

  :hover {
    background: rgb(255, 240, 240);
`
export const AdviceContainer = styled.div`
  background: rgb(191, 114, 121, 0.2);
  text-align: center;
  max-width: 25rem;
  margin: 2rem 2rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`
export const CardContainer = styled.div`
  background: rgb(0, 152, 255, 0.2);
  width: 100vh;
  margin: 2rem 2rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-flow: column;
`
export const AvatarCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: inherit;
  img {
    box-shadow: 0 0 10px 2px hotpink;
    width: 3.3em;
    height: 3.3em;
    border-radius: 50%;
    position: absolute;
    left: 1.75em;
  }
  div {
    height: 1.5em;
    width: 18em;
    padding: 0.5em 2em 1.75em 4em;
    background: #f6f3e7;
    text-align: center;
  }
`
export const Nav = styled.section`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 0.25em;
  border-radius: 5px;
  background: rgb(191, 114, 121, 0.3);
  padding: 1.5em;
`

export const Footer = styled.footer`
  width: 90%;
  text-align: center;
`

