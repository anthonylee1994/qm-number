import React from "react";
import {HStack, PinInput, PinInputField} from "@chakra-ui/react";

interface Props {
    value: string;
    setValue: (value: string) => void;
}

export const NumberCode = React.memo<Props>(({value, setValue}) => {
    return (
        <HStack mb={4}>
            <PinInput size="lg" focusBorderColor="red.700" value={value} onChange={setValue} variant="filled" placeholder="🔥">
                {Array.from({length: 6}).map((_, index) => (
                    <PinInputField fontSize={24} key={index} color="orange.200" fontWeight="bold" backgroundColor="red.700" _focus={{backgroundColor: "red.900"}} _hover={{}} />
                ))}
            </PinInput>
        </HStack>
    );
});
