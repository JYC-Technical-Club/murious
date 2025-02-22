import AnimatedCursor from "react-animated-cursor";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Events from "./components/Events";
import JYC from "./components/JYC";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Teams from "./components/TeamsList";
import Contacts from "./components/Contacts";
import Murious from "./components/Murious";
  
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          innerScale={1}
          outerScale={1.75}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "white",
          }}
          outerStyle={{
            border: "3px solid white",
          }}
        />
        <Header />
        <Hero />
        <Events />
        <JYC />
        <Murious />
        <Teams />
        <Contacts />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
