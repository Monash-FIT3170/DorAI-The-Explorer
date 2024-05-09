import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from '../components/LeftSidebar';
import BadgeContainer from '../components/BadgeDisplay';
import Grid from '@mui/material/Unstable_Grid2';
import avatar from '../assets/images/Avatar.png';

import { useApi } from '../context/ApiProvider';

const ProfilePage = () => {
  const { getData } = useApi();
  const [data, setData] = useState(undefined);
  const [isBadgeLoading, setIsBadgeLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getData('api/badges');
        setData(responseData);
        setIsBadgeLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [getData])

  return (
    <div>
      <LeftSidebar />
      <div className='ml-48'>
        <Grid container spacing={2}>
          <Grid xs={12} style={{ padding: '40px'}}>
            <h2 className='russo-one-regular text-6xl'>Welcome User</h2>
          </Grid>
          <Grid xs={4} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{marginBottom: '20px', flexGrow: '1', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={avatar} alt='avatar icon'></img>
            </div>
            <div style={{ border: '2px solid #2196f3', padding: '20px', marginBottom: '40px', flexGrow: '1', width: '60%', textAlign:'center', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' , backgroundColor: '#3CA3EE'}}>
            <Link
              to="/customize"
            >
              <h2 className='russo-one-regular text-3xl'>customize avatar</h2>
            </Link>
            </div>
            <div style={{ border: '2px solid #2196f3', padding: '20px', marginBottom: '40px', flexGrow: '1', width: '75%', textAlign:'center', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 className='russo-one-regular text-4xl'>@Username</h2>
            </div>
            <div style={{ border: '2px solid #2196f3', padding: '20px', marginBottom: '40px', flexGrow: '1', width: '75%', textAlign:'center', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 className='russo-one-regular text-4xl'>7492</h2>
            </div>
          </Grid>
          <Grid xs={8} style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{ border: '2px solid #2196f3', padding: '20px', marginBottom: '40px', flexGrow: '1', width: '100%', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 className='russo-one-regular text-4xl'>My Badges</h2>
              {isBadgeLoading ? <p>Loading...</p> : <BadgeContainer badges={data}/>}
              {/* Add content for badges */}
            </div>
            <div style={{ border: '2px solid #2196f3', padding: '20px', flexGrow: '2', width: '100%', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2 className='russo-one-regular text-4xl'>Units</h2>
              {/* Add content for units */}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ProfilePage;

