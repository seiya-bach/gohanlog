/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    })
);

const DeleteButton = () => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
        >
            削除
        </Button>
    );
};

export default DeleteButton;
