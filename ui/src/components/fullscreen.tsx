import { Box, Tooltip, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaTv } from "react-icons/fa";
import { useKey } from "react-use";
import { FullscreenEvent } from "src/data/bus-events";
import { FullscreenKey } from "src/data/storage-keys";
import { dispatch } from "use-bus";
import storage from "utils/localStorage";
import React from "react"
import { useStore } from "@nanostores/react";
import { dashboardMsg } from "src/i18n/locales/en";

const Fullscreen = () => {
    const t1 = useStore(dashboardMsg)
    const toast = useToast()
    const [fullscreen, setFullscreen] = useState(storage.get(FullscreenKey)??false)

    useKey("Escape", () => onFullscreenChange(true))

    useEffect(() => {
        if (fullscreen) {
            toast({
                description: t1.exitFullscreenTips,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
        dispatch({ type: FullscreenEvent, data: fullscreen })
        storage.set(FullscreenKey, fullscreen)
    },[fullscreen])

    const onFullscreenChange = (isExit?) => {
        setFullscreen(f => {
            if (isExit) {
                if (f == false) {
                    return  false
                }
            }

            return !f
        })
    }

    return (
        <Tooltip label={t1.fullscreenTips}><Box onClick={() =>onFullscreenChange(false)} cursor="pointer"><FaTv /></Box></Tooltip>
    )
}

export default Fullscreen;