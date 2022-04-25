import "./App.css";
import Layout from "./components/layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import PickTest from "./pages/PickTestPage";
import DoTest from "./pages/DoTestPage";
import EditSets from "./pages/EditSetsPage";
import EditSet from "./pages/EditSetPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/pick-test" />} />
        <Route path="/pick-test" element={<PickTest />} />
        <Route path="/do-test/:id" element={<DoTest />} />
        <Route path="/edit-sets" element={<EditSets />} />
        <Route path="/edit-set/:id" element={<EditSet />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
