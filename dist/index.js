"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
exports.default = ({ xs, sm, md, lg, xl }) => {
    const theme = core_1.useTheme();
    const isXlUp = core_1.useMediaQuery(theme.breakpoints.up("xl"));
    const isLgUp = core_1.useMediaQuery(theme.breakpoints.up("lg"));
    const isMdUp = core_1.useMediaQuery(theme.breakpoints.up("md"));
    const isSmUp = core_1.useMediaQuery(theme.breakpoints.up("sm"));
    const isXsUp = core_1.useMediaQuery(theme.breakpoints.up("xs"));
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
};
