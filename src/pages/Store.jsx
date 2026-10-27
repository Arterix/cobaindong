import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useNavigate, useLocation } from "react-router-dom";
import './Tab1.css';
import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import CardStore from '../components/CardStore';

const Store = () => {
  const [name, setName] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  
  const buttonEnter = () => {
    navigate("/home") ;
  }

  const checkLocation = () => {
    console.log("Current location:", location.pathname);
  };

  useEffect(() => {
    setName(location.state.name)
  },[name]);

  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <TopBar title="Store"/>
      <div style={{overflow: "auto", height: "400px"}}>
        <CardStore id="001" product="apel" prices="20000"/>
        <CardStore id="002" product="buncis" prices="30000"/>
        <CardStore id="003" product="semangka" prices="40000"/>
        <CardStore id="004" product="nangka" prices="50000"/>
      </div>
      <div>
        <button onClick={(e) => buttonEnter(e)}>Go To Store</button>
      </div>
    </div>
  );
};

export default Store;
