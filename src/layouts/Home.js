import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import ContactForm from "../components/ContactForm"
import Content from "../components/Content"
import Logo from "../components/Logo"

const Text = styled.p`
  font-family: "Sacramento", cursive;
  font-size: 30px;
  color: #4f4f4f;
  text-align: center;

  ${media.lessThan("medium")`
    font-size: 30px;
  `};

  ${media.greaterThan("medium")`
    font-size: 50px;
  `};
`

const Home = () => (
  <div>
    <Content>
      <Logo />
      <Text>{"Confiez votre site internet entre les mains de passionnés"}</Text>
      <ContactForm />
    </Content>
  </div>
)

export default Home
