import i18n from 'i18next';

const Settings: React.FC = () => {

   const switchToEnglish = () => {
      i18n.changeLanguage('en');
   };

   return (<div></div>);
};

export default Settings;
