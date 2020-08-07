"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
exports["default"] = (function (_a) {
    var xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl;
    var theme = core_1.useTheme();
    var isXlUp = core_1.useMediaQuery(theme.breakpoints.up("xl"));
    var isLgUp = core_1.useMediaQuery(theme.breakpoints.up("lg"));
    var isMdUp = core_1.useMediaQuery(theme.breakpoints.up("md"));
    var isSmUp = core_1.useMediaQuery(theme.breakpoints.up("sm"));
    var isXsUp = core_1.useMediaQuery(theme.breakpoints.up("xs"));
    switch (true) {
        case isXlUp && !!xl:
            return xl;
        case isLgUp && !!lg:
            return lg;
        case isMdUp && !!md:
            return md;
        case isSmUp && !!sm:
            return sm;
        case isXsUp && !!xs:
            return xs;
    }
    return null;
});
