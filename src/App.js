import "./App.css";
import { myInterceptor1 } from "./components/ajax/MyInterceptor1";
import Carousel from "./components/carousel/Carousel";
import { Footer } from "./components/footer/Footer";
import MyHeader from "./components/header/Header";
import Main from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  myInterceptor1();
  return (
    <div>
      <MyHeader></MyHeader>
      <Navbar></Navbar>
      {/* <Carousel></Carousel> */}
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
