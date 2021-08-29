import PropTypes from "prop-types";
import styles from "./Contacts.module.css";

const Contacts = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.links}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button
          className={styles.btn}
          type="button"
          onClick={() => deleteContact(contact.id)} //тут забирается id для передачи в метод удаления у Компонента
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func,
};

export default Contacts;
