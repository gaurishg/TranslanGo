import React from 'react';
import logo from './logo.svg';
import classes from './App.module.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewImage from './pages/viewimage';
import WelcomePage from './pages/welcome';
import { ThemeProvider } from '@mui/system';
import theme from './theme/theme';
import { CssBaseline } from '@mui/material';
import SignInPage from './pages/signin';
import { TestImage } from './pages/test/test';

import './i18n.tsx'




function App() {
  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path='/test' element={<TestImage />} />
              <Route path='/' element={<WelcomePage />} />
              <Route path="/view-image" element={<ViewImage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path='/sign-up'>
              <Route index element={<GetSignUpDetails />}/>
                <Route path='confirm-email' element={<SignUpConfirmEmail />} />
                <Route path='create-profile' element={<CreateProfile />}/>
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
