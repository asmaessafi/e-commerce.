import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component
import Navbar from './components/navbar'; // Corrected casing for NavBar import
import BecameVendor from './components/BecameVendor'; // Import the BecameVendor component
import { AppProvider } from './AppContext'; // Import the AppProvider
import './App.css';
import Footer from './components/Footer';
import HelpCenter from './components/HelpCenter';
import Terms from './components/terms';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  const [isAdmin, setIsAdmin] = useState(true); // Toggle for admin view

  return (
    <AppProvider> {/* Wrap the component tree in AppProvider */}
      <Router>
        <div className="App flex flex-col min-h-screen">
          <ScrollToTop /> {/* Include ScrollToTop component */}
          <Navbar /> {/* Include the NavBar component */}

          <Routes> {/* Define routes for the application */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/become-vendor" element={<BecameVendor />} /> 
            <Route path="/Help-Center" element={<HelpCenter />} />
            <Route path="/Terms&Conditions" element={<Terms />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
