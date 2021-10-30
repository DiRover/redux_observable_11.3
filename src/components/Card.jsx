import styled from 'styled-components';
import findLink from '../services/findLink';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 40%;
border: 1px solid black;
margin: 0 auto;
`;

const StyledText = styled.div`
display: inline-block;
align-items: center;
width: 100%;
overflow-wrap: break-word;
`;

export default function Card(props) {
    const {item} = props;
    console.log(item)
    return (
        <Container>
            <StyledText>{item.text}</ StyledText>
        </Container>
    )
}