import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useNavigate } from "react-router-dom";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { NavLink } from "react-router-dom";
import TopBar from "../components/TopBar";

const Home = () => {
  const navigate = useNavigate();

  const buttonEnter = () => {
      navigate("/Store", { replace: true, state: {id: 5, name: "Bening"} }) ;
    }

  return (
    <IonPage>
      <IonContent>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
          <TopBar title="Homepage"/>
        {/* <button onClick={buttonEnter}>Go To Tab1</button> */}
        <button onClick={(e) => buttonEnter(e)}>Go To Store</button>
        {/* <a href="./" > Visit Tab1</a> */}
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
