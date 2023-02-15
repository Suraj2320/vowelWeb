import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,  
    useColorModeValue,
  } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/auth/auth.action'
export const SignIn = () => {
    const [loginData,setLoginData]=useState({})
    const navigate=useNavigate()
const {isAuth}=useSelector(store=>store.auth)
    const dispatch = useDispatch() 

    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({...loginData,[name]:value})
        }
    const handleSubmit=(e)=>{
        e.preventDefault()
console.log(loginData)
      dispatch(login(loginData))
    
    }


    if(isAuth){
        navigate("/dashboard")
    }


  return (


    <Box>           
        <Flex
      
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
        
            <FormControl id="email">

              <FormLabel>Email address</FormLabel>

              <Input type="email" name='email'  placeholder='Enter email'  onChange={handleChange}/>
            </FormControl>

            <FormControl id="password">

              <FormLabel>Password</FormLabel>

              <Input type="password" name='password' placeholder='Enter Password'  onChange={handleChange} />
            </FormControl>

            <Stack spacing={11}>
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
                Login
              </Button>
            </Stack>
            <Box d="flex" ><span>Don't have account Please  ?Create Here </span><Link to="/signup">Signup</Link></Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  )
}