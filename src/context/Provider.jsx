import Context from "./Context";
import {loadDescription, loadServicesList} from "../actions/actionCreators";
import { useDispatch } from 'react-redux';

export default function Provider(prop) {
    const dispatch = useDispatch();
    const getDescription = (id) => {
        dispatch(loadDescription(id));
    }

    const getList = () => {
        dispatch(loadServicesList());
    }

    return(
        <Context.Provider value={{getDescription, getList}}>
            {prop.children}
        </Context.Provider>
    )
}

