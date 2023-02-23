import Layout from "components/layout";
import Message from "./welcome/Message";
import WelcomeForm from "./welcome/WelcomeForm";

const Home = () => {
  return (
    <div
      style={{ height: "75vh" }}
      className="d-flex flex-lg-row flex-column justify-content-around align-items-center"
    >
      <WelcomeForm />
      <Message />
    </div>
  );
};

Home.getLayout = (page) => {
  const content = <Layout>{page}</Layout>;
  return content;
};

export default Home;
