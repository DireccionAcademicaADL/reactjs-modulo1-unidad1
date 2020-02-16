import styled from "styled-components";

const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  height: 100%;
  background-color: #000000;
`;

export const Header = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: center;
  padding: ${px2vw(10)};
  margin: ${px2vw(10)};
  height: 100%;
`;

export const Input = styled.input`
  flex: 2;
`;

export const Button = styled.button`
flex: 1;
background-color: #EE2233;
color: #FFFFFF;
height: 40px;
`

export const Titulo = styled.h3`
  color: #FFFFFF;
  font-size: 1rem;
  text-align: center;
  paddingLeft: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxHamburguesa = styled.div`
  margin-top: ${px2vw(20)};
  width: 100%;
  height: 80%;
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Rellenos = styled.div`
  margin-top: ${px2vw(20)};
  color: #FFFFFF;
  font-size: 1rem;
  width: 100%;
  height: 40%;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const BoxSalsas = styled.div`
  margin-top: ${px2vw(20)};
  width: 100%;
  height: 60%;
  color: #FFFFFF;
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Salsa = styled.li`
margin-top: ${px2vw(20)};
color: #FFFFFF;
font-size: 1rem;

@media (min-width: 1024px) {
  font-size: 1rem;
}
`;