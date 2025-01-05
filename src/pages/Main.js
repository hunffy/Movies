import styled from "styled-components";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate("");
  return (
    <MainPage>
      <title>올영 : 올해의 영화</title>
      <TitleWrapper className="TitleWrapper">
        <Title>올영: 올해의 영화</Title>
      </TitleWrapper>
      <LogoWrapper>
        <LogoText>올영?</LogoText>
      </LogoWrapper>
      <DescriptionWrapper>
        <Description>다른 사람들과 공유해 보아요</Description>
      </DescriptionWrapper>
      <ButtonWrapper>
        <ChoiceButton
          onClick={() => {
            navigate("/inputname");
          }}
        >
          영화 초이스하러 가기
        </ChoiceButton>
      </ButtonWrapper>
    </MainPage>
  );
};

export default Main;

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  border-radius: 10px;
  height: 40%;
  background-color: yellowgreen;
  color: black;
  text-align: center;
`;

const LogoText = styled.h1`
  width: 100%;
  height: 25%;
  font-size: 2rem;
  font-weight: bold;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
`;

const Description = styled.h1`
  font-size: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

const ChoiceButton = styled.button`
  width: 15%;
  height: 50px;
  background-color: yellowgreen;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
