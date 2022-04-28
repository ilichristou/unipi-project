import styled from 'styled-components';

export const Box = styled.div`
padding: 20px;
background: white;
  align-content: center;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 40px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;

&:hover {
	color: #9fc5e8;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 50px;
font-weight: bold;
`;
