import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";

// The aim of these exercise was to try FormComponent and react router action

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  // // TO BE IMPLEMENTED: after creating newsletter functionality on backend, including error handling
  // try {
  //   // const response = await axios.post(newsletterUrl, data);
  //   // toast.success(response.data.msg)
  //   // return redirect('/');
  // } catch (error) {
  //   // toast.error(error?.response?.data?.msg)
  //   // return error
  // }

  return null;
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name  */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="Fred"
        />
      </div>
      {/* last name  */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          defaultValue="Woerden"
        />
      </div>
      {/* email  */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="hortodosbarros@gmail.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disables={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}}
      </button>
    </Form>
  );
};

export default Newsletter;
