import "./App.css";
import Table from "./components/atoms/Table";
import BarrasContainer from "./components/molecules/BarrasContainer";
import CategoriaPlatos from "./components/molecules/CategoriaPlatos";
import CategoriaAll from "./components/organisms/CategoriaAll";
import OrganismoEP from "./components/organisms/OrganismoEP";
import OrganismoPI from "./components/organisms/OrganismoPI";
import ShowScreen from "./components/screens/ShowScreen";
import TableScreen from "./components/screens/TableScreen";

function App() {
  return (
    <div>
      <BarrasContainer/>
      <OrganismoPI/>
      {/* <OrganismoEP/> */}
    </div>
  );
}

export default App;