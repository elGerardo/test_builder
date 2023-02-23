import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";

let Header = () => {
  let content = (
    <Navbar fixed="top" className="bg-white border-bottom">
      <Container>
        <Navbar.Brand href="/">
          <h1>Test Builder</h1>
        </Navbar.Brand>
        <nav>
          <Link href="register?sec=create" className="btn me-3 secondary">
            Login
          </Link>
          <Link href="register?sec=login" className="btn primary">
            Create Account
          </Link>
        </nav>
      </Container>
    </Navbar>
  );
  return content;
};

export default Header;
