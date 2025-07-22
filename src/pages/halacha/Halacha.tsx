import {
    IonButtons, IonContent, IonHeader,
    IonMenuButton, IonPage,
    IonTitle, IonToolbar
} from '@ionic/react';
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';

import { SelectedChapter } from "../../shared/models/Book";

import './Halacha.css';

const Halacha: React.FC = () => {
    const history = useHistory();

    const location = useLocation<SelectedChapter>();
    const { bookTitle, bookSubtitleIndex } = location.state || { bookTitle: null, bookSubtitleIndex: null };

    const [html, setHtml] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const id = bookTitle?.id;
        if (!id) {
            history.push('/halachot-list');
            return;
        }

        fetch(`/assets/book/${id}.html`)
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const decoder = new TextDecoder('windows-1255');
                const html = decoder.decode(buffer);
                setHtml(html);
                scrollHtml();

            });
    }, [bookTitle, bookSubtitleIndex]);

    function scrollHtml() {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const bookSubtitleIndexPad = bookSubtitleIndex < 10 ?
                    '0' + bookSubtitleIndex
                    : bookSubtitleIndex.toString();
                const anchor = containerRef.current.querySelector(`a[name=HtmpReportNum00${bookSubtitleIndexPad}_L2]`);
                if (anchor) {
                    clearInterval(interval);
                    // Scroll to the anchor element
                    anchor.scrollIntoView();
                }
            }
        }, 1);
    }

    return (
        <IonPage className="halach">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{bookTitle?.title}</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent fullscreen>
                <div ref={containerRef} className="content" dangerouslySetInnerHTML={{ __html: html }} />
            </IonContent>
        </IonPage>
    );
}


export default Halacha;
