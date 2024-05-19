import { Provider } from "react-redux";
import API from "./FETCH/CustomAxios";
import Body from "./components/body";
import Nav from "./components/nav";
import Store from "./REDUX/store";

export default function App(){

  return (<>
  <Provider store={Store}>
      <Nav/>
      <Body/>
      <API/>
  </Provider>
    
    </>)
}