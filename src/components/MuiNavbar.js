import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import { useNavigate } from 'react-router-dom';
import'../style/navbar.css'


export const MuiNavbar = () => {
    const navigate = useNavigate();
    return (
        <AppBar className="navbarmain" position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                    <HouseSidingIcon />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Planer
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={() => navigate ("/LogIn")} color="inherit">Log in</Button>
                        <Button onClick={() => navigate ("/Form")} color="inherit">Tasks</Button>
                        <Button onClick={() => navigate ("/Notes")}color="inherit">Notes</Button>
                        <Button onClick={() => navigate ("/ContactUs")}color="inherit">Contact Us</Button>
                    </Stack>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar;