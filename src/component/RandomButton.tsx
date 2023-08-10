import React from "react";
import {Button} from "@chakra-ui/react";

interface Props {
    setNumberCode: (code: string) => void;
}

export const RandomButton = React.memo<Props>(({setNumberCode}) => {
    return (
        <Button
            size={{base: "md", md: "lg"}}
            onClick={() => {
                const random = Math.floor(Math.random() * 1000000)
                    .toString()
                    .padStart(6, "0");
                setNumberCode(random);
            }}
            fontSize={{base: "md", md: "xl"}}
            colorScheme="red"
            borderRadius={{base: "md", md: "lg"}}
            w={340}
            mb={4}
        >
            亂數產生
        </Button>
    );
});
