import BBTheoryContainer from "./components/BBTheory/BBTheoryContainer";
import AddModal from "./components/header/AddModal";
import Header from "./components/header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Header/>
     <AddModal/>
     <BBTheoryContainer/>
    </div>
  );
}

export default App;
