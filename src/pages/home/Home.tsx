import {
    IonAccordion, IonAccordionGroup, IonButtons, IonContent, IonHeader, IonItem,
    IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

import { bookTitles } from '../../data/bookStructure';
import { SelectedChapter } from "../../models/Book";

const Home: React.FC = () => {
    //   const { name } = useParams<{ name: string; }>();
    const history = useHistory();

    const selectSubOption = (selectedChapter: SelectedChapter) => {
        history.push('/halacha', selectedChapter);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>הלכות</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent fullscreen>
                <IonAccordionGroup>
                    {
                        bookTitles.map((bookTitle, index) => (
                            <IonAccordion value={bookTitle.id.toString()}>
                                <IonItem slot="header">
                                    <IonLabel>{bookTitle.title}</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    <IonList>
                                        {bookTitle.bookSubTitles.map((subTitle, subIndex) => (
                                            <IonItem button key={subIndex} onClick={() => selectSubOption({ bookTitle, bookSubtitleIndex: subTitle.id })}>
                                                <IonLabel>{subTitle.title}</IonLabel>
                                            </IonItem>
                                        ))}
                                    </IonList>
                                </div>
                            </IonAccordion>
                        ))

                    }

                    {/* <IonAccordionGroup>
                    <IonAccordion value="first">
                        <IonItem slot="header">
                            <IonLabel>אפשרות 1</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                            <IonList>
                                <IonItem button onClick={() => selectSubOption('תת אפשרות 1-1')}>
                                    <IonLabel>תת אפשרות 1-1</IonLabel>
                                </IonItem>
                                <IonItem button onClick={() => selectSubOption('תת אפשרות 1-2')}>
                                    <IonLabel>תת אפשרות 1-2</IonLabel>
                                </IonItem>
                            </IonList>
                        </div>
                    </IonAccordion> */}

                    {/* <IonAccordion value="second">
                        <IonItem slot="header">
                            <IonLabel>אפשרות 2</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                            <IonList>
                                <IonItem button onClick={() => selectSubOption('תת אפשרות 2-1')}>
                                    <IonLabel>תת אפשרות 2-1</IonLabel>
                                </IonItem>
                                <IonItem button onClick={() => selectSubOption('תת אפשרות 2-2')}>
                                    <IonLabel>תת אפשרות 2-2</IonLabel>
                                </IonItem>
                            </IonList>
                        </div>
                    </IonAccordion> */}
                </IonAccordionGroup>
            </IonContent >
        </IonPage >

    );
};

export default Home;
