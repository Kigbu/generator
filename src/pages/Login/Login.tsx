import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import FormInput from "../../components/Form/FormInput/FormInput";

const Login = () => {
  const { control } = useForm();
  return (
    <>
      <Helmet>
        <title>Flopay | Login</title>
        <meta name="description" content="#" />
      </Helmet>
      <main>
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="mb-20">Login From Here</h3>
                  {/* <p>
                    Welcome! Please confirm that your are visiting <br />{" "}
                    <a href="#">https://www.xisen.com</a>
                  </p> */}
                  <div className="mb-30"></div>
                  <form action="#">
                    <FormInput
                      name={"email"}
                      control={control}
                      label={"Email"}
                      placeholder={"Email"}
                      isRequired
                      type={"text"}
                      rules={{
                        required: "Email is required",
                      }}
                    />
                    <FormInput
                      name={"password"}
                      control={control}
                      label={"Password"}
                      placeholder={"Enter Password"}
                      isRequired
                      type={"password"}
                      rules={{
                        required: "Password is required",
                      }}
                    />
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                      </span>
                      <span className="forgot-login f-right">
                        <a href="#">Lost your password?</a>
                      </span>
                    </div>
                    <button className="login-btn w-100">Login Now</button>
                    <div className="sign-up text-center mt-30">
                      <span>New User?</span>
                      <button className="login-text-btn">Register Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
