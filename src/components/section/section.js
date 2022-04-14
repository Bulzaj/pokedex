import { Container } from "react-bootstrap";
import PropsError from "../../errors/propsError";

const Section = function (props) {
  if (!props.id && !props.title) throw new PropsError();
  const bg = `bg-${props.bg || "light"}`;
  const text = `text-${props.text || "dark"}`;
  return (
    <section id={props.id || props.title.replace(" ", "-") || null}>
      <Container fluid className={`${bg} ${text} rounded p-2`}>
        <h3 className="display-3">{props.title}</h3>
        <p>{props.desc}</p>
        {props.children}
      </Container>
    </section>
  );
};

export default Section;
