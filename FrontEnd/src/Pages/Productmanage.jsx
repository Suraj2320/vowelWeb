// import { Button ,ButtonGroup} from '@chakra-ui/react'
import { Button ,Card, CardBody, Heading, SimpleGrid, Stack ,Box,Image,Text, Divider, CardFooter, ButtonGroup} from '@chakra-ui/react'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Adnavbar from '../Components/Adnavabar'
import { deleteProduct, getProduct } from '../redux/products/product.action'

export default function Productmanage() {
    const {data} =useSelector(store=> store.product)
    


const dispatch=useDispatch()
    useEffect(()=>{
dispatch(getProduct())
    },[])

    const handleEdit=(el)=>{
        
    }

    const handleDelete=(el)=>{
     dispatch(deleteProduct(el._id))
    }

  return (
    <>
    
    <Adnavbar/>
    <Button style={{marginTop:"25px"}}>Manage Product</Button>
    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
    {
        data?.map((el)=>{
            return <Card maxW='xs'>
            <CardBody>
              <Image
              src={el.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{el.title}</Heading>
               
                <Text color='blue.600' fontSize='2xl'>
                  ${el.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>            
                <Button style={{margin:"auto",width:"80%"}}  variant='solid' colorScheme='blue' onClick={()=>handleEdit(el)}>
                  Edit
                </Button>
                <Button  style={{margin:"auto",width:"80%"}} variant='ghost' colorScheme='red' onClick={()=>handleDelete(el)}>
                Delete
                </Button>                  
                            
            </CardFooter>
          </Card> 
        })
    }
</SimpleGrid>
    </>
  )
}
