import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import './App.css';

import { darkTheme, lightTheme } from './Theme';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, useTheme } from './ThemeContext';

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the custom theme context to get the current theme mode

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar
          navItems={['Dashboard', 'Movies', 'About']}
          isDarkMode={isDarkMode}  // Pass the current theme mode to NavBar
          onThemeToggle={toggleTheme}  // Pass the theme toggle handler to NavBar
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

export default Root;