import Link from "next/link";

let WelcomeForm = () => {
  let content = (
    <div className="mb-5 text-left w-100">
      <h2 style={{ fontSize: "4rem" }}>
        Get valuable information quickly with{" "}
        <span style={{ color: "#ff5a5f" }}>Test Builder</span>
      </h2>
      <p style={{ fontSize: "1.8rem" }} className="my-5 text-secondary">
        With Test Builder you will be able to create simple forms and get the
        information thtat you need.
      </p>
      <div className="d-flex">
        <Link href="register?sec=create" className="btn me-5 primary">
          Create Account
        </Link>
        <Link href="register?sec=login" className="btn secondary">
          Login
        </Link>
      </div>
    </div>
  );
  return content;
};

export default WelcomeForm;
