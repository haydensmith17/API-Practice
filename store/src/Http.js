import React from "react";
import axios from "axios";


const baseUrl = "https://localhost:7107/User";

export const AuthContext = React.createContext({});

export function Http(props) {
  const [user, setUser] = React.useState(null);
  

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,

                login: async (email, password) => {

                    const { data } = await axios.post(`${baseUrl}/login`, { email, password })
                    localStorage.setItem("AuthToken", data.token);
                    const config = { headers: { Authorization: `Bearer ${data.token}` } }
                    const response = await axios.get(`${baseUrl}`, config)
                    setUser(response.data)
                },
                signup: async (email, password, firstname, lastname, city, address) => {

                    await axios.post(`${baseUrl}/update`, { email, password, firstname, lastname, city, address })
                    const response = await axios.get(`${baseUrl}/all?email=${email}&password=${password}`)
                    setUser(response.data)
                    console.log(response.data)
                    if (setUser != null) {

                      // Save user data in localStorage as a JSON string
                      localStorage.setItem('user', JSON.stringify(user));
                      
                      // Navigate to the home page after successful login
                  }
                  else {
                      alert('Incorrect username or password');
                  }
                },
                save: async (firstname, lastname, email, favoriteDiscGolfer) => {

                    const token = localStorage.getItem("AuthToken");

                    if (!token) return
                    const config = { headers: { Authorization: `Bearer ${token}` } }
                    await axios.put(`${baseUrl}`, { firstname, lastname, email, favoriteDiscGolfer }, config)


                },
                getUser: async () => {
                    const token = localStorage.getItem("AuthToken");

                    if (!token) return
                    const config = { headers: { Authorization: `Bearer ${token}` } }
                    const response = await axios.get(`${baseUrl}`, config)
                    setUser(response.data)
                },
                logout: async () => {
                    localStorage.removeItem("AuthToken")
                    setUser(null)
                },

                addProductToCart: async (productId) => {
                
                    const token = localStorage.getItem("AuthToken");
                    const config = { headers: { Authorization: `Bearer ${token}` } }
                    await axios.post(`${baseUrl}/cart`, { productId }, config)
                   
                },
                deleteProduct: async (cartId) => {
                 
                    const token = localStorage.getItem("AuthToken");
                    const config = { headers: { Authorization: `Bearer ${token}` } }
                    const response = await axios.delete(`${baseUrl}/cart/delete?cartid=${cartId}`, config)
                    setUser(response.data)
                   
                },
             

            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};