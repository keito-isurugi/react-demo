import React from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import { ModalPage } from './Modal'
import { Hoge } from './Hoge'

export const Rendering = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <h1>モーダルのレンダリング</h1>
      <Button onClick={onOpen}>Open Modal</Button>
      {/* <ModalPage isOpen={isOpen} onClose={onClose}/>
       */}
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>aaa</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      <Hoge/>
    </>
  )
}
