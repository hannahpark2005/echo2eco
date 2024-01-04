import { Box, Typography } from '@mui/material';

const Section = ({ title, subtitle, children, videoURL }) => {
  return (
    <Box display='flex' gap={1} flexDirection='column' marginBottom={15}>
      <Typography variant='h2'>{title}</Typography>
      <Typography variant='h4' color='GrayText'>
        {subtitle}
      </Typography>
      {children}
      <Box hidden={!videoURL} marginTop={1} maxWidth={600} height={300}>
        <iframe
          width='100%'
          height='100%'
          src={videoURL}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </Box>
    </Box>
  );
};

export default Section;
