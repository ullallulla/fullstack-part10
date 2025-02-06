import { AUTHENTICATE } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({variables: {credentials: {username, password}}})

        await authStorage.setAccessToken(data.authenticate.accessToken)
        await apolloClient.resetStore()
        return data
    };

    return [signIn, result];
};

export default useSignIn;