import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import EditButton from '../../atoms/EditButton/presentation';
import DeleteButton from '../../atoms/DeleteButton/presentation';

export interface FoodItemProps {
    foodTitle: string;
    description: string;
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    buttons: {
        textAlign: 'right',
    },
});

const FoodItem = ({ foodTitle, description }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardHeader title="冷やし中華" />
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                >
                    Tags
                </Typography>
                <Divider />
                <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                >
                    今日の晩ご飯は冷やし中華
                </Typography>
            </CardContent>
            <CardActions>
                <Grid item xs={12} className={classes.buttons}>
                    <EditButton />
                    <DeleteButton />
                </Grid>
            </CardActions>
        </Card>
    );
};

export default FoodItem;
