import { useTranslation } from 'react-i18next';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      {/* <Home/> */}
      <About />
    </div>
  );
}



export default App;
