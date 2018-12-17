import jwt from 'jsonwebtoken'
export const isAuthenticated = () => {
    return localStorage.getItem('token') ? true : false
}

export const isAdmin = () => {
    return jwt.decode(localStorage.getItem('token')).role === 'Admin' ?  true : false
}