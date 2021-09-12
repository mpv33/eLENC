import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 30,
        padding: 20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        paddingRight: 10
    },
    card: {
        padding: 10,
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '95ch',
        padding:20
    },
}));


const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name, email, message)
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
            <div className={classes.root}>
                <Typography variant="h5" gutterBottom>
                    Contact Us
                </Typography>
                <Grid container xs={12} justifyContent="center">
                    <Grid className={classes.card} xs={10} sm={10}>
                        <Paper className={classes.paper}>
                            <Grid container alignItems='center' justifyContent='center'>
                                <Grid className={classes.textField} item xs={10} sm={8}>
                                    <TextField id="standard-basic"
                                        
                                        style={{width:'90%'}}
                                        placeholder=" Enter Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>

                                <Grid className={classes.textField} item xs={10} sm={8}>
                                    <TextField id="standard-basic"
                                    
                                        style={{width:'90%'}}
                                        placeholder=" Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>

                                <Grid className={classes.textField} className={classes.paper}  item xs={10} sm={10}>
                                    <TextareaAutosize aria-label="Message"
                                        minRows={5}
                                        style={{width:'70%'}}
                                        placeholder=" Write Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </Grid>


                            </Grid>

                                <Button onClick={{ handleSubmit }} variant="contained" color="primary">
                                    Submit
                                </Button>

                        </Paper>
                    </Grid>


                </Grid>
            </div>

        </>
    );
};

export default Contact;