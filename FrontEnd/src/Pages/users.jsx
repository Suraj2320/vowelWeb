import axios from "axios";
import { Button,Card, CardBody, Heading, SimpleGrid, Stack ,Box,Image,Text, Divider, CardFooter, ButtonGroup} from '@chakra-ui/react'

import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../redux/cart/cart.action";

export default function User() {
  const [data,setData]=useState([])
  const dispatch=useDispatch()

  useEffect(()=>{
    axios.get(`https://surajinter.onrender.com/product/get`).then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  },[])

  const handleAdd = (el) => {
// console.log(el)
    dispatch(
      addItemToCart({
        ...el,
        productId: el._id,
        count: 1,
      })
    );
  };

    return(
      <>
      
      <Button style={{marginTop:"25px"}}><Link to="/cart">Go To Cart  Page</Link></Button>
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
              
                <Button style={{margin:"auto",width:"80%"}} variant='solid' colorScheme='blue' onClick={()=>handleAdd(el)}>
                  Add to cart
                </Button>
                
             
            </CardFooter>
          </Card> 
        })
    }
</SimpleGrid>      
      </>
    );
  }
  