import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Charts from "./pages/Charts";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/charts" element={<Charts/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
