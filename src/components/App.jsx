import ContactForm from './PhonebookForm/PhonebookForm';
import PhoneList from './PhoneList/PhoneList';
import PhoneBookFilter from './PhonebookFilter/PhonebookFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/phonebook/phonebook-operation';
import { useSelector } from 'react-redux';
import { Loading } from './Loading/Loading';
const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <PhoneBookFilter />
      <PhoneList />
      {isLoading && <Loading/>}

    </section>
  );
};

export default App;
