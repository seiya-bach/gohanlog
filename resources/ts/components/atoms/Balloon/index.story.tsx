/** @jsx jsx */
import { jsx } from "@emotion/core";
import { storiesOf } from "@storybook/react";
import React from "react";
import Balloon from "./index";

storiesOf("Common/Balloon", module).add("default", () => <Balloon />);
