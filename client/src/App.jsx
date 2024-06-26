import { Routes, Route } from "react-router-dom";
import { path } from "@/ultils/constant";
import { DetailPost, Home, Homepage, Login, Rental } from "@/containers/public";
function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.NHA_CHO_THUE} element={<Rental />} />
          {/* <Route path={path.SEARCH} element={<SearchDetail />} /> */}
          <Route
            path={path.DETAL_POST__TITLE__POSTID}
            element={<DetailPost />}
          />
          <Route path={"chi-tiet/*"} element={<DetailPost />} /> 
        </Route>
        {/* <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
