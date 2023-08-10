import React from "react";
import {Image} from "@chakra-ui/react";

export const Logo = React.memo(() => {
    return <Image width={{base: 100, md: 200}} height="auto" src="logo.svg" />;
});
