import { createGlobalStyle } from 'styled-components'
import styled from "styled-components/macro";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: sans-serif;
  }
`

export const Title = styled.h3`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const ListWrapper = styled.div`
  list-style-type: none;
  flex-flow: column;
  flex-wrap: wrap;
  flex-direction: row;
`
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`
export const Button = styled.button`
  max-width: 30%;
  align-self: flex-end;
  align-content: center;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #bf7279;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ca9499;
  }
`
export const ButtonLink = styled.div`
  max-width: 100%;
  min-height: 100%;
  font-size: 13px;
  align-content: center;
  align-self: flex-start;
  padding: 0.3em;
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
export const Container = styled.div`
  background: rgb(191, 114, 121, 0.2);
  width: 100%;
  margin: 25px auto;
  padding: 10%;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #ff0000;
  text-align: left;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
`
export const CardContainer = styled.div`
  background: rgb(0, 152, 255, 0.2);
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  box-shadow: 0px 0px 2px #ff0000;
  border-radius: 5px;
  width: 90%;
  margin: 25px auto;
  padding: 10%;
  border: none;
  text-align: left;
`
export const AvatarCard = styled.div`
  padding: 1em;
  display: flex;
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