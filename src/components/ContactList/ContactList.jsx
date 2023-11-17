import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';
import { selectVisibleContact } from 'reduce/contacts/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContact);

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <ContactItem name={name} number={number} id={id} />
        </Item>
      ))}
    </List>
  );
};
