export type STACK_ICONS = "woocommerce" | "wordpress" | "react";
type STACK_MAP = { [key in STACK_ICONS]: string }

export const STACK_ICONS_MAP: STACK_MAP = {
    woocommerce: "fab fa-shopify",
    wordpress: "fab fa-wordpress",
    react: "fab fa-react"
}

export const STACK_LABELS_MAP: STACK_MAP = {
    woocommerce: "Woocommerce",
    wordpress: "Wordpress",
    react: "React"
}