import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import KopiCard from '../components/KopiCard';

const Detail = (props) => {
  const navigate = useNavigate();
  const { kode, kodeProv, kodeKota } = useParams();
  const level = props.level;

  const [dataWilayah, setDataWilayah] = useState("")

  let url = "";
  let backUrl = "";
  if (level === "kota") {
    url = `https://wilayah.id/api/regencies/${kode}.json`;
    backUrl = "/province";
  } else {
    url = `https://wilayah.id/api/districts/${kodeKota}.json`;
    backUrl = `/kota/${kodeProv}`;
  }

  const fetchData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setDataWilayah(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const buttonBack = () => {
    navigate(backUrl);
  };

  return (
    <div style={{overflow:"auto", height:"100vh", textAlign:"center"}}>
      <button onClick={(e) => buttonBack(e)}>← Kembali</button>
      {dataWilayah ? dataWilayah.map((data, key) => {
        return <div key={key}>
          <KopiCard name={data.name} kode={data.code}
            onClick={level === "kota" ? () => navigate(`/kecamatan/${kode}/${data.code}`) : undefined}></KopiCard>
        </div>
      }):""}
    </div>
  );
};

export default Detail;
