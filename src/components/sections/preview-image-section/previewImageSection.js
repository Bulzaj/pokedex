import Section from "../../section/section";
import { Image } from "react-bootstrap";

const PreviewImageSection = function (props) {
  const { artwork } = props;

  return (
    <Section id="preview-image">
      <Image src={artwork} className="img-fluid mx-auto d-block" />
    </Section>
  );
};

export default PreviewImageSection;
