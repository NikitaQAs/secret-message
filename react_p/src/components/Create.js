import * as React from 'react';
import { useState } from 'react';
import '../style.css'
import env from '../env.json';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function Create() {
    const [url, setURL] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [lineForm, setLineForm] = useState('');

    let sendData = (obj) => {
        setLineForm('hide');
        setLineClass('');
        fetch(env.urlBE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    console.log(response);
                    setURL(env.urlFE + response.url);
                }
            });
    }

    let sendForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        if (note === '') {
            alert('Please enter the message');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div onSubmit={sendForm} >
            <form action="" className={lineForm}>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid>
                        <TextField multiline rows={4} label="Enter Your Note!" variant="outlined" type="text" name="note" id="note" className="form-control" sx={{ marginTop: 2, height: 120, width: 500 }} />
                    </Grid>
                    <Grid>
                        <Button variant="contained" type="submit" className="btn">Create Note!</Button>
                    </Grid>
                </Grid>
            </form>
            <div className={lineClass}>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid sx={{ marginTop: 7, height: 40 }}>
                        <Typography variant="h5" color="Red" bgcolor="lightblue" textAlign="center">{url}</Typography>
                    </Grid>
                    <Grid>
                        <Button variant="contained" type="submit" className="btn" onClick={function () { window.location.reload() }}>Create new Note!</Button>
                    </Grid>
                </Grid>
            </div >
        </div >
    );
}

export default Create;