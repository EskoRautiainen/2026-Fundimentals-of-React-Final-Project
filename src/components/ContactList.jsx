import { Link } from 'react-router-dom';

function ContactList({ contacts, setContacts }) {

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts(prev => prev.filter(c => c.id !== id));
    }
  };

  return (
    <ul className='contactList'>
      {contacts.map(c => (  //Maps over contacts array and renders each contact as a list item
        
        /*
        * <Link> is used instead of a plain <a> tag to prevent a full page reload and preserve SPA state.
        * <Link> comes from react-router-dom and updates the URL without refreshing the page.
        * The key prop allows React to efficiently track and update list items
        */
        <li className="contactList" key={c.id}> 
          <Link to={`/contact/${c.id}`}>{c.name}</Link> – {c.phone}
        <span>
        <button className='smallButton' 
            onClick={() => handleDelete(c.id)}
          >
            Delete
          </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;