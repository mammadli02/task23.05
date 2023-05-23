import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { ModelValidation } from "../validation/ModelSchema";
import { postModels } from "../api/httprequest";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const handleSubmit = async(values, actions) => {
    await postModels(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/models');
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      imageURL: "",
    },
    validationSchema: ModelValidation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add Pages</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="enter name"
          type="text"
          name="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.parag}
          placeholder="enter parag"
          type="text"
          name="parag"
        />
        {formik.errors.parag && formik.touched.parag && (
          <span>{formik.errors.parag}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
          placeholder="enter image"
          type="url"
          name="imageURL"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.imageURL}</span>
        )}
        <button
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New Models
        </button>
      </form>
    </>
  );
};

export default Add;

