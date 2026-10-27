import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useNavigate } from "react-router-dom";
import './Tab1.css';

const Tab1 = () => {
  const navigate = useNavigate();
  
  const buttonEnter = () => {
    navigate("/home", { replace: true }) ;
  }

  const buttonProv = () => {
    navigate("/province", { replace: true }) ;
  }
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Listen now</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {/* <a href="./Home" > Visit Home</a> */}
        <button onClick={(e) => buttonEnter(e)}>Go To Home</button>
        <button onClick={(e) => buttonProv(e)}>Go To Province</button>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
