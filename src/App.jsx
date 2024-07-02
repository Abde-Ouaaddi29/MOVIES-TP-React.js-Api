import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./REDUX/store";
import Body from "./components/body";
import Show from "./components/show";
import Layout from "./components/layout";

export default function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
            <Route path="/MOVIES_TP/" element={ <Layout/> }>
                <Route index element={<Body/>} />
                <Route path=":id" element={<Show/>} />
            </Route>
        </Routes>
      </Router>
    </Provider>
  );
}
