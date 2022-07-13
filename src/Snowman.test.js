import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

import "./Snowman.css";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

const maxWrong = 6;

describe("smoke test", function () {
    it("renders snowman", function () {
        render(<Snowman/>);
    });

    it('matches snapshot on render', function () {
        const { container } = render(<Snowman/>);
        expect(container).toMatchSnapshot();
    })
})

describe('end of game', function () {
    it("if lost, nWrong === maxWrong", function () {
        const { container, debug } = render(<Snowman maxWrong="1"/>);

        const wrongLetter = container.querySelector('button[value="x"]')
        fireEvent.click(wrongLetter);

        debug(container.querySelector(".Snowman-lose"));
        expect(container).toContainHTML("You lose!");

        // final render has lose message and no buttons

    })
})