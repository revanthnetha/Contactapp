import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
