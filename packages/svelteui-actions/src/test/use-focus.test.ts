import { describe, expect, test } from "vitest";
import { render } from "@testing-library/svelte";

import UseFocus from "./actions/use-focus.svelte";

describe("use-focus", () => {
    test("focus on an input", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        const { component } = render(UseFocus, { target: container });
        expect(component).toBeTruthy();
        expect(document.activeElement.id).eq("focus");
    });
});
