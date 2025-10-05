export default {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss"
    ],
    plugins: ["stylelint-order"],
    rules: {
        "order/properties-alphabetical-order": true,
        "color-hex-case": "lower",
        "selector-class-pattern": "^[a-z0-9\\-]+$", // kebab-case only
        "declaration-block-no-duplicate-properties": true,
        "block-no-empty": true,
        "no-descending-specificity": null,
    },
    ignoreFiles: [
        "dist/**/*",
        "node_modules/**/*"
    ],
};
