import Hooks from "./components/Hooks/Hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterAPP from "./components/Hooks/UseState/CounterAPP";
import CustomHook from "./components/Hooks/UseState/CustomHook";
import UseEffect from "./components/Hooks/UseEffect/UseEffect";
import CustomHookForm from "./components/Hooks/CustomHookFrom/CustomHookForm";
import MultipleCustomHooks from "./components/Hooks/MulipleCustomHooks/MultipleCustomHooks";
import FocusScreen from "./components/Hooks/FocusScreen/FocusScreen";
import RealUseRef from "./components/Hooks/RealUseRef/RealUseRef";

function App() {
  return (
    <div >
      <Hooks />

      <CounterAPP />

      <CustomHook />

      <UseEffect />
      <hr/>
      <hr/>
      <CustomHookForm />
      <hr/>
      <hr/>
      <hr/>
      <MultipleCustomHooks />
      <hr/>
      <hr/>
      <hr/>
      <FocusScreen />

      <hr/>
      <hr/>
      <hr/>
      <RealUseRef />



    </div>
  );
}

export default App;
