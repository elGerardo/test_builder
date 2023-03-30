import { Container } from "react-bootstrap";
import Layout from "components/layout";
import Items from "./Items";
const Dashboard = () => {
  const content = (
    <Container>
      <h2>My Tests</h2>
      <hr />
      <Items data={{total:5}}/>
    </Container>
  );

  return content;
};

Dashboard.getLayout = (page) => {
  const content = <Layout>{page}</Layout>;
  return content;
};

export default Dashboard;
