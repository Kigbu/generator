// import userService from "../services/user.service"

export const getJwtSecretKey = () => {

}

export const getAuthTokenKey = () => {
  const tokenKey = process.env.REACT_APP_AUTH_TOKEN_KEY

  if (!tokenKey || tokenKey.length === 0) throw new Error('The environment variable REACT_APP_AUTH_TOKEN_KEY is not set')
  return tokenKey
}

// export const verifyUser = async (token: string | null) => {
//   try {
//     if (token) {
//       const userProfile = await userService.getCurrentUserProfile();
//       if (userProfile) return userProfile
//     }
//   } catch (err) {
//     throw new Error('Your session has expired')
//   }
// }