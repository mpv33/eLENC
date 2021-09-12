import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageSlider from '../header/Slider'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 30,
        padding:20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        paddingRight: 10
    },
    card: {
        padding: 10,
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <>
            <ImageSlider />

            <div className={classes.root}>
                <Grid container xs={12} justifyContent="center">
                    <Grid className={classes.card} item xs={10} sm={5}>
                        <Typography variant="h5" gutterBottom>
                            Our's Mission
                        </Typography>
                        <Paper className={classes.paper}> Trying to integrate everythings
                            at one place like -eLearning ,eCommorce,Vedio streaming ,Social network .</Paper>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Typography variant="h5" gutterBottom>
                    Our Module's
                </Typography>
                <Grid container xs={12} justifyContent="center">
                    <Grid className={classes.card} item xs={10} sm={5}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" gutterBottom>
                                SDE Kit
                            </Typography>
                            Trying to integrate everythings
                            at one place like -eLearning ,eCommorce,Vedio streaming ,Social network .
                        </Paper>
                    </Grid>
                    <Grid className={classes.card} item xs={10} sm={5}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" gutterBottom>
                                Fun Academy
                            </Typography>
                            Trying to integrate everythings
                            at one place like -eLearning ,eCommorce,Vedio streaming ,Social network .
                        </Paper>
                    </Grid>
                    <Grid className={classes.card} item xs={10} sm={5}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" gutterBottom>
                                eCommorce
                            </Typography>
                            Trying to integrate everythings
                            at one place like -eLearning ,eCommorce,Vedio streaming ,Social network .
                        </Paper>
                    </Grid>
                    <Grid className={classes.card} item xs={10} sm={5}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" gutterBottom>
                                MBook
                            </Typography>
                            Trying to integrate everythings
                            at one place like -eLearning ,eCommorce,Vedio streaming ,Social network .
                        </Paper>
                    </Grid>
                    <Grid className={classes.card} item xs={10} sm={5}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" gutterBottom>
                                Entertainment
                            </Typography>
                            Trying to integrate everythings
                            at one place like -eLearning ,eCommorce,Vedio streaming ,Social network .
                        </Paper>
                    </Grid>
                    <Grid className={classes.card} item xs={10} sm={5}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" gutterBottom>
                                My Blogs
                            </Typography>
                            Trying to integrate everythings
                            at one place like -eLearning ,eCommorce,Vedio streaming ,Social network .
                        </Paper>
                    </Grid>



                </Grid>
            </div>
        <Contact />
        <Footer />
         </>
    );
}
