import { useState } from "react";
import {
  Container,
  Pagination,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

const PaginationBar = function (props) {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleOnChange = function (e) {
    setSelectedPage(+e.target.value);
  };

  const handleOnSubmitClick = function (e) {
    e.preventDefault();
    props.onPageChange && props.onPageChange(selectedPage);
  };

  const handleOnLeftClick = function () {
    setSelectedPage((prevState) => prevState - 1);
    props.onPageChange && props.onPageChange(selectedPage - 1);
  };

  const handleOnRightClick = function () {
    setSelectedPage((prevState) => prevState + 1);
    props.onPageChange && props.onPageChange(selectedPage + 1);
  };

  return (
    <Container className="d-flex justify-content-center mt-2">
      <Pagination>
        <Pagination.Prev
          onClick={handleOnLeftClick}
          disabled={selectedPage === 1}
        />
        <Pagination.Item active>{selectedPage}</Pagination.Item>
        <Form>
          <InputGroup>
            <Form.Control
              type="number"
              placeholder="Go to page..."
              aria-label="Page number"
              aria-describedby="basic-addon"
              onChange={handleOnChange}
            />
            <Button type="submit" onClick={handleOnSubmitClick}>
              Go
            </Button>
          </InputGroup>
        </Form>
        <Pagination.Next
          onClick={handleOnRightClick}
          disabled={selectedPage === props.lastPage}
        />
      </Pagination>
    </Container>
  );
};

export default PaginationBar;
