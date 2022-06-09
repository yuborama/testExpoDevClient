Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@yuborama 
ndpniraj
/
react-native-auth-app-front-end
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
react-native-auth-app-front-end/app/components/FormInput.js /
@ndpniraj
ndpniraj added navigation and all the user auth part is done
Latest commit c99ffcd on 22 Jun 2021
 History
 1 contributor
37 lines (34 sloc)  842 Bytes
   
import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = props => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        {error ? (
          <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
