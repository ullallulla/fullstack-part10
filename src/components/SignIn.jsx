import {Text, TextInput, View, Pressable, StyleSheet} from 'react-native';
import { useFormik } from 'formik';
import theme from "../theme"

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 16,
      backgroundColor: 'white'
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 5,
      paddingHorizontal: 8,
      marginBottom: 12,
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: theme.fontSizes.subheading,
    },
  });

const initialValues = {
    username: '',
    password: ''
}

const onSubmit = (values) => {
    console.log(values);
  };

const SignInForm = ( { onSubmit } ) => {
    const formik = useFormik({
        initialValues,
        onSubmit
    })

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input} 
            placeholder='Username'
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
            />
            <TextInput 
            style={styles.input}
            placeholder='Password'
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            secureTextEntry
            />
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    )
}
const SignIn = () => {

    return (
        <SignInForm onSubmit={onSubmit}/>
    )
};

export default SignIn;