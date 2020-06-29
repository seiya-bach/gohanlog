import { configure, addDecorator } from "@storybook/react";
//import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

//import "../src/index.css";

const req = require.context(
    "../resources/ts/components/atoms",
    true,
    /.(story|stories).tsx$/
);

function loadStories() {
    //addDecorator(withInfo);
    addDecorator(withKnobs);
    req.keys().forEach(req);
}

configure(loadStories, module);
