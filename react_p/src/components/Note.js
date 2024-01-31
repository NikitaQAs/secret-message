import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineCLass, setLineClass] = useState('');
    const [formError, setFormError] = useState('');
    const [formClass, setFormClass] = useState('');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormError('hide');
                        setFormClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormError('');
                        setFormClass('hide');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormError('hide');
            setFormClass('');
        }
    }, [noteURL]);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value.trim();
        if (url === '') {
            alert('Please enter hash');
            return false;
        }
        noteURL = url;
        window.location.href = env.urlFE + url;
    }

    function searchNote() {
        window.location.href = env.urlFE;
    }

    return (
        <div>
            <div className={lineCLass}>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Typography variant="h8" sx={{ marginTop: 7, height: 40 }}>{noteText}</Typography>
                    <Grid>
                        <Button variant="contained" type="submit" className="btn" onClick={searchNote}>Check other Note</Button>
                    </Grid>
                </Grid>
            </div>
            <div className={formError}>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Typography variant="h4" sx={{ marginTop: 7, height: 40, width: 600 }} color="Red" bgcolor="lightblue" textAlign="center">There is no such Note</Typography>
                    <Grid>
                        <Button variant="contained" type="submit" className="btn" onClick={searchNote}>Check other Note</Button>
                    </Grid>
                </Grid>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <Grid container direction="column"
                        justifyContent="center"
                        alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid>
                            <TextField label="Enter hash" variant="outlined" type="text" name="url" id="url" className="form-control" sx={{ marginTop: 7, height: 40, width: 270 }} />
                        </Grid>
                        <Grid>
                            <Button variant="contained" type="submit" className="btn">Check the Note</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}

export default Note;