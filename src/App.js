import Hooks from "./components/Hooks/Hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterAPP from "./components/Hooks/UseState/CounterAPP";
import CustomHook from "./components/Hooks/UseState/CustomHook";
import UseEffect from "./components/Hooks/UseEffect/UseEffect";
import CustomHookForm from "./components/Hooks/CustomHookFrom/CustomHookForm";
import MultipleCustomHooks from "./components/Hooks/MulipleCustomHooks/MultipleCustomHooks";
import FocusScreen from "./components/Hooks/FocusScreen/FocusScreen";
import RealUseRef from "./components/Hooks/RealUseRef/RealUseRef";
import LayoutEffect from "./components/Hooks/LayoutEffect/LayoutEffect";
import Memorize from "./components/Hooks/Memos/Memorize";
import MemoHook from "./components/Hooks/Memos/MemoHook";
import CallBackHook from "./components/Hooks/Memos/CallBackHook";




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
      <hr />
      <LayoutEffect />
      <hr/>
      <hr/>
      <hr/>
      <Memorize />
      <hr/>
      <hr/>
      <hr/>
      <MemoHook />
      <hr/>
      <hr/>
      <hr/>
      <CallBackHook />




    </div>
  );
}

export default App;
