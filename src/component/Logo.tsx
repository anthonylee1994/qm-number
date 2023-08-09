import React from "react";
import {Image} from "@chakra-ui/react";

export const Logo = React.memo(() => {
    return (
          <Image width={100} height='auto' src="logo.svg" />
    );
})
