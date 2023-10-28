import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Header } from './Header/Header';
import { HomePage } from './HomePage/HomePage';


export const App = () => {

  return (
<div className={css.container}>
        <Header />
        <HomePage/>
        <ContactForm/>
        <h2 className={css.contactsList}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  );
};
