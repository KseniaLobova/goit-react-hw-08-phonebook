import { Wrapper } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filters } from 'components/Filters/Filters';

export default function Contacts() {
  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filters />
      <ContactList />
    </Wrapper>
  );
}
