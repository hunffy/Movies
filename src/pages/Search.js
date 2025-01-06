import { useParams } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchLogo from "../assets/images/free-icon-search-interface-symbol-54481.png";
const Search = () => {
  const param = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(param.name);
    console.log("param값(userName):", user);
  }, [param, user]);
  return (
    <SearchPage>
      <SearchTit>{user}님의 올영은 무엇인가요?</SearchTit>
      <MovieSearch>
        <MovieSearchInput placeholder="영화제목을 입력해주세요." />
        <SearchButton>
          <SearchBtnLogo src={SearchLogo} />
        </SearchButton>
      </MovieSearch>
      <SearchResult></SearchResult>
    </SearchPage>
  );
};

export default Search;

const SearchPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SearchTit = styled.div`
  font-size: 3rem;
  height: 20%;
`;
const MovieSearch = styled.div`
  display: flex;
  width: 50%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;
const MovieSearchInput = styled.input`
  height: 100px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1;
  padding: 0;
  font-size: 1.5rem;
`;

const SearchButton = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #ffffff;
`;

const SearchBtnLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const SearchResult = styled.div``;
