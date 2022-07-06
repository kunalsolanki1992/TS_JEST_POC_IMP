import React from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ParentContainer from "../../components/ParentContainer";
import { getMoviesRequest } from "../../redux/actions/auth";

const ListScreen: React.FC = (props: any) => {
    const movies = useSelector((state: any) => state.user.movies);
    const pending = useSelector((state: any) => state.user.pending);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getMoviesRequest());

        console.log("MOVIES == ", movies) ;
    }, [])

    return (
        <ParentContainer>
            {/* <FlatList
                data={movies}
            /> */}
        </ParentContainer>
    )
}

export default ListScreen;