import { Container } from "react-bootstrap";
import PropsError from "../../errors/propsError";

const LandingPageSection = function (props) {
  const { id, vh100, bgImageSrc } = props;

  if (!id) throw new PropsError();

  const bgImage = function (src) {
    if (!src) return null;

    return {
      style: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .92), rgba(0, 0, 0, 0)), url(${src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    };
  };

  return (
    <Container
      fluid
      className={`${vh100 && "vh-100"}`}
      {...bgImage(bgImageSrc)}
    >
      <section id={id} className="w-100 h-100">
        {props.children}
      </section>
    </Container>
  );
};

export default LandingPageSection;
