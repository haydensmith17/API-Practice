import { useContext, useState } from "react";
import { AuthContext } from "./UserHttp";
import { Modal, Typography, TextField, Box, Button } from "@mui/material";

function Card({ open, handleClose }) {
    const user = JSON.parse(localStorage.getItem("user"));
    const { addCard } = useContext(AuthContext);

    const [cardNum, setCardNum] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvv, setCvv] = useState(null);

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

    function NewCard() {
        addCard(user.personid, cardNum, expDate, +cvv, user.email, user.password)
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
                    Add a payment card
                </Typography>
                <TextField onChange={text => setCardNum(text.target.value)} id="outlined-basic" label="Card Number" variant="outlined" />
                <TextField onChange={text => setExpDate(text.target.value)} id="outlined-basic" label="Exp Date" variant="outlined" />
                <TextField onChange={text => setCvv(text.target.value)} id="outlined-basic" label="CVV" variant="outlined" />
                <Button onClick={NewCard}>Save Card</Button>
            </Box>
        </Modal>
    );
}

export default Card;