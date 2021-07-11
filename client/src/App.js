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
 <Videoplayer />
   <Options>
    <Notification />
  </Options>
</div>
);
}
export default App;