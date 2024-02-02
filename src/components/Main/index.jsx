import React from 'react'
import styled from 'styled-components';


const MainContainer = styled.div`

padding:155px;
`;

const TextContainer = styled.div`
    display:flex;
   flex-direction: row;
    
    


    h1{
        width:50%;
text-align:start;
font-family:'Stem', sans-serif;
font-weight: 700;
font-size: 55px;
line-height:50px;
    }

    p{
    width:50%;
text-align: start;
font-family:'Stem', sans-serif;
font-weight: 700;
font-size:15px;
line-height: 24px;
    }

`;

const ImageBlock = styled.div`
margin-top: 120px;
    display: flex;
    flex-direction: row;
    gap: 25px;

img {
    border-radius: 20px;
}

div {


    
    img {
   
        margin-top: 20px;
    }
}
`




const Main = () => {
  return (
    <MainContainer>
        <TextContainer>

        <h1>12 лет <br/>частной <br/>практики</h1>
        <p>Юристы компании «Юридическое Бюро 812» уже долгие годы ведут успешную практику в предоставлении услуг физическим и юридическим лицам в различных правовых сферах, решая вопросы любой сложности. Наши специалисты осуществляют представительство в государственных органах и обеспечивают защиту интересов в суде. Мы определяем перспективы уже на первичной консультации! Наши юристы имеют большой опыт по представлению интересов структур малого и среднего бизнеса в различных правовых вопросах, возникающих в процессе их деятельности. Наши адвокаты и юристы представляют интересы доверителей в Арбитражном суде Санкт-Петербурга и ЛО, в государственных органах и учреждениях, а также осуществляют комплексное абонентское обслуживание по вопросам любой сложности.</p>
        </TextContainer>

        <ImageBlock>
           <img src='./image/manglasses.png' alt='man'/> 
           <div>
           <img src='./image/diplom.png' alt='diplom'/>
           <img src='./image/svidet.png' alt='svidetelstvo'/>
           </div>
        </ImageBlock>

    </MainContainer>
  )
}

export default Main;