import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormStyled, Label, Input, BtnAdd, Error } from './ContactForm.styled';
import { addContact } from 'reduce/contacts/operation';
import { selectContact } from 'reduce/contacts/selectors';
// import { addContact } from 'reduce/contacts/operation';

const SingupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g
    )
    .required('Required'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SingupSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        const isContacts = contacts.some(contact =>
          contact.name.toLowerCase().includes(values.name.toLowerCase())
        );
        if (isContacts) {
          alert(`${values.name} alredy in contacts`);
          actions.resetForm();
          return;
        }
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <FormStyled>
        <Label htmlFor="">
          Name
          <Input type="text" name="name" />
          <Error name="name" component="div" />
        </Label>

        <Label htmlFor="">
          Number
          <Input type="tel" name="number" />
          <Error name="number" component="div" />
        </Label>

        <BtnAdd type="submit">Add contact</BtnAdd>
      </FormStyled>
    </Formik>
  );
};
