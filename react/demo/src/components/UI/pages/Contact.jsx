import React from "react";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const response = await request.formData();
    const data = Object.fromEntries(response);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};
const Contact = () => {
  return (
    <div className="row">
      <div className="col">
        <h3 className="text-center my-3">Contact Form</h3>
        <Form method="POST" action="/contact">
          <div className="mb-3">
            <label className="form-label">
              {" "}
              <b>Name : </b>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              {" "}
              <b>Email : </b>{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              {" "}
              <b>Password: </b>{" "}
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              autoComplete="off"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
