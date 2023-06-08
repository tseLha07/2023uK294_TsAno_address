import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthorizationService from "../../services/AuthorisationService";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    AuthorizationService()
      .getAuthorization(email, password)
      .then((value: string) => {
        localStorage.setItem("accessToken", value);
        navigate("/address");
      })
      .catch((error)=>{
        console.log(error)
      });
  };

  return (
    <div>
      <h1>Login :)</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        enableReinitialize
        validate={(values) => {
          const errors: { email?: string } = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            login(values.email, values.password);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <label htmlFor="email">E-Mail:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting || !isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
