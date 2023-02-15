import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from '../redux/auth/auth.action';



export const Register = () => {
    const [loginData,setLoginData]=useState({})
    const navigate=useNavigate()
const {message}=useSelector(store=>store.auth)
    const dispatch = useDispatch()
 

  

    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({...loginData,[name]:value})
        }

    const handleSubmit=(e)=>{
        e.preventDefault()
console.log(loginData)
      dispatch(Signup(loginData))
   
    };
    if(message=="user created"){
        navigate("/")
    }


  return (
    <Box>
           
        <Flex
      
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Signup</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" name='username' placeholder='Enter Name'   onChange={handleChange}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email'  placeholder='Enter Email' onChange={handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password'  placeholder='Enter Password'  onChange={handleChange} />
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
                Signup
              </Button>
            </Stack>
            <Box d="flex" ><span>Already have account ?  Please Log In here</span><Link to="/">Login</Link></Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  )
}