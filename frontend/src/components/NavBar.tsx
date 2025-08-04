// imports
import * as React from "react"
import {
    AppBar,
    Box,
    Container,
    Menu,
    Button,
    IconButton,
    MenuItem,
    Typography,
    Toolbar,
    useMediaQuery,
    useTheme,
    Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MovinoteIcon1 from "../assets/Movinote-Logo.png";

export interface NavBarProps {
    navItems: string[];
    isDarkMode: boolean;
    onThemeToggle: () => void;
}

export const NavBar = ({ navItems, isDarkMode, onThemeToggle }: NavBarProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="fixed" color="default" elevation={1}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo and title */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton edge="start" color="inherit" sx={{ mr: 1 }}>
                        <img src={MovinoteIcon1} alt="Movinote Logo" style={{ width: 40, height: 40 }} />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        <span style={{ color: '#B71C1C' }}>MOVI</span>NOTE
                    </Typography>
                </Box>

                {/* Navigation items */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                onClick={handleCloseNavMenu}
                                sx={{ color: 'text.primary', mx: 1 }}
                            >
                                {item}
                            </Button>
                        ))}
                        <Switch
                            checked={isDarkMode}
                            onChange={onThemeToggle}
                            color="default"
                        />
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    )
};
