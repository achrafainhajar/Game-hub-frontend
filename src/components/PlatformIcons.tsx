import React from 'react'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react';
import { FaWindows, FaXbox, FaLinux, FaApple, FaAndroid, FaPlaystation } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons';
interface Props {
    platforms: Platform[];
};

const PlatformIcons = ({ platforms }: Props) => {

    const iconmap : { [ key:string] : IconType} =
    {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        web : BsGlobe,
    }
    return (
        <>
        <HStack>
            {platforms.map((platform) => (<Icon key={platform.id} as={iconmap[platform.slug]} color='gray.500'/>))}
        </HStack>
        </>
    )
}

export default PlatformIcons