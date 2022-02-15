import React from "react";
import CheckBox from "./CheckBox";
import {render,fireEvent} from "@testing-library/react";

test("Select the checked", () => {
    const {getByLabelText} = render(<CheckBox/>);
    const checkBox = getByLabelText(/not checked/i);
    fireEvent.click(checkBox);
    // @ts-ignore
    expect(checkBox.checked).toEqual(true)
    fireEvent.click(checkBox);
    // @ts-ignore
    expect(checkBox.checked).toEqual(false)
})
test("Select the checked getByTestId", () => {
    const {getByTestId} = render(<CheckBox/>);
    const checkBox = getByTestId("checkbox");
    fireEvent.click(checkBox);
    // @ts-ignore
    expect(checkBox.checked).toEqual(true)
})