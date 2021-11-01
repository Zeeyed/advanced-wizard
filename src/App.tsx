import Wizard from "./components/wizard/wizard";

function App() {
  return (
    <div>
      <span>Advanced Wizard</span>
      <Wizard>
        <Wizard.Pages>
          <div>Page 1</div>
          <div>Page 2</div>
          <div>Page 3</div>
        </Wizard.Pages>
        <Wizard.ButtonPrevious />
        <Wizard.ButtonNext />
      </Wizard>
    </div>
  );
}

export default App;
