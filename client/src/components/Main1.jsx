import React, { useEffect, useState } from 'react'
import { deleteModelsById, getAllModels } from '../api/httprequest';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, Typography } from "antd";
import { Button, Container, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
const Main1 = () => {
    const [models, setModels] = useState([]);
    useEffect(() => {
        getAllModels().then((res) => {
        setModels(res);
      });
    }, []);
    function handleSearch(e) {
        getAllModels(e.target.value).then((res) => {
          setModels(res);
        });
      }
    
  return (
    <section>


<div style={{width:'100%', height:'50vh', padding:"120px 0"}}>
<h1 style={{textAlign:'center',paddingBottom: '10px',fontSize: '36px',color: '#222222',
    lineHeight: '1.2em', fontWeight:"600"}}>Featured Robotics Products to Show</h1>
<p style={{textAlign:'center',color: '#777777',
    fontsize: '14px',
    fontWeight: '300',
   }}>
Who are in extremely love with eco friendly system.
</p>


<div style={{marginTop:"100px"}}>
<Container maxWidth="lg">
<TextField
            onChange={(e) => handleSearch(e)}
            style={{ marginBottom: "30px" }}
            id="outlined-basic"
            label="Search Robots"
            variant="outlined"
          />
<Grid container spacing={3}>
          {models &&
            models.map((model) => {
              return (
                <Grid key={model.id} item lg={3} md={6} sm={12}>
                  <Card style={{padding:'30px',}}
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
    <Button><Link style={{color:'black'}} to={`${model._id}`}>VIEW DETAILS</Link></Button>
                    <Button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        })
                        .then((result) => {
                          if (result.isConfirmed) {
                            deleteModelsById(model._id).then((res) => {
                              Swal.fire(
                                `${res.name} Deleted!`,
                                "Your people has been deleted.",
                                "success"
                              );
                            });
                            setModels(
                              models.filter((x) => x._id !== model._id)
                            );
                          }
                        });
                      }}
                      variant="outlined"
                      color="warning"
                    >
                      Delete
                    </Button>


               <Button><Link to={`edit/${model._id}`}>EDIT</Link></Button>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
        </Container>
</div>
</div>
    </section>
    
  )
}

export default Main1
