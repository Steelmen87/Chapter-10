import React, {useReducer} from "react";

export default function CheckBox() {
    const [checked, setChecked] = useReducer(
        checked => !checked, false
    );

    return (
        <>
            <label>
                {checked ? "checked" : "not checked"}
                <input
                    type="checkbox"
                    // @ts-ignore
                    value={checked}
                    onChange={setChecked}
                    data-testid="checkbox"
                />
            </label>
        </>
    );
}