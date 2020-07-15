/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require("./components/Example");

import * as React from 'react';
import { render } from 'react-dom';
import Balloon from './components/atoms/Balloon';
import EditButton from './components/atoms/SaveButton/presentation';
import FoodItem from './components/molecules/FoodItem/presentation';

interface Props {}

const App = (props: Props) => {
    const aaa: number = 0;

    return (
        <div>
            <Balloon />
            <EditButton />
            <FoodItem title="gohan" description="yakiniku" />
            hello react
        </div>
    );
};

render(<App />, document.getElementById('app'));
