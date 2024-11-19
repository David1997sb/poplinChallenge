"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    timeout: 15000,
    testDir: './features',
    use: {
        headless: true,
        actionTimeout: 15000
    },
});
//# sourceMappingURL=playwright.config.js.map