import './App.scss';
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import Stats from "./Stats/Stats";
import Hero from "./Hero/Hero";

function App() {
  return (
      <div className='wrapper'>
        <Header title='Title' avatar='avatar' />
        <Aside />
        <Stats />
        <Hero />
      </div>
  );
}

export default App;
