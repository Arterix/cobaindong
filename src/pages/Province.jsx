import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useNavigate, useLocation } from "react-router-dom";
import './Tab1.css';
import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import CardStore from '../components/CardStore';
import axios from 'axios';
import KopiCard from '../components/KopiCard';

const Province = () => {
  const navigate = useNavigate();
  const buttonEnter = () => {
    navigate("/") ;
  }
  
  const [dataProvinsi, setDataProvinsi] = useState("")

  // useEffect(() => {
  //   axios.get("https://wilayah.id/api/provinces.json")
  //   .then((response) => {
  //     console.log(response.data.data);
  //     setDataProvinsi(response.data.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }, {});

  const fetchData = async () => {
    await axios
      .get("https://wilayah.id/api/provinces.json")
      .then((response) => {
        setDataProvinsi(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    
    <div style={{overflow:"auto", height:"100vh", textAlign:"center"}}>
      <button onClick={(e) => buttonEnter(e)}>Go To Tab1</button>
      {dataProvinsi ? dataProvinsi.map((data, key) => {
        return <div key={key}>
          <KopiCard name={data.name} kode={data.code}></KopiCard>
        </div> 
      }):""}
    </div>
  );
};

export default Province;
