import {Text, TextInput, View, Pressable} from 'react-native';
import { useFormik } from 'formik';

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
        <View>
            <TextInput 
            placeholder='username'
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
            />
            <TextInput 
            placeholder='password'
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            secureTextEntry
            />
            <Pressable onPress={formik.handleSubmit}>
                <Text>Sign in</Text>
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