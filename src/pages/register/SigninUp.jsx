import { Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";

let SigninUp = () => {
  let content = (
    <motion.div
      key="login"
      initial={{ opacity: 0, x: -25 }}
      transition={{ x: { duration: 0.25 } }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.25,
        },
      }}
      exit={{ opacity: 0, x: -25 }}
    >
      <Form className="w-100">
        <Form.Group className="my-4" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Write your username..." />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Write your password..." />
        </Form.Group>
        <Form.Group className="mb-5" controlId="repeatPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Repeat your password..." />
        </Form.Group>
        <Button className="d-block primary px-5 w-100" type="submit">
          Create
        </Button>
      </Form>
    </motion.div>
  );
  return content;
};

export default SigninUp;
