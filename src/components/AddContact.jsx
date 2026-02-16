import { useState } from "react";

function AddContact({ setContacts }) {
  const [form, setForm] = useState({
    name: '',               // form state object is initialized with empty strings. this allows us to send partially filled form.
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = e => // e is the event object that React passes to event handlers
    setForm({ ...form,      // the spread operator {...form} copies all existing properties of the form object.
         [e.target.name]:   // e.target is the HTML element that triggered the event (now its <input>).
         e.target.value }); // e.target.name is the name attribute of the input ("name", "phone" etc.)


  const handleSubmit = e => { // e is the event object that React passes to event handlers
    e.preventDefault();       // stops the browser from refreshing so React can handle it dynamically. Without this, the page would reload and the contacts would disappear from state.
    setContacts(prev => [     // updates the contacts array in the parent component. prev => function ensures you always get the latest state.
      ...prev,                // ...prev spread operator copies all existing contacts into a new array.
      { ...form, id: Date.now().toString() }  // id: Date.now()... creates an unique id for the contact. This counts milliseconds so a duplicate entry is very unlikely.
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className="addContact">

      <label htmlFor="name">Name</label><br />
      <input className="input"
        id="name"
        name="name" // this one is targeted with e.target.name. e.target.id works as well if we choose to use that.
        placeholder="Enter full name"
        onChange={handleChange}
      />

    <div>
      <label htmlFor="phone">Phone</label><br />
      <input className="input"
        id="phone"
        name="phone"
        placeholder="Enter phone number"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="email">Email</label><br />
      <input className="input"
        id="email"
        name="email"
        placeholder="Enter email address"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="address">Address</label><br />
      <input className="input"
        id="address"
        name="address"
        placeholder="Enter home address"
        onChange={handleChange}
      />
    </div>

    <button type="submit"> Add Contact</button>
    </form>
  );
}

export default AddContact;