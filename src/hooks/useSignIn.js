import { AUTHENTICATE } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const response = await mutate({variables: {credentials: {username, password}}})

        return response
    };

    return [signIn, result];
};

export default useSignIn;