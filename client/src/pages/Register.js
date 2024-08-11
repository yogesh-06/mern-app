import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      axios
        .post("http://localhost:8080/api/user/register", values)
        .then((res) => {
          console.log("===response===", res);
          navigate("/login");
        })
        .catch((error) => {
          console.log("===error", error);
          setError(error.response.data.message);
        });
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Register</h2>
          <form noValidate onSubmit={formik.handleSubmit}>
            {error && (
              <div className="alert alert-danger p-2" role="alert">
                {error}
              </div>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? "is-invalid" : ""
                }`}
                id="name"
                placeholder="John Doe"
                {...formik.getFieldProps("name")}
              />
              <label htmlFor="name">Full Name</label>
              {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : ""
                }`}
                id="email"
                placeholder="name@example.com"
                {...formik.getFieldProps("email")}
              />
              <label htmlFor="email">Email address</label>
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control ${
                  formik.touched.password && formik.errors.password
                    ? "is-invalid"
                    : ""
                }`}
                id="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <label htmlFor="password">Password</label>
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="d-grid mb-3">
              <button className="btn btn-primary btn-lg" type="submit">
                Register
              </button>
            </div>
            <div className="text-center">
              <p>
                Already registered? <Link to="/login">Login here</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
