import styled from 'styled-components';
import { useContext } from 'react';
import Context from '../context/Context';

const StyledContainer = styled.div`
display: flex;
justify-content: center;
margin: 30px auto;
`;

export default function Button(props) {
    const {lastSeenId} = props;
    const { getContinuation } = useContext(Context);
    return (
        <StyledContainer>
            <button type="button" className="btn btn-primary btn-lg" onClick={()=> getContinuation(lastSeenId)}>Load next</button>
        </StyledContainer>
    )
}