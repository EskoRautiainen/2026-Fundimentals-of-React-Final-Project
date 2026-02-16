import { useParams } from 'react-router-dom';

function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find(c => c.id === id);

  if (!contact) return <p>Contact not found</p>;

  return (
    <div className='contactDetails'>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <p>{contact.address}</p>
    </div>
  );
}

export default ContactDetails;