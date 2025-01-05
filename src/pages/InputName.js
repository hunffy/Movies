import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";

const InputName = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate("");
  const nextButtonHandler = () => {
    if (name === "") {
      alert("이름을 입력해주세요.");
      navigate("/inputname");
    } else {
      navigate(`/search/${name}`);
      setName("");
    }
  };
  return (
    <InputNamePage>
      <InputNameTitle>
        크레딧의 첫 장면을 빛내 줄 이름을 입력해주세요.
      </InputNameTitle>
      <NameInput
        placeholder="이름을 입력 해주세요."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <NextButton onClick={nextButtonHandler}>다음</NextButton>
    </InputNamePage>
  );
};

export default InputName;

const InputNamePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputNameTitle = styled.h1`
  height: 10%;
  font-size: 2.5rem;
  text-align: center;
`;

const NameInput = styled.input`
  width: 50vw;
  height: 100px;
  font-size: 1.5rem;
  border-top: none;
  border-left: none;
  border-right: none;
`;

const NextButton = styled.button`
  margin-top: 30px;
  width: 20%;
  height: 80px;
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
`;
