import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { page } from "@vitest/browser/context";
import { html } from "lit";
import "../src/ilw-section-nav";

const content = html`
    <ilw-section-nav id="nav">
        <a href="/samples/index.html" class="ilw-section-nav--root"
            >Programs of Study</a
        >
        <a href="/samples/index.html">Undergraduate Degrees</a>
        <ilw-section-nav>
            <a href="#">Animal Sciences Major</a>
            <ilw-section-nav>
                <a href="#" aria-current="page">Pre-Veterinary and Medical</a>
                <a href="#">Food Animal</a>
                <ilw-section-nav>
                    <a href="#">Deeper</a>
                    <ilw-section-nav>
                        <a href="#">And Deeper</a>
                    </ilw-section-nav>
                </ilw-section-nav>
                <a href="#">Companion Animal Equine</a>
            </ilw-section-nav>
            <a href="#">Computer & Animal Science</a>
        </ilw-section-nav>
        <a href="#">Undergraduate Degrees</a>
        <ilw-section-nav>
            <a href="#">Some Third Thing</a>
        </ilw-section-nav>
        <a href="#">Undergraduate Degrees</a>
    </ilw-section-nav>
`;

describe("Basic rendering", () => {
    test("Renders open on large screen", async () => {
        await page.viewport(1024, 768);

        const screen = render(content);
        await expect
            .element(screen.getByText("Programs of Study"))
            .toBeVisible();
        await expect
            .element(screen.getByText("Pages In This Section"))
            .not.toBeVisible();
    });
});
