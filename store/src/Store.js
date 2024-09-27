import React, { useState, useEffect, useContext } from 'react';
import DrawerAppBar from "./AppBar";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Store.css';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AuthContext } from './UserHttp';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, TextField, Alert, Collapse, IconButton, AlertTitle } from '@mui/material';

const boardUrl = "https://localhost:7107/Board";

function Store() {

    const [board, setBoard] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
    const { deleteBoard } = useContext(AuthContext)
    const { addToCart } = useContext(AuthContext)
    const user = JSON.parse(localStorage.getItem("user"));
    const [confirmationMessage, setConfirmationMessage] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        GetProducts();
    }, []);

    async function GetProducts() {
        const res = await axios.get(`${boardUrl}/all`);
        setBoard(res.data);
    }

    const handleExpandClick = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    async function HandleDelete(boardId) {
        await deleteBoard(boardId)
    }

    async function AddToCart(ID) {
        await addToCart(user.personid, ID, user.email, user.password);
        setOpen(true);
    }

    return (
        <>
            <DrawerAppBar />
            <div className='storeCards'>
                {board.map((info, index) => (
                    <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={info.image}
                                alt={info.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {info.manufacturer} - {info.name} {info.size}cm ${info.price}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={expandedCard === index}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expandedCard === index} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography>
                                        {info.description}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <button onClick={() => HandleDelete(info.id)}>Delete</button>
                            <button onClick={() => AddToCart(info.id)} >Add to Cart</button>
                        </CardActionArea>
                        <Collapse in={open}>
                            <Alert
                                severity="success"
                                action={
                                    <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                <AlertTitle>Success</AlertTitle>
                                Invalid Email or Password!
                            </Alert>
                        </Collapse>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Store;
