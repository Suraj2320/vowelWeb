import React from 'react'
import { NavLink } from 'react-router-dom'
import {  Button, Flex } from "@chakra-ui/react"



export default function Navbar() {
    return (
        <div>
            <Flex fontSize="20px" margin="auto" justifyContent="center" marginTop="20px" >

                <Button fontSize="20px" marginRight="20px" bg={'green'}
                color={'white'}
                _hover={{
                  bg: 'green',
                 
                }}><NavLink to="/admin">Admin</NavLink></Button>
                <Button fontSize="20px" marginRight="20px"bg={'green'}
                color={'white'}
                _hover={{
                  bg: 'green',
                 
                }} > <NavLink to="/user">User </NavLink></Button>
            </Flex>
        </div>
    )
}
