import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 26px 40px 26px 40px;
`;

const Title = styled.div`
  font-family:'Stem', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align:center;
`;

const ForMe = styled.ul`
  font-family:'Stem', sans-serif;
  font-style:normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  align-items: center;
  display: flex;
  gap: 35px;
  list-style: none;
  padding: 0;

  & li {
    margin-right: 15px;
  }
`;

const Button = styled.button`
  background-color: #ff5545;
  color:white;
  border-radius: 6px;
  border: none;
  padding: 12px 24px 12px 24px;
  font-family:'Stem', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  font-style: normal;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  font-family:'Stem', sans-serif;
  
  & p {
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Title>Михельсон</Title>

      <ForMe>
        <li>Виды услуг</li>
        <li>Как я работаюю</li>
        <li>Отзывы</li>
        <li>Контакты</li>
      <Contacts>
        <p>Звоните прямо сейчас!</p>
        <p>+7 495 123-45-67</p>
      </Contacts>
      <Button>Заказать звонок</Button>
      </ForMe>

    </NavbarContainer>
  );
}

export default Navbar;
