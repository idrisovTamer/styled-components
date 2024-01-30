import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
  filter: brightness(70%);
`;

const TextBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 10%;
  text-align: center;
  color: white;
`;

const Heading = styled.h1`
  font-family: Stem;
  font-weight: 700;
  font-size: 64px;
  line-height: 68px;
  margin-bottom: 10px;
  text-align: left;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  color: #ffffffcc;
  font-family: Stem;
  font-weight: 500;
  font-size: 24px;
  line-height: 31.2px;
  text-align: left;
`;

const Button = styled.button`
  position: absolute;
  top: 100%;
  background-color: #ff5545;
  color: white;
  padding: 15px 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
font-family:Stem;
font-weight:500;


`;

const SecondButton = styled(Button)`
  left: 20%;
  padding: 15px 35px;
  background-color: white;
  color: #ff5545;
  margin-left: 100px;


`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage src="./image/image.png" alt="Logo" />
      <TextBlock>
        <Heading>
          Михельсон <br />
          Сергей
        </Heading>
        <Paragraph>
          Ваш юрист по уголовному <br />и гражданскому праву. Более 12 лет{" "}
          <br />
          юридической практики.
        </Paragraph>
        
      <Button>Стоимость услуг</Button>
      <SecondButton>Узнать подробности</SecondButton>
      </TextBlock>

    </HeaderContainer>
  );
};

export default Header;
