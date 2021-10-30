import styled from 'styled-components';

const StyledContainer = styled.div`
display: flex;
justify-content: center;
margin: 30px auto;
`;

export default function Button() {
    return (
        <StyledContainer>
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
        </StyledContainer>
    )
}