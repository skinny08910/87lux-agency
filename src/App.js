import logo from "./logo.svg";
import "./index.scss";
import { Col, Container, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div className="App">
      <header className="header">
        <Container>
          <Row>
            {/* Logo */}
            <Col>
              <div className="logo">
                <a href="#">87LUX</a>
              </div>
            </Col>

            {/* Nav link */}
            <Col>
              <nav className="nav">
                <ul>
                  <li>
                    <a className="nav__links" href="#">
                      Themes
                    </a>
                  </li>

                  <li>
                    <a className="nav__links" href="#">
                      Apps
                    </a>
                  </li>

                  <li>
                    <a className="nav__links" href="#">
                      Assets
                    </a>
                  </li>

                  <li>
                    <a className="nav__links" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default HomePage;
