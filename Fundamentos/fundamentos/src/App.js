// componentes
import FirstComponent from "./componets/FirstComponent";
import TemplateExpression from "./componets/TemplateExpressions";
import MyComponent from "./componets/MyComponent";
import Events from "./componets/Events";
import Challenge from "./componets/Challenge";

// import do App.css
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>FUNDAMENTOS REACT</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
