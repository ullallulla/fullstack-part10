import { TextInput, View, Pressable, StyleSheet} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import theme from "../theme";
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

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

const validationSchema = yup.object().shape({
    username: yup.string()
        .required('username required'),
    password: yup.string()
        .required('password required')
})

const initialValues = {
    username: '',
    password: ''
}

const SignInForm = ( { onSubmit } ) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <View style={styles.container}>
            <TextInput
            style={[styles.input, formik.errors.username && formik.touched.username ? {borderColor: '#d73a4a'} : null]} 
            placeholder='Username'
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={{ color: '#d73a4a', marginBottom: 10 }}>{formik.errors.username}</Text>
            )}
            <TextInput 
            style={[styles.input, formik.errors.password && formik.touched.password ? {borderColor: '#d73a4a'} : null]} 
            placeholder='Password'
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            secureTextEntry
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={{ color: '#d73a4a', marginBottom: 10 }}>{formik.errors.password}</Text>
            )}
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    )
}
const SignIn = () => {
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
            console.log(data)
        } catch (e) {
        console.log(e);
        }
    };

    return (
        <SignInForm onSubmit={onSubmit}/>
    )
};

export default SignIn;