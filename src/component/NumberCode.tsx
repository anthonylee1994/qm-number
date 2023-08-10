import React from "react";
import {HStack, PinInput, PinInputField} from "@chakra-ui/react";

interface Props {
    value: string;
    setValue: (value: string) => void;
}

export const NumberCode = React.memo<Props>(({value, setValue}) => {
    return (
        <HStack mb={{base: 4, md: 8}}>
            <PinInput size="lg" focusBorderColor="red.700" value={value} onChange={setValue} variant="filled" placeholder="🔥">
                {Array.from({length: 6}).map((_, index) => (
                    <PinInputField
                        width={{base: 50, md: 70}}
                        height={{base: 50, md: 70}}
                        fontSize={{base: 24, md: 40}}
                        key={index}
                        color="orange.200"
                        fontWeight="bold"
                        backgroundColor="red.700"
                        borderRadius={{base: "md", md: "xl"}}
                        _focus={{backgroundColor: "red.900"}}
                        _hover={{}}
                    />
                ))}
            </PinInput>
        </HStack>
    );
});
