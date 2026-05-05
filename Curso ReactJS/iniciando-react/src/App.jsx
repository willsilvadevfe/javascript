import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <>
      <h1>App.jsx</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <div className="btnFlex">
        <TestComponent />
        <TestComponent />
        <TestComponent />
      </div>
    </>
  );
}

export default App;
