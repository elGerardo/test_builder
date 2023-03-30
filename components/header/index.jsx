import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";

import useLocalStorage from "hooks/useLocalStorage";

const Header = () => {
  const [login] = useLocalStorage("login");
console.log(login)
  const content = (
    <Navbar fixed="top" className="bg-white border-bottom">
      <Container>
        <Navbar.Brand href={login ? "/" : "/dashboard"}>
          <h1>Test Builder</h1>
        </Navbar.Brand>
        <nav>
          {login === null ? (
            <>
              <Link href="register?sec=login" className="btn me-3 secondary">
                Login
              </Link>
              <Link href="register?sec=create" className="btn primary">
                Create Account
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="btn me-3 secondary">
                Logout
              </Link>
              <Link href="/user" className="btn primary">
                User
              </Link>
            </>
          )}
        </nav>
      </Container>
    </Navbar>
  );
  return content;
};

export default Header;
