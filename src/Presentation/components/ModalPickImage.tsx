import React, { Dispatch, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { RoundedButton } from './RoundedButton';

interface Props {
  openGallery: () => void;
  openCamera: () => void;
  handleModal: Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

export const ModalPickImage = ({
  openCamera,
  openGallery,
  handleModal,
  openModal,
}: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          handleModal(!openModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select an option</Text>
            <View style={styles.buttonContainer}>
              <RoundedButton
                onPress={() => {
                  openGallery();
                  handleModal(false);
                }}
                buttonLabel='Gallery'
              />
            </View>
            <View style={styles.buttonContainer}>
              <RoundedButton
                onPress={() => {
                  openCamera();
                  handleModal(false);
                }}
                buttonLabel='Camera'
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 250,
    height: 250,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
