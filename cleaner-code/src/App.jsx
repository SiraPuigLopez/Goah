import "./App.css";
import Card from "./componentes/Card";

function App() {
  const appStyle = {
    backgroundColor: "white",
    // backgroundImage: "url(" + imgUrl + ")",
  };
  return (
    <div style={appStyle}>
      <Card header="Header" body="Body" footer="Footer" />
    </div>
  );
}

export default App;
