import React from 'react'
import styled from "styled-components";


const BodyContainer = styled.div`
 
`;

const TitleBlock = styled.div`
    display:flex;
    margin-top: 90px;
    flex-direction: column;
    align-items:center;
    gap: 25px;

 h6 {
color: rgba(255, 85, 69, 1);
font-family:'Stem', sans-serif;
font-weight: 500;
font-size: 28px;
line-height:39.2px;
 }

 h1{
    font-family:'Stem', sans-serif;
font-weight: 700;
font-size:45px;
line-height:38px;
text-align:center;
 }

 p{
    font-family:'Stem', sans-serif;
font-weight: 300;
font-size:20px;
line-height:20px;
text-align:center;


 }
`
const ImageBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;

  div {
    position: relative;
    text-align: center;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  h6 {
    position: absolute;
    top: 310px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-family:'Stem', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-family:'Stem', sans-serif;
    font-weight: 700;
    font-size: 13px;
    text-align: center;
    opacity:0.7;
  }
`;

const Body = () => {
  return (
    <BodyContainer>
      <TitleBlock>
        <h6>Юридические услуги</h6>
        <h1>Представляю ваши <br />интересы</h1>
        <p>Обратитесь ко мне, в любой жизненной ситуации. <br />Вместе - мы справимся с любой задачей.</p>
      </TitleBlock>

      <ImageBlock>
        <div>
          <img src="./image/headerOne.png" alt="" />
          <h6>Семейное право</h6>
          <p>Разводы, брачные контакты. Вместе мы найдём выход</p>
        </div>

        <div>
          <img src="./image/headerTwo.png" alt="" />
          <h6>Уголовное право</h6>
          <p>Возьму в работу ваш случай на любом этапе производства</p>
        </div>

        <div>
          <img src="./image/headerThree.png" alt="" />
          <h6>Арбитражный суд</h6>
          <p>Представительство в арбитражном суде.</p>
        </div>
      </ImageBlock>
    </BodyContainer>
  );
};

export default Body;