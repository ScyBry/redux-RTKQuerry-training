// import { useAppDispatch, useAppSelector } from "./hooks/redux.ts";
// import { userSlice } from "./store/reducers/UserSlice.ts";
// import { useEffect } from "react";
// import { fetchUsers } from "./store/reducers/ActionCreator.ts";
import PostContainer from "./components/PostContainer.tsx";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer,
  // );
  //
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div>
      {/*{isLoading && <h1>Идет загрузка</h1>}*/}
      {/*{error && <h1>{error}</h1>}*/}
      {/*{JSON.stringify(users, null, 2)}*/}

      <PostContainer></PostContainer>
    </div>
  );
}

export default App;
