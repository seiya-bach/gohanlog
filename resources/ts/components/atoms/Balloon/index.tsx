/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const balloon = css`
    background-color: #1a1a1a;
    border-radius: 2px;
    color: white;
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.4rem 0.5rem;
    position: relative;
`;

const Balloon = () => <span css={balloon}>コンポーネント</span>;

export default Balloon;
