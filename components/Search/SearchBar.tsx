import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const SearchBar = (props: any) => {
  const [searchText, setSearchText] = useState<string>('');
  const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);

  const searchFunction = () => {
    console.log('searching');
  };

  return (
    <View style={styles.background}>
      <View style={inputOnFocus ? styles.inputBarOnFocus : styles.inputBar}>
        <Feather name='search' style={styles.iconStyle} />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder='Search'
          value={searchText}
          onChangeText={(text: string) => setSearchText(text)}
          onEndEditing={() => {
            setInputOnFocus(false);
            searchFunction();
          }}
          onFocus={() => setInputOnFocus(true)}
        />
        {searchText.length > 0 && (
          <Entypo
            name='circle-with-cross'
            style={styles.crossIconStyle}
            onPress={() => setSearchText('')}
          />
        )}
      </View>
      {inputOnFocus && (
        <Button title='Cancel' color='white' onPress={Keyboard.dismiss} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
  },
  inputBar: {
    backgroundColor: '#13161d',
    height: 40,
    borderRadius: 8,
    marginHorizontal: 15,
    flexDirection: 'row',
    width: '90%',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 15,
  },
  inputBarOnFocus: {
    backgroundColor: '#13161d',
    height: 40,
    borderRadius: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    width: '71%',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    paddingLeft: 10,
    color: 'white',
  },
  iconStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginHorizontal: 5,
    color: 'white',
  },
  crossIconStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginHorizontal: 5,
    color: 'white',
  },
});

export default SearchBar;
