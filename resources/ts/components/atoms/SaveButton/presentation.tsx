/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    })
);

const SaveButton = () => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
        >
            保存
        </Button>
    );
};

export default SaveButton;
