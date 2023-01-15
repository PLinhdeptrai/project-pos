import './App.css';
import Pin_In from './checkIn/checkIn'
import Pin from './checkOut/checkOut'
import LogoHeader from './Image/Logo-NIK Pink.png';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Item() {


  return (
    <Card >
      <CardActionArea>
        <div className='card-container'>
          <AccountCircleIcon className='Item-Icon'></AccountCircleIcon>
          <CardContent>
            <Typography gutterBottom variant="p" className='name-card' >
              Nguyễn Thị Thanh Nhã
            </Typography>
          </CardContent>

        </div>
      </CardActionArea>
    </Card>
  )

}

const Items = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Date time
  const d = new Date()
  const months = ['Tháng Giêng', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
  const year = d.getFullYear()
  const day = d.getDay()
  const month = months[d.getMonth()]
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()
  var ampm = hour >= 12 ? 'PM' : 'AM';


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // Modal
  const [openm, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClosem = () => setOpen(false);

  const [openf, setfOpen] = React.useState(false);
  const handleOpenf = () => setfOpen(true);
  const handleClosef = () => setfOpen(false);

  return (
    <div className="App">

      <div className='menu-container'>
        <div className='left'>

        </div>
        <div className='center'>
          <div className='header-menu'>
            <div className='header-logo'>
              <img src={LogoHeader}></img>
            </div>

            <div className='header-button'>
              <Box sx={{ '& button': { m: 1 } }}>
                <div>
                  <Button variant="text">MENU</Button>
                  <Button variant="text">Customer Waiting List</Button>
                  <Button variant="text" className='working-button'>Working Station</Button>
                </div>
              </Box>
            </div>
            <div className='header-profile'>

              <Button className='profile'
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
              >
                <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/504222090/vi/anh/m%C3%A8o.jpg?s=2048x2048&w=is&k=20&c=Y8WtngtzimgBI6qzzqUx_JF5rUt2z1SJXUpcHE9Ka1g=" />
                <div className='user-name'>
                  <p>Staff</p>
                  <p className='user-id'>staff@pos.com</p>
                </div>
              </Button>

            </div>
          </div>
          <div className='body-menu'>
            <div className='select-option'>
              <div className='select-option-select'>

                <FormControl className='body-select' sx={{ m: 1 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>SERVICE</em>
                    </MenuItem>
                    <MenuItem value={10}>INCOME</MenuItem>


                  </Select>
                </FormControl>
              </div>
              <div className='body-filter'  >
                <CalendarMonthIcon></CalendarMonthIcon>
                <p>04:00:00 CH</p>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                <div className='body-input'>
                  <form className='input-body'>
                    <label>
                      <div class="form-actions">
                        <form>
                          <div class="alarm-inputs">
                            <input
                              type="number"
                              name="hour"
                              placeholder="Enter hours"
                              min="0"
                              max="12"
                              required
                            />
                            <input
                              type="number"
                              name="min"
                              min="0"
                              max="60"
                              placeholder="Enter minutes"
                              required
                            />
                            <input
                              type="number"
                              name="sec"
                              min="0"
                              max="60"
                              placeholder="Enter seconds"
                              required
                            />
                            <select name="zone" required>
                              <option value="" selected disabled>Zone</option>
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                          
                        </form>
                      </div>
                      <Button variant="contained" className='input-button'>OK</Button>
                    </label>

                  </form>

                </div>
              </div>

            </div>
            <div className='body-item'>
              <BasicGrid></BasicGrid>
            </div>
          </div>
          <div className='footer-menu'>
            <div className='footer-button'>
              <Button onClick={handleOpenf} className='footer-button-left' size="small">Sign In</Button>
              <Modal
                open={openf}
                onClose={handleClosef}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Pin_In></Pin_In>
                  {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography> */}
                </Box>
              </Modal>
              
              <Button onClick={handleOpen} className='footer-button-right' size="small">Sign Out</Button>
              <Modal
                open={openm}
                onClose={handleClosem}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Pin></Pin>
                  {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography> */}
                </Box>
              </Modal>
            </div>
            <div className='footer-time'>
              <p>{hour}:{minute}:{second} {ampm}</p>
              <p>{day} {month} {year}</p>
            </div>
          </div>
        </div>
        <div className='right'>

        </div>
      </div>
    </div>
  );
}

export default App;
