import React, { useState, useEffect, useContext } from 'react';
import DrawerAppBar from "./AppBar";
import axios from "axios";
import { AuthContext } from './UserHttp';
import './Store.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Modal, Alert, Collapse, IconButton, AlertTitle } from '@mui/material';


const boardUrl = "https://localhost:7107/Board";
const accessoryUrl = "https://localhost:7107/Accessory";

function Store() {

    const [board, setBoard] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
    const { deleteBoard } = useContext(AuthContext)
    const { addToCart } = useContext(AuthContext)
    const user = JSON.parse(localStorage.getItem("user"));
    const [confirmationMessage, setConfirmationMessage] = useState("");
    const [open, setOpen] = useState(false);

    const [boardFilter, setBoardFilter] = useState(true);
    const [accessoryFilter, setAccessoryFilter] = useState(true);

    const [openFilterModal, setOpenFilterModal] = useState(false);
    const handleOpen = () => setOpenFilterModal(true);
    const handleClose = () => setOpenFilterModal(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-350%, -100%)',
        width: 250,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        GetProducts();
        GetAccessories();
    }, []);

    async function GetProducts() {
        const res = await axios.get(`${boardUrl}/all`);
        setBoard(res.data);
    }

    async function GetAccessories() {
        const acc = await axios.get(`${accessoryUrl}/all`);
        setAccessories(acc.data);
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
            <div className='DrawerAppBar'>
                <DrawerAppBar />
            </div>
            <Modal
                open={openFilterModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Filters
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={boardFilter} onChange={() => setBoardFilter((prevState) => !prevState)} />} label="Boards" />
                        <FormControlLabel control={<Checkbox checked={accessoryFilter} onChange={() => setAccessoryFilter((prevState) => !prevState)} />} label="Accessories" />
                    </FormGroup>
                </Box>
            </Modal>
            <div className='store'>
                <div className='filterButton'>
                    <Button sx={{backgroundColor: "#20A7AC"}} variant='contained' onClick={handleOpen}>Filters</Button>
                </div>
                <div className='storeCards'>
                    <div className='boardCards'>
                    {boardFilter && board.map((info, index) => (
                        <>
                            <Card sx={{ width: 345 }} key={index} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="340"
                                        image={info.image}
                                        alt={info.name}
                                        />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="div">
                                            {info.manufacturer} / {info.name} {info.size}cm ${info.price}
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
                                    <Button onClick={() => HandleDelete(info.id)}>Delete</Button>
                                    <Button onClick={() => AddToCart(info.id)} >Add to Cart</Button>
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
                        </>
                    ))}
                    </div>
                    <div className='accessoryCards'>
                    {accessoryFilter && accessories.map((info, index) => (
                        <Card sx={{ width: 345 }} key={index}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={info.image}
                                    alt={info.name}
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {info.manufacturer} / {info.name} {info.size} ${info.price}
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
                                {/* <button onClick={() => HandleDelete(info.id)}>Delete</button>
                        <button onClick={() => AddToCart(info.id)} >Add to Cart</button> */}
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
                </div>
            </div>
        </>
    );
}

export default Store;
