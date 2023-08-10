import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

export const P = React.memo<Props>(({children}) => {
    return <Text _notLast={{mb: 4}}>{children}</Text>;
});
