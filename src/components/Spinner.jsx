import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Spinner = () => {
  const styling = {
    margin: '0 auto',
    paddingTop: '10%',
    paddingBottom: '112%',
  };

  const styled = {};
  return (
    <>
      <div style={styling}>
        <Box sx={{ width: 800 }} style={styled}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </div>
    </>
  );
};

export default Spinner;
