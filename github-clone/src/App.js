import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import styled from "styled-components";


function App() {
  return (
    <APP>
     <Navbar />
     <HomePage />
    <Footer />
    </APP>
  );
}

export default App;


const APP = styled.div`
background-color: rgb(13,17,23);
`