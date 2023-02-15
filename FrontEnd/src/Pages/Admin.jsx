import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
  } from '@chakra-ui/react';
import { postProduct } from '../redux/products/product.action';
import Adnavbar from '../Components/Adnavabar';



export const Admin = () => {
    const [data,setData]=useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
const handleChange=(e)=>{
const {name,value}=e.target
setData({...data,[name]:value})
}

    const handleSubmit=(e)=>{
        e.preventDefault()
console.log(data)
      dispatch(postProduct(data))
        }
    


  return (
    <Box>
               <Adnavbar/>
        <Flex
      
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('teal.50', 'teal.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Add New Product</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Image</FormLabel>
              <Input type="text" name='image' color='teal'
    placeholder='Enter image url'
    _placeholder={{ color: 'inherit' }} onChange={handleChange}/>
            </FormControl>
            <FormControl id="age">
              <FormLabel>Title</FormLabel>
              <Input 
              color='teal'
              placeholder='Enter Product Title'
              _placeholder={{ color: 'inherit' }}
              type="text" name='title' onChange={handleChange}/>
            </FormControl>
           
            <FormControl id="place">
              <FormLabel>Price</FormLabel>
              <Input 
              color='teal'
              placeholder='Enter Price'

              _placeholder={{ color: 'inherit' }}

              type="number" name='price' onChange={handleChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>

              </Stack>
              <Button
               onClick={handleSubmit}
                bg={'green'}
                color={'white'}
                _hover={{
                  bg: 'green',
                 
                }}>
                Add Product
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  )


            }