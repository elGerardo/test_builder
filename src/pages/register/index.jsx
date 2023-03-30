import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "components/layout";
import Link from "next/link";
import Login from "./Login";
import SigninUp from "./SigninUp";
import { useRouter } from "next/router";

let Register = () => {
  const router = useRouter();

  const content = (
    <div
      style={{ height: "75vh" }}
      className="align-items-center d-flex justify-content-center"
    >
      <div className="p-5 rounded shadow-lg position-relative">
        <span style={{width:"4rem",height:"4rem"}} className="gradient rounded-circle position-absolute top-0 start-50 translate-middle" />
        <div className="align-items-center d-flex justify-content-around my-5">
          <Link
            href="register?sec=create"
            className={
              router.query.sec == "create" ? "text-center text-primary-color" : "btn secondary"
            }
          >
            Create Account
            {router.query.sec == "create" && (
              <span className="d-block">
                <FontAwesomeIcon
                  style={{ width: "1rem" }}
                  className="gradient rounded-circle text-primary-color"
                  icon={faCircle}
                />
              </span>
            )}
          </Link>
          <Link
            href="register?sec=login"
            className={
              router.query.sec != "create" ? "text-center text-primary-color" : "btn secondary"
            }
          >
            Login
            {router.query.sec != "create" && (
              <span className="d-block">
                <FontAwesomeIcon
                  style={{ width: "1rem" }}
                  className="gradient rounded-circle text-primary-color"
                  icon={faCircle}
                />
              </span>
            )}
          </Link>
        </div>
        {router.query.sec == "create" ? <SigninUp /> : <Login />}
      </div>
    </div>
  );
  return content;
};

Register.getLayout = (page) => {
  const content = <Layout>{page}</Layout>;
  return content;
};

export default Register;
