import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Button, Flex } from "@chakra-ui/react"
export default function Adnavbar() {
    return (
        <div>
            <Flex fontSize="20px" margin="auto" justifyContent="center" marginTop="20px" >


            <Button fontSize="20px" marginRight="20px" bg={'green'}
                color={'white'}
                _hover={{
                  bg: 'green',
                 
                }}
                 > <NavLink to="/admin">Add Product</NavLink></Button>
                <Button fontSize="20px" marginRight="20px" bg={'green'}
                color={'white'}
                _hover={{
                  bg: 'green',
                 
                }}
                   ><NavLink to="/admin/add">Product managment</NavLink></Button>
                <Button fontSize="20px" marginRight="20px" bg={'green'}
                color={'white'}
                _hover={{
                  bg: 'green',
                 
                }}
                  > <NavLink to="/admin/order">Order managment</NavLink></Button>

                
            </Flex>
        </div>
    )
}
