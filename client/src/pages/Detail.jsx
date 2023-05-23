import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material';
import { Card } from 'antd';
import {  getModelsByID } from '../api/httprequest';
import {  Container} from "@mui/material";
import { Helmet } from 'react-helmet';

const Detail = () => {
  const[model,setModel] = useState({});
  const{id} = useParams();
  useEffect(()=>{
    getModelsByID(id).then(res=>{
        setModel(res);  



    })
  },[id]);
  return (
    <>
    <Helmet>
       <title>Detail Page</title>
     </Helmet>
     <Container maxWidth="lg">
     <Box sx={{ flexGrow: 1, width: "100%", margin: "50px auto" }}>
      <Grid container spacing={3}>
    
                <Grid key={model.id} item lg={3} md={6} sm={12}>
                  <Card style={{padding:'30px', height:'500px'}}
                    hoverable
                    cover={
                      <img 
                        style={{
                    width:'100%',
                          height: "450px",
                          objectFit: "cover",
                          objectPosition: "top center ",
                        }}
                        alt="example"
                        src={model.imageURL}
                      />
                    }
                  >
                    <Typography style={{marginTop:'20px'}}>
                      <Link style={{fontSize:'18px',color:'#222222', fontWeight:'600',
                    }} to={`/models/${model._id}`}>{model.name}</Link>
                    </Typography>
                    <Typography style={{color: '#777777',
    fontSize: '14px',
    fontWeight: '300',marginBottom:'10px'}}> {model.parag}</Typography>
    
    
                  </Card>
                </Grid>
            
            
        </Grid>
    </Box>
    </Container>
    </>
  )
}

export default Detail