import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 40%;
border: 1px solid black;
margin: 0 auto;
`;

export default function Card(props) {
    const {item} = props;
    console.log(item)
    return (
        <Container>
            <div>
            <div>{item.text}</div>
        </div>
        </Container>
    )
}