import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

const card = (text) => (
    <React.Fragment>
        <CardActionArea sx={{ height: 120, width: 120 }}>
            <CardContent >
                <Typography variant="h8" >
                    {text}
                </Typography>
            </CardContent>
        </CardActionArea>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box maxWidth={720} sx={{ margin: 'none' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
                <Grid item xs={5} component={NavLink} to="/note" sx={{ marginTop: 7, display: 'flex', justifyContent: 'center' }}>
                    <Card variant="outlined" sx={{ borderRadius: '12px' }}>{card("Check Note")}</Card>
                </Grid>
                <Grid item xs={3} component={NavLink} to="/create" sx={{ marginTop: 7, display: 'flex', justifyContent: 'center' }}>
                    <Card variant="outlined" sx={{ borderRadius: '12px' }}>{card("Create Note")}</Card>
                </Grid>
            </Grid>
        </Box>
    );
}