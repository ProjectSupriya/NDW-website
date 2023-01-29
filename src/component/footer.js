import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeaderLogo from './media/headerlogo.png';
import Linkdin from './media/linkdin.png';
import Facebook from './media/facebook.png';
import Insta from './media/instagram.png'
import { Typography } from '@mui/material';
import { NavLink } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({

  button: {
    
    color: '#00485b',

},
})
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid container>
        <Grid item xs={12} md={2} >
          <Item elevation={0} sx={{pb:5,display:'flex', borderRadius:'0',height:'100%', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
          <img 
              src={HeaderLogo}
              alt=""
              style={{ objectFit: "cover", mt: 0, width: "150px", cursor: 'pointer' }}
            />
            <div className="social">
              <a  href="https://www.linkedin.com/company/national-disability-workforce-ndw/" target="_blank" >
              <img 
              src={Linkdin}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "37px", cursor: 'pointer' }}
            />
              </a>
           
          
        <a href="https://www.facebook.com/NDWSydney/" target="_blank">
          <img 
              src={Facebook}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "37px", cursor: 'pointer' }}
              
            />
           </a>
       
           <a href="https://www.instagram.com/ndwsydney/" target="_blank">
           <img 
              src={Insta}
              alt=""
              style={{ objectFit: "contain", mt: 0, width: "37px", cursor: 'pointer' }}
            />
           </a>
           
            </div>
            
          </Item>
        </Grid>
        {/* {/ section1 /} */}
        <Grid item xs={12} md={2}sx={{textAlign:'left',  display: { xs: "none", md: "block", },}}>
          <Item elevation={0} sx={{ background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'baseline'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', fontSize:'20px', textAlign:'left'}}>
            About Us
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us" >About National Disability Workforce</NavLink>
         
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us">Our Vision, Mission and Motto</NavLink>
         
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us">Our Team</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9', borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us">Latest News</NavLink>
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={2}sx={{textAlign:'center',  display: { xs: "block", md: "none", },}}>
          <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', fontSize:'20px', textAlign:'center'}}>
            About Us
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'center', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us" >About National Disability Workforce</NavLink>
         
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'center', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us">Our Vision, Mission and Motto</NavLink>
         
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'center', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us">Our Team</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9', borderBottom:'none', fontSize: '13px', textAlign:'center', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/about-us">Latest News</NavLink>
          </Typography>
          </Item>
        </Grid>
        {/* {/ section2 /} */}
        {/* <Grid item xs={12} md={2} sx={{display: { xs: "none", md: "block", },}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'baseline', alignItems:'start'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'left',borderBottom:'none', fontSize:'20px'}}>
          Job Search
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px',borderBottom:'none', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/job-search">Search job by Role</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px',borderBottom:'none', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/job-search">Search job by Classification</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/job-search">Search job by Location</NavLink>
          </Typography>
        
          </Item>
        </Grid>
        <Grid item xs={12} md={2} sx={{display: { xs: "block", md: "none", },}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'center',borderBottom:'none', fontSize:'20px'}}>
          Job Search
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px',borderBottom:'none', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/job-search">Search job by Role</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px',borderBottom:'none', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/job-search">Search job by Classification</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/job-search">Search job by Location</NavLink>
          </Typography>
        
          </Item>
        </Grid> */}
        {/* {/ section3 /} */}
        <Grid item xs={12} md={2} sx={{display: { xs: "none", md: "block", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'baseline'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', fontSize:'20px', textAlign:'left',}}>
          Our Services
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">Aged care</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">NDIS</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">Disability Support Worker</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">Nursing</NavLink>
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={2} sx={{display: { xs: "block", md: "none", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', fontSize:'20px', textAlign:'left',}}>
          Our Services
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">Aged care</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">NDIS</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">Disability Support Worker</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/our-services">Nursing</NavLink>
          </Typography>
          </Item>
        </Grid>
        {/* {/ section4 /} */}
        <Grid item xs={12} md={2} sx={{display: { xs: "none", md: "block", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'baseline'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'left', fontSize:'20px'}}>
          Training
          </Typography>
          
         
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/training">Mental Health First Aid</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/training">Crisis Prevention</NavLink>
          </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={2} sx={{display: { xs: "block", md: "none", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'left', fontSize:'20px'}}>
          Training
          </Typography>
          
         
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/training">Mental Health First Aid</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/training">Crisis Prevention</NavLink>
          </Typography>
          </Item>
        </Grid>
        {/* {/ section5 /} */}
        <Grid item xs={12} md={2} sx={{ display: { xs: "none", md: "block", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'baseline'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'left', fontSize:'20px'}}>
          Contact Us
          </Typography>
          
         
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize', }} to="/contact-us"> National Disability  Workforce</NavLink>
          </Typography>
          <Typography sx={{display:'flex', mt:1, color:'#fff', flexDirection:'row', alignItems:'center', justifyContent:'start'}}>
          <EmailIcon sx={{color:'#fff', fontSize:'20px', }}/> &nbsp;&nbsp; <a style={{color: '#efefef', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400',}} href="mailto:admin@ndw.net.au">admin@ndw.net.au</a>
          </Typography> 
          <Typography sx={{display:'flex', mt:1, color:'#fff', flexDirection:'row', alignItems:'center', justifyContent:'start'}}>
          <LocalPhoneIcon sx={{color:'#fff', fontSize:'20px',lineHeight:'25px'}}/> &nbsp;&nbsp; <a  style={{color: '#efefef', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize'}} href="tel:1800 774 954">1800 774 954</a>
          </Typography>
          </Item>
       
        </Grid>
        <Grid item xs={12} md={2} sx={{display: { xs: "block", md: "none", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'left', fontSize:'20px'}}>
          Contact Us
          </Typography>
          
         
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize', }} to="/contact-us"> National Disability  Workforce</NavLink>
          </Typography>
          <Typography sx={{display:'flex', mt:1, color:'#fff', flexDirection:'row', alignItems:'center', justifyContent:'start'}}>
          <EmailIcon sx={{color:'#fff', fontSize:'20px', }}/> &nbsp;&nbsp; <a style={{color: '#efefef', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400',}} href="mailto:admin@ndw.net.au">admin@ndw.net.au</a>
          </Typography> 
          <Typography sx={{display:'flex', mt:1, color:'#fff', flexDirection:'row', alignItems:'center', justifyContent:'start'}}>
          <LocalPhoneIcon sx={{color:'#fff', fontSize:'20px',lineHeight:'25px'}}/> &nbsp;&nbsp; <a  style={{color: '#efefef', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize'}} href="tel:1800 774 954">1800 774 954</a>
          </Typography>
          </Item>
       
        </Grid>
        {/* section privacy policy */}
        <Grid item xs={12} md={2} sx={{ display: { xs: "none", md: "block", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'baseline'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'left', fontSize:'20px'}}>
          Legal
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/privacypolicy">Privacy Policy</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/terms&conditions">Terms and Conditions</NavLink>
          </Typography>
          </Item>
       
        </Grid>
        <Grid item xs={12} md={2} sx={{display: { xs: "block", md: "none", }}}>
        <Item elevation={0} sx={{background:'#008ED9', height:'100%', p:2.5, borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
          <Typography sx={{color:'#fff', fontWeight:'600', textAlign:'left', fontSize:'20px'}}>
          Legal
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/privacypolicy">Privacy Policy</NavLink>
          </Typography>
          <Typography sx={{mt:1}}>
          <NavLink style={{ color: '#efefef',background:'#008ED9',borderBottom:'none', fontSize: '13px', textAlign:'left', textDecoration: 'none',fontWeight:'400', textTransform: 'capitalize' }} to="/terms&conditions">Terms and Conditions</NavLink>
          </Typography>
          </Item>
       
        </Grid>
        {/* {/ section6 /} */}
        <Grid container spacing={0} >
        <Grid item xs={12} md={2} sx={{background:'#fff',display: { xs: "none", md: "block", }}}>
          <Item elevation={0} sx={{background:'#fff'}}></Item>
        </Grid>
        <Grid item xs={12} md={2} sx={{background:'#008ED9',display: { xs: "block", md: "none", }}}>
          <Item elevation={0} sx={{background:'#008ED9'}}></Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item elevation={0} sx={{background:'#008ED9', borderRadius:'0'}}>
           <Typography sx={{fontSize:'14px', color:'#e4e4e4', textAlign:'center', p:1}}>
           Copyright 2022 NDW. All rights reserved.
           </Typography>
         
          </Item>
        </Grid>
        <Grid item xs={12} md={2} sx={{display: { xs: "none", md: "block", }}}>
          <Item elevation={0} sx={{background:'#008ED9', borderRadius:'0'}}>
          
           <a target="_blank" style={{fontSize:'14px', color:'#e4e4e4', textAlign:'center', p:1, textDecoration:'none'}} href="https://codeplateau.com/">Site By: Codeplateau</a>
           <Typography href="https://codeplateau.com/" sx={{fontSize:'14px', color:'#e4e4e4', textAlign:'center', p:1}}>
           
           </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={2} sx={{display: { xs: "block", md: "none", }}}>
          <Item elevation={0} sx={{background:'#008ED9', borderRadius:'0', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
          
           <a target="_blank" style={{fontSize:'14px', color:'#e4e4e4', textAlign:'center', p:1, textDecoration:'none'}} href="https://codeplateau.com/">Site By: Codeplateau</a>
           <Typography href="https://codeplateau.com/" sx={{fontSize:'14px', color:'#e4e4e4', textAlign:'center', p:1}}>
           
           </Typography>
          </Item>
        </Grid>
      
      </Grid>
      </Grid>
    </Box>
  );
}
