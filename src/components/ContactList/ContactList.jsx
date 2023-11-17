import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';
import {
  selectError,
  selectIsLoading,
  selectVisibleContact,
} from 'reduce/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'reduce/contacts/operation';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <ContactItem name={name} number={number} id={id} />
        </Item>
      ))}
    </List>
  );
};
// export const ContactList = () => {
//   const visibleContacts = useSelector(selectVisibleContact);

//   return (
//     <List>
//       {visibleContacts.map(({ name, number, id }) => (
//         <Item key={id}>
//           <ContactItem name={name} number={number} id={id} />
//         </Item>
//       ))}
//     </List>
//   );
// };
