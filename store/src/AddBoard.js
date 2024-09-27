import { useContext, useState } from "react";
import { AuthContext } from "./UserHttp";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from '@mui/material';
import DrawerAppBar from "./AppBar";


function AddBoard() {
    const { addBoard } = useContext(AuthContext)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const navigate = useNavigate();

    async function NewBoard() {
        debugger
        await addBoard(name, price, size, description, image, manufacturer)
    }

    function BackToStore() {
        navigate('/Store')
    }

    return (
        <>
            <DrawerAppBar />
            <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', display: 'flex', flexDirection: 'column', margin: '10px auto' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={text => setName(text.target.value)} id="outlined-basic" label="Name" variant="outlined" />
                <TextField onChange={text => setPrice(text.target.value)} id="outlined-basic" label="Price" variant="outlined" />
                <TextField onChange={text => setSize(text.target.value)} id="outlined-basic" label="Size" variant="outlined" />
                <TextField onChange={text => setDescription(text.target.value)} id="outlined-basic" label="Description" variant="outlined" />
                <TextField onChange={text => setImage(text.target.value)} id="outlined-basic" label="Image" variant="outlined" />
                <TextField onChange={text => setManufacturer(text.target.value)} id="outlined-basic" label="Manufacturer" variant="outlined" />
                <Button onClick={NewBoard} variant="contained">Add Board</Button>

            </Box>
        </>
    )
}
export default AddBoard