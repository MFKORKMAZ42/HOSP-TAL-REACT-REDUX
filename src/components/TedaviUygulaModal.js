import React from "react";
// import Typography from "@mui/material/Typography";
import { Button, TextField, Modal, Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

// import HastaDetay from "../pages/HastaDetay";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const TedaviUygulaModal = (props) => {
  const { open, handleClose, islem, didUpdate, setDidUpdate } = props;
  const [uygulananTedavi, setUygulananTedavi] = useState("");
  const [ilaclar, setIlaclar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (uygulananTedavi === "" || ilaclar === "") {
      alert("Tedavi alanı ve ilaçlar alanı boş bırakılamaz");
      return;
    }

    const seperatedIlaclar = ilaclar.split(",");
    console.log(seperatedIlaclar);

    const updatedIslem = {
      ...islem,
      uygulananTedavi: uygulananTedavi,
      yazilanIlaclar: seperatedIlaclar,
    };
    axios
      .put(`http://localhost:3004/islemler/${islem.id}`, updatedIslem)
      .then((res) => {
        setUygulananTedavi("");
        setIlaclar("");
        handleClose();
        setDidUpdate(!didUpdate);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            {hasta?.name}
          </Typography> */}
          <h1 style={{ textAlign: "center" }}>Tedavi Ekle</h1>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "20px 0px",
              }}
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Uygulanan Tedavi"
                variant="outlined"
                value={uygulananTedavi}
                onChange={(event) => setUygulananTedavi(event.target.value)}
              />
            </div>
            {/* {
                ilacSayisi.map(=>(
                    
                ))
            } */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "20px 0px",
              }}
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Yazılan İlaç "
                variant="outlined"
                value={ilaclar}
                onChange={(event) => setIlaclar(event.target.value)}
              />
            </div>
            <div>
              <button>İlaç Ekle</button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0px",
                gap: "20px",
              }}
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                Vazgeç
              </Button>
              <Button type="submit" variant="contained">
                Kaydet
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TedaviUygulaModal;
