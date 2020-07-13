import React from 'react';

import Grid from '@material-ui/core/Grid';

import FoodItem from '../../molecules/FoodItem/presentation';

const FoodList = () => {
    const foodItemData = [
        { title: 'おにぎり', description: '梅おにぎり' },
        { title: '焼肉', description: '外食' },
        { title: 'ラーメン', description: '塩' },
    ];
    return (
        <Grid container spacing={3}>
            {foodItemData.map((data) => (
                <Grid item xs={12}>
                    <FoodItem
                        title={data.title}
                        description={data.description}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default FoodList;
