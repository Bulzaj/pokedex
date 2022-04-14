import { useMemo } from "react";
import LandingPageSection from "../../../landing-page-section/landingPageSection";
import { Container, Button } from "react-bootstrap";
import classes from "./heroSection.module.css";
import heroImgSelector from "./heroImgSelector";

const HeroSection = function () {
  const heroImage = useMemo(() => heroImgSelector(), []);

  return (
    <LandingPageSection id="hero" vh100 bgImageSrc={heroImage}>
      <Container className="d-flex justify-content-center align-items-center w-100 h-100">
        <Container className={classes.textContainer}>
          <h1 className={`display-1 ${classes.gradientText} text-start`}>
            Pokedex
          </h1>
          <h1 className={`${classes.gradientText} text-center`}>
            Your favourite creatures
          </h1>
          <h2 className={`${classes.gradientText} text-end`}>
            In one application!
          </h2>
          <span className={classes.separator} />
          <p className="text-info text-center">
            Start browsing right now and discover the amazing Pokemon universe.
            <br />
            If Pokemon are your passion don't hesitate and move on, it's totally
            free!
          </p>
          <Container className="d-flex justify-content-center">
            <Button href="/pokemon-list" size="lg" variant="success">
              Start
            </Button>
          </Container>
        </Container>
      </Container>
    </LandingPageSection>
  );
};

export default HeroSection;
