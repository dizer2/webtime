import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Home from './components/Home/Home';


// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t('title')}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);



function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Home/>
    </div>
  );
}



export default App;
