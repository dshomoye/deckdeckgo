/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoMarkdown {
        "editable": boolean;
    }
}
declare global {
    interface HTMLDeckgoMarkdownElement extends Components.DeckgoMarkdown, HTMLStencilElement {
    }
    var HTMLDeckgoMarkdownElement: {
        prototype: HTMLDeckgoMarkdownElement;
        new (): HTMLDeckgoMarkdownElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-markdown": HTMLDeckgoMarkdownElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoMarkdown {
        "editable"?: boolean;
        "onMarkdownDidChange"?: (event: CustomEvent<HTMLElement>) => void;
    }
    interface IntrinsicElements {
        "deckgo-markdown": DeckgoMarkdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-markdown": LocalJSX.DeckgoMarkdown & JSXBase.HTMLAttributes<HTMLDeckgoMarkdownElement>;
        }
    }
}
