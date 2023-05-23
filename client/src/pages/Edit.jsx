import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {editModels, getModelsByID } from "../api/httprequest";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Helmet } from 'react-helmet';

const Edit = () => {
  const[models,setModels] = useState();
  console.log('models context: ',models);
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    getModelsByID(id).then((res) => {
      console.log('test data: ',res);
      setModel(res);
      formik.values.name = res.name;
      formik.values.parag = res.parag;
      formik.values.imageURL = res.imageURL;
      setLoading(false);
    });
  }, [id]);
  const handleEdit = async(values, actions) => {
    setModels(values);
    await editModels(id,values);
    navigate('/models');
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: model.name,
      parag: model.pa,
      imageURL: model.imageURL,
    },
    onSubmit: handleEdit,
  });
  return (
    <>
    <Helmet>
        <title>Edit Pages</title>
      </Helmet>
      <Typography
        style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
      >
        {model.name} Edit
      </Typography>
      { loading ? <div>loading...</div> : <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextField
          type="text"
          placeholder="model name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="model parag"
          name="parag"
          value={formik.values.parag}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="model image"
          name="imageURL"
          value={formik.values.imageURL}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        <Button style={{margin:'0 auto',display:'block',marginTop:'20px'}} variant="contained" color="primary" type="submit">Edit</Button>
      </form> }
    </>
  );
};

export default Edit;