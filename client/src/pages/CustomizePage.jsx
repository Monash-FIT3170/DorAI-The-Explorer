import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LabTabs from '../components/characterCustomization/CustomizeItemTabs';
import Grid from '@mui/material/Unstable_Grid2';
import { useApi } from '../context/ApiProvider';
import Avatar from '../components/characterCustomization/Avatar';


const CustomizePage = () => {
  return (
    
      <div style ={{ backgroundColor: '#3CA3EE', overflowY: 'hidden', overflowX: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column'}} >
        <Grid container spacing={2} columns={22} style={{paddingTop: '40px', paddingLeft: '60px', paddingRight: '80px', marginBottom: '20px'}}>
            <Grid xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                <p className='russo-one-regular text-5xl text-white'>JRVS</p>
                </Grid>
                <Grid xs={15} ></Grid>
                <Grid xs={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{padding:'10px', backgroundColor: 'white', borderRadius: '20px'}}>
                    <p className='russo-one-regular text-4xl'>&nbsp;1020🪙&nbsp;</p>
                </div>
                <Link to="/">
                    <p className='russo-one-regular text-5xl'>🎓</p>
                </Link>
                <Link to="/profile">
                    <p className='russo-one-regular text-5xl'>👤</p>
                </Link>
            </Grid>
        </Grid>
        <Grid container spacing={0} columns={24}>
          <Grid xs={8} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* TODO pass the current names for initialization */}
            <Avatar avatarPath='_default.png' backgroundPath='_default.png' borderPath='_default.png'/>
            <div style={{ border: '2px solid #2196f3', padding: '20px', marginBottom: '20px', flexGrow: '1', width: '75%', textAlign:'center', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
              <p className='russo-one-regular text-4xl'>@Username</p>
            </div>
            <div style={{ border: '2px solid #2196f3', padding: '20px', marginBottom: '20px', flexGrow: '1', width: '75%', textAlign:'center', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
              <p className='russo-one-regular text-4xl'>1020🪙</p>
            </div>
          </Grid>
          <Grid xs={16} style={{paddingRight: '80px', paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{ border: '2px solid #2196f3', marginBottom: '35px', flexGrow: '1', width: '100%', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
              <LabTabs></LabTabs>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={15}>
            <Grid xs={5} ></Grid>
            <Grid xs={2} style={{ padding: '20px', border: '2px solid #2196f3', backgroundColor: '#27CA40', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}} onClick={function(){
                //TODO store the names of selected customizations
                console.log(document.getElementById('userBorder').getAttribute("data-name"));
                console.log(document.getElementById('userAvatar').getAttribute("data-name"));
                console.log(document.getElementById('userBackground').getAttribute("data-name"));
            }}>
                <Link to="/profile">
                    <p className='russo-one-regular text-4xl'>Save</p>
                </Link>
            </Grid>
            <Grid xs={1} ></Grid>
            <Grid xs={2} style={{ padding: '20px', border: '2px solid #2196f3', backgroundColor: '#DF4E4E', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <Link to="/profile">
                    <p className='russo-one-regular text-4xl'>Cancel</p>
                </Link>
            </Grid>
            <Grid xs={5} ></Grid>
        </Grid>
        <Grid container style={{flex: '1'}}></Grid>
      </div>
  );
}

export default CustomizePage;


