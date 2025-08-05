import * as React from "react";
import {
    AppBar,
    Box,
    Drawer,
    Divider,
    IconButton,
    MenuItem,
    List,
    Typography,
    Toolbar,
    useMediaQuery,
    useTheme,
    Switch,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LightMode, DarkMode, Menu, Close } from "@mui/icons-material";

import MovinoteIcon1 from "../assets/Movinote-Logo.png";

interface NavItem {
    label: string;
    link: string;
}

interface NavBarProps {
    navItems: NavItem[];
    isDarkMode: boolean;
    onThemeToggle: () => void;
}

export const NavBar = ({ navItems, isDarkMode, onThemeToggle }: NavBarProps) => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpenNavMenu = () => {
        setIsDrawerOpen(true);
    };

    const handleCloseNavMenu = (link: string) => {
        setIsDrawerOpen(false);
        navigate(link);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar position="fixed" color="default" elevation={1}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Logo and title */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        sx={{ mr: 1 }}
                        onClick={() => handleCloseNavMenu("/")}
                    >
                        <img
                            src={MovinoteIcon1}
                            alt="Movinote Logo"
                            style={{ width: 40, height: 40 }}
                        />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        <span style={{ color: theme.palette.primary.main }}>
                            MOVI
                        </span>
                        NOTE
                    </Typography>
                </Box>

                {/* Navigation items */}
                {!isMobile && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {navItems.map((item) => (
                            <MenuItem
                                key={item.label}
                                onClick={() => handleCloseNavMenu(item.link)}
                                role="button"
                                tabIndex={0}
                            >
                                <Typography
                                    textAlign="center"
                                    variant="h6"
                                    sx={{
                                        fontSize: 16,
                                        textTransform: "uppercase",
                                        fontWeight: 400,
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </MenuItem>
                        ))}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                ml: 2,
                            }}
                        >
                            <LightMode
                                sx={{
                                    fontSize: 20,
                                    opacity: isDarkMode ? 0.4 : 1,
                                }}
                            />
                            <Switch
                                checked={isDarkMode}
                                onChange={onThemeToggle}
                                color="default"
                            />
                            <DarkMode
                                sx={{
                                    fontSize: 20,
                                    opacity: isDarkMode ? 1 : 0.4,
                                }}
                            />
                        </Box>
                    </Box>
                )}

                {/* Mobile menu icon */}
                {isMobile && (
                    <React.Fragment>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleOpenNavMenu}
                        >
                            <Menu />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={isDrawerOpen}
                            onClose={() => setIsDrawerOpen(false)}
                        >
                            <Box
                                sx={{
                                    width: 300,
                                    height: "100%",
                                }}
                            >
                                {/* Header */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        p: 2,
                                    }}
                                >
                                    <Typography variant="h6">Menu</Typography>
                                    <IconButton
                                        onClick={() => setIsDrawerOpen(false)}
                                    >
                                        <Close />
                                    </IconButton>
                                </Box>

                                {/* Navigation */}
                                <Divider />
                                <List sx={{ padding: 2 }}>
                                    {navItems.map((item) => (
                                        <MenuItem
                                            key={item.label}
                                            onClick={() =>
                                                handleCloseNavMenu(item.link)
                                            }
                                            role="button"
                                            tabIndex={0}
                                        >
                                            <Typography
                                                textAlign="center"
                                                variant="h6"
                                                sx={{
                                                    fontSize: 16,
                                                    textTransform: "uppercase",
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {item.label}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </List>

                                {/* Mode Selection */}
                                <Divider />
                                <Box p={2}>
                                    <Typography
                                        variant="button"
                                        color="textSecondary"
                                    >
                                        Mode
                                    </Typography>
                                    <ToggleButtonGroup
                                        value={isDarkMode ? "dark" : "light"}
                                        exclusive
                                        fullWidth
                                        onChange={() => onThemeToggle()}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            mt: 1,
                                        }}
                                        color="primary"
                                    >
                                        <ToggleButton value="light">
                                            <LightMode sx={{ fontSize: 20 }} />
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ ml: 1 }}
                                            >
                                                Light
                                            </Typography>
                                        </ToggleButton>
                                        <ToggleButton value="dark">
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ ml: 1 }}
                                            >
                                                Dark
                                            </Typography>
                                            <DarkMode sx={{ fontSize: 20 }} />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            </Box>
                        </Drawer>
                    </React.Fragment>
                )}
            </Toolbar>
        </AppBar>
    );
};
