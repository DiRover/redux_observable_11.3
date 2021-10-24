import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Spinner from '../components/Spinner';
import Modal from './Modal';
import Card from './Card';

import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 30vh auto;
`;


function List() {
    const { list, loading, error } = useSelector(state => state.list);
    const { getDescription } = useContext(Context);
    const data = "list";

    return (
        <Fragment>
            <Container>
                {loading && <Spinner />}
                {error && <Modal data={data}/>}
                {(!loading && !error) && <div className="list-group">
                    {list.map((item) => {
                        return <Card item={item} />
                    })}
                </div>}
            </Container>

        </Fragment>

    )
};

export default List;

// {list.map((item) => {
//     return <Link to={`/list/${item.id}`} key={item.id} onClick={() => getDescription(item.id)} className="list-group-item list-group-item-action list-group-item-info">{item.name}</Link>
// })}