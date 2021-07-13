import React from 'react';
import {  Typography,AppBar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Videoplayer from './Component/Videoplayer';
import Options from './Component/Options';
import Notification from './Component/Notification';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));
const App = ()=>{
  const classesin = useStyles();

return(
 <div className={classesin.wrapper}>
<AppBar className={ classesin.appBar} position = 'static' color='inherit'>
        <Typography variant="h4" align="center">Welcome to App </Typography>
</AppBar>
<ul>
  <li>
    To make a call please follow the given steps :
  </li>
  <li>
    Enter your name which you want to display on screen
  </li>
  <li>
    To start a call, there are two ways
    <ul>
      <li>
      Either you copy your Dynamic user ID by clicking on Copy ID ,then paste and send it via any social media platform or,
      </li>
    <li>
      Enter ID of user to whom you want to make a call in Make a call tab and click on call
    </li>
    </ul>
  </li>
  Enjoy your call
</ul>
 <Videoplayer />
   <Options>
    <Notification />
  </Options>
</div>
);
}
export default App;