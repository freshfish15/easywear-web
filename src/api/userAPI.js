import axiosInstance from '../axiosConfig';

export const deleteAccount = async () => {
    try {
        const response = await axiosInstance.delete('/user/deleteAccount');
        return response.data;
    } catch (error) {
        console.error('Error deleting account:', error);
        throw error;
    }
};

export const logInAccount = async(credentials) =>{
    try{
        const response = await axiosInstance.post('/token',
            new URLSearchParams({
                'grant_type': 'password',
                'username': credentials.email,
                'password': credentials.password,
                'scope': '',
                'client_id': 'string',
                'client_secret': 'string'
            })
        );
        return response;
    }catch(error){
        console.log('Login error:', error.response ? error.response.data : error.message);

    }

}