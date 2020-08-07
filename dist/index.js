import { useMediaQuery, useTheme } from "@material-ui/core";
export default ({ xs, sm, md, lg, xl }) => {
    const theme = useTheme();
    const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
    const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
    const isXsUp = useMediaQuery(theme.breakpoints.up("xs"));
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
