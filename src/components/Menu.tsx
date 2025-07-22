import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation, useHistory } from 'react-router-dom';
import { homeOutline, homeSharp, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  state?: string;
}

const appPages: AppPage[] = [
  {
    title: 'רשימת ההלכות',
    url: '/halachot-list',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
    {
    title: 'שחזר מיקום אחרון',
    url: '/halacha',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
];


const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleNavigation = (appPage: AppPage) => {
      history.push(appPage.url, appPage.state);
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>תפריט</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''}
                 onClick={() => {handleNavigation(appPage)}}
                  lines="none"
                   detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
