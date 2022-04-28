import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: whitesmoke;
  border-top: 2px darkseagreen;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 270px;


  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100px;
  margin: 0 auto;
  /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 120px;
`;

export const Row = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fill,
  //minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
    minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #444444;
  margin-bottom: 5px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
