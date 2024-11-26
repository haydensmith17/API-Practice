import { useContext, useState } from "react";
import { AuthContext } from "./UserHttp";
import { Modal, Typography, TextField, Box, Button } from "@mui/material";

function Address({ open, handleClose }) {
    const user = JSON.parse(localStorage.getItem("user"));
    const { addAddress } = useContext(AuthContext);

    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [stateOrigin, setStateOrigin] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function NewAddress() {
        addAddress(user.personid, streetAddress, city, stateOrigin, zip, country, user.email, user.password)
        handleClose();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add a shipping address
                </Typography>
                <TextField onChange={text => setStreetAddress(text.target.value)} id="outlined-basic" label="Street Address" variant="outlined" />
                <TextField onChange={text => setCity(text.target.value)} id="outlined-basic" label="City" variant="outlined" />
                <TextField onChange={text => setStateOrigin(text.target.value)} id="outlined-basic" label="State" variant="outlined" />
                <TextField onChange={text => setZip(text.target.value)} id="outlined-basic" label="ZIP" variant="outlined" />
                <TextField onChange={text => setCountry(text.target.value)} id="outlined-basic" label="Country" variant="outlined" />
                <Button onClick={NewAddress}>Save Address</Button>
            </Box>
        </Modal>
    );
}

export default Address