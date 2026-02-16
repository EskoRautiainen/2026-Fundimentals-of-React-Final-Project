import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/index.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import initialContacts from './data/initialContacts';
import Navbar from './components/Navbar'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

// Main App
function App() { // "contacts" variable  holds the contact data. It is initialized with initialContacts to add Alice and Bob to contacts.
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <Router>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*Passes property called setContacts down to child component AddContact. setContacts value is the setContacts function. */}
          <Route path="/add" element={<AddContact setContacts={setContacts}/>} />
          {/*Passes the contacts array from App state to the ContactList component as a prop. */}
          <Route path="/contact" element={<ContactList contacts={contacts} setContacts={setContacts}/>} />
          {/*Clicking a Link in ContactList navigates here with the contact's id in the URL. */} 
          <Route path="/contact/:id" element={<ContactDetails contacts={contacts}/>} />
          {/*Catch route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;     