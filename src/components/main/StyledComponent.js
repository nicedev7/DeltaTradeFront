import { Box, Tab, styled, Typography } from '@mui/material';

export const TabStyled = styled(Tab)(({ theme }) => ({
    marginRight: `${theme.spacing(2)} !important`,
    fontSize: '0.8rem',
    fontWeight: 'normal'
}));

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{height: '100%'}}>
                {children}
            </Box>
            )}
        </div>
    );
}