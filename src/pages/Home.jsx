function Home() {
  return (  // Renders simple home screen with information about the App.
    <div className="home">
      <h2>Home</h2>
      <p>The Home page provides a brief overview of the application and explains how each section works. It serves as a landing page and uses simple JSX and CSS styling to keep the layout clean and easy to read.</p>
      <h2>Add Contact View</h2>
      <p>This view allows users to add new contacts using a form. The form is controlled using React’s useState hook, and when submitted, the new contact is added to the main contact list without refreshing the page.</p>
      <h2>Contact List View</h2>
      <p>The Contact List displays all saved contacts, including the pre-loaded contacts from the initial data file and any contacts added by the user. Each contact shows a name and phone number, and clicking on a name navigates to a detailed view using dynamic routing.</p>
      <h2>Contact Details View</h2>
      <p>This view uses a dynamic route to display full information for a selected contact. The contact ID is passed through the URL, allowing React Router to render the correct contact details dynamically.</p>
      
    </div>
  );
}

export default Home;