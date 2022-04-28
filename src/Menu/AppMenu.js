import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {NavBtn, NavBtnLink} from "../navBar/NavBarElements";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const drawerWidth = 240;

export default function ClippedDrawer() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" width='500' aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant="h4" color="textPrimary" gutterBottom>
                        <img style={{marginLeft: "25px", marginTop: "10px"}} src="/logohome.png"
                             alt="logo" width="10%"></img>
                    </Typography>
                    {/*<Typography variant="h6" noWrap component="div">*/}
                    {/*    Acquattica*/}
                    {/*</Typography>*/}
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign Out</NavBtnLink>
                    </NavBtn>
                </Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                {/*<Box sx={{ display: { xs: 'none', md: 'flex' } }}>*/}
                {/*    <IconButton*/}
                {/*        size="large"*/}
                {/*        edge="end"*/}
                {/*        aria-label="account of current user"*/}
                {/*        aria-controls={menuId}*/}
                {/*        aria-haspopup="true"*/}
                {/*        onClick={handleProfileMenuOpen}*/}
                {/*        color="inherit"*/}
                {/*    >*/}
                {/*        <AccountCircle />*/}
                {/*    </IconButton>*/}
                {/*</Box>*/}
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                }}
            >
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        {['Welcome Back!'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <SentimentSatisfiedAltIcon/> : <SentimentSatisfiedAltIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index}/>;
                    })}
                    {/*<List>*/}
                    {/*    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
                    {/*        <ListItem button key={text}>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText primary={text} />*/}
                    {/*        </ListItem>*/}
                    {/*    ))}*/}
                    {/*</List>*/}
                    {/*<Divider />*/}
                    {/*<List>*/}
                    {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                    {/*        <ListItem button key={text}>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText primary={text} />*/}
                    {/*        </ListItem>*/}
                    {/*    ))}*/}
                    {/*</List>*/}
                </Box>
                {renderMobileMenu}
                {renderMenu}
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}