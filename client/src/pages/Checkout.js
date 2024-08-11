import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  quantity: Yup.number()
    .min(1, "At least one item is required")
    .required("Quantity is required"),
});

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      email: "",
      phoneNumber: "",
      quantity: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Checkout</h2>
          <form noValidate onSubmit={formik.handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "is-invalid"
                    : ""
                }`}
                id="fullName"
                placeholder="Full Name"
                {...formik.getFieldProps("fullName")}
              />
              <label htmlFor="fullName">Full Name</label>
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="invalid-feedback">{formik.errors.fullName}</div>
              ) : null}
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  formik.touched.address && formik.errors.address
                    ? "is-invalid"
                    : ""
                }`}
                id="address"
                placeholder="Address"
                {...formik.getFieldProps("address")}
              />
              <label htmlFor="address">Address</label>
              {formik.touched.address && formik.errors.address ? (
                <div className="invalid-feedback">{formik.errors.address}</div>
              ) : null}
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  formik.touched.city && formik.errors.city ? "is-invalid" : ""
                }`}
                id="city"
                placeholder="City"
                {...formik.getFieldProps("city")}
              />
              <label htmlFor="city">City</label>
              {formik.touched.city && formik.errors.city ? (
                <div className="invalid-feedback">{formik.errors.city}</div>
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
                type="text"
                className={`form-control ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "is-invalid"
                    : ""
                }`}
                id="phoneNumber"
                placeholder="Phone Number"
                {...formik.getFieldProps("phoneNumber")}
              />
              <label htmlFor="phoneNumber">Phone Number</label>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="invalid-feedback">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="quantity">
                Quantity
              </label>
              <div className="input-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  min="1"
                  value={quantity}
                  readOnly
                  {...formik.getFieldProps("quantity")}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              {formik.touched.quantity && formik.errors.quantity ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.quantity}
                </div>
              ) : null}
            </div>
            <div className="d-grid mb-3">
              <button className="btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
