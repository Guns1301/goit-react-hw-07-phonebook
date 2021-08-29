import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
