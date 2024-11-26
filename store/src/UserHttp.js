import React from "react";
import axios from "axios";


const baseUrl = "https://localhost:7107/User";
const boardUrl = "https://localhost:7107/Board";
const cartUrl = "https://localhost:7107/Cart";
const cardUrl = "https://localhost:7107/card";
const addressUrl = "https://localhost:7107/address";
const accessoryUrl = "https://localhost:7107/Accessory";

export const AuthContext = React.createContext({});

export function UserHttp(props) {
    const [user, setUser] = React.useState(null);

    async function GetUser(email, password) {
        debugger
        const response = await axios.get(`${baseUrl}/all?email=${email}&password=${password}`)
        setUser(response.data)
        console.log(response.data)
        if (setUser != null) {

            // Save user data in localStorage as a JSON string
            localStorage.setItem('user', JSON.stringify(response.data));

            // Navigate to the home page after successful login
        }
        else {
            alert('Incorrect username or password');
        }
    }


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,

                login: async (email, password) => {
                    try {
                      await GetUser(email, password);
                    } catch (error) {
                      if (error.response && error.response.status === 401) {
                        throw new Error("Invalid email or password"); // Throw an error to be caught in the Login component
                      } else {
                        console.error("An unexpected error occurred:", error);
                        throw error; // Re-throw any other errors
                      }
                    }
                  },
                getUser: async (email, password) => {
                    GetUser(email, password)
                },
                signup: async (email, password, firstname, lastname, city, address) => {
                    await axios.post(`${baseUrl}/update`, { email, password, firstname, lastname, city, address })
                    GetUser(email, password)
                },
                edit: async (userId, email, password, firstname, lastname, city, address) => {
                    await axios.put(`${baseUrl}/save/${userId}`, { email, password, firstname, lastname, city, address })
                    GetUser(email, password)
                },
                addBoard: async (name, price, size, description, image, manufacturer) => {
                await axios.post(`${boardUrl}/add`, {name, price, size, description, image, manufacturer})
                },
                deleteBoard: async (boardId) => {
                    await axios.delete(`${boardUrl}/deleteProduct?id=${boardId}` )
                },
                addToCart: async (PersonID, ID, email, password) => {
                    await axios.post(`${cartUrl}/Cart`, {PersonID, ID})
                    GetUser(email, password)
                },
                getThisCart: async (PersonID, email, password) => {
                    await axios.get(`${cartUrl}/showCart`, {PersonID})
                    GetUser(email, password)
                },
                deleteCartBoard: async (crap, email, password) => {
                    await axios.delete(`${cartUrl}/delete?cartID=${crap}`)
                    GetUser(email, password)
                },
                addCard: async (PersonID, CardNumber, ExpDate, CVV, email, password) => {
                    await axios.post(`${cardUrl}/card`, {PersonID, CardNumber, ExpDate, CVV})
                    GetUser(email, password)
                },
                addAddress: async (PersonID, StreetAddress, City, StateOrigin, ZIP, Country, email, password) => {
                    await axios.post(`${addressUrl}/address`, {PersonID, StreetAddress, City, StateOrigin, ZIP, Country})
                    GetUser(email, password)
                }
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};