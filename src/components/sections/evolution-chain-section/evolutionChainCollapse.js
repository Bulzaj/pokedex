import { Container, Collapse, Button } from "react-bootstrap";
import RegularList from "../../regular-list/regularList";
import { evolutionDetailParser } from "../../../utils";

const EvolutionChainCollapse = function (props) {
  const { showEvolutionInfo, selectedChainLink, handleCloseInfoBtnClick } =
    props;

  return (
    <Container>
      <Collapse in={showEvolutionInfo}>
        <Container
          id="evolution-details"
          className="bg-light text-dark rounded p-2 mb-3"
        >
          <RegularList>
            {selectedChainLink
              ? Object.entries(selectedChainLink.evolutionDetails).map(
                  (detail) => {
                    return (
                      <RegularList.Item key={detail[0]}>
                        {evolutionDetailParser(detail)}
                      </RegularList.Item>
                    );
                  }
                )
              : "Closing ..."}
          </RegularList>
          <Button variant="dark" size="lg" onClick={handleCloseInfoBtnClick}>
            Close
          </Button>
        </Container>
      </Collapse>
    </Container>
  );
};

export default EvolutionChainCollapse;
