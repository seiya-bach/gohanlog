/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    })
);

const EditButton = () => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<CreateIcon />}
        >
            編集
        </Button>
    );
};

export default EditButton;
