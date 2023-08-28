import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import './Home.css';

const Home = () => {
    const { isOpen: isOpenCraft, onOpen: onOpenCraft, onOpenChange: onOpenChangeCraft } = useDisclosure();
    const { isOpen: isOpenNewcomers, onOpen: onOpenNewcomers, onOpenChange: onOpenChangeNewcomers } = useDisclosure();
    const { isOpen: isOpenVeterans, onOpen: onOpenVeterans, onOpenChange: onOpenChangeVeterans } = useDisclosure();

    return (
        <div className="bgh">
            <div className="mainContainer">
                <div className="cabeza2 row ">
                    <h1 className='row display-1'>Welcome to the Montreal World of Darkness</h1>
                    <p className='pH display-4'>
                        Experience the dark and mysterious world of Montreal in the World of Darkness universe. 
                        This is your guide to running a thrilling Vampire: The Masquerade campaign in the city.
                    </p>
                </div>
                <div className="botones">
                <Button className='buttonMod col' onPress={onOpenCraft}>Craft Your Campaign</Button>
                <Modal isOpen={isOpenCraft} onOpenChange={onOpenChangeCraft}>
                    <ModalContent className='pMod'>
                        <ModalHeader className='titleMod'>Craft Your Campaign</ModalHeader>
                        <ModalBody>
                            <p className='pH display-7'>
                                Dive into the intricate political landscape of the Kindred society, where power struggles and 
                                ancient rivalries shape the fate of the city. Uncover the hidden secrets and dark conspiracies 
                                that lurk in the shadows.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onPress={onOpenChangeCraft}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Button  className='buttonMod col' onPress={onOpenNewcomers}>Advice for Newcomers</Button>
                <Modal isOpen={isOpenNewcomers} onOpenChange={onOpenChangeNewcomers}>
                    <ModalContent className='pMod'>
                        <ModalHeader className='titleMod'>Advice for Newcomers</ModalHeader>
                        <ModalBody>
                            <p className='pH display-7'>
                                New to the world of darkness? Don't worry. Embrace the role-playing, immerse yourself in the 
                                storytelling, and don't be afraid to embrace the dark themes of the game. Trust your storyteller 
                                and fellow players to guide you through the experience.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onPress={onOpenChangeNewcomers}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Button className='buttonMod col' onPress={onOpenVeterans}>Advice for Veterans</Button>
                <Modal isOpen={isOpenVeterans} onOpenChange={onOpenChangeVeterans}>
                    <ModalContent className='pMod'>
                        <ModalHeader className='titleMod'>Advice for Veterans</ModalHeader>
                        <ModalBody>
                            <p className='pH display-7'>
                                For the seasoned players, embrace the rich lore of the World of Darkness and let it guide your actions. 
                                Collaborate with the storyteller and fellow players to create immersive and memorable stories. 
                                Embrace the challenges and twists that the city of Montreal throws your way.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onPress={onOpenChangeVeterans}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                </div>
                <div className="pie row">
                <h2 className='display-1'>Survive the Night</h2>
                <p className='pH display-4'>
                    As darkness descends upon Montreal, you'll need to use your wit, cunning, and supernatural abilities to survive. 
                    Will you navigate the treacherous politics, forge alliances, and secure your place among the Kindred elite?
                </p>
                <p className='pH display-4'>
                    The Montreal World of Darkness awaits you. Embrace the darkness and let the story unfold.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
