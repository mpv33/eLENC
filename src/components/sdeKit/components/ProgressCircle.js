import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

const ProgressCircle = (props) => {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          style={{
            color: `${
              props.value > 75 ? 'green' : props.value > 40 ? 'yellow' : 'red'
            }`,
            height: '70px',
            width: '70px',
          }}
          variant="determinate"
          value={props.value}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            style={{ fontSize: '20px' }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    )
  }
  
export default ProgressCircle