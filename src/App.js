import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { About } from "./Steps/About";
import { Income } from "./Steps/Income";
import { Credits } from "./Steps/Credits";
import { Stepper } from "./Steps/Stepper";


function App() {
  return (
    <div className="App">
     <AppProvider>
        <Router>
         <Stepper />
          <Routes>
            <Route path="/" element={<About />} />
			<Route path="/income" element={<Income />} />
			<Route path="/credits" element={<Credits />} />
          </Routes>
		</Router>
      </AppProvider>
    </div>
  );
}

export default App;
