import Link from 'next/link';
import { auth } from './config';

const loginComEmailESenha = async (email, password) => {
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // console.error(`Ocorreu um erro: ${errorCode, errorMessage}`);
    throw error;
  }
}

const logout = () => {
  auth.signOut().then(() => {
  }).catch((error) => {
    // console.log(`Error: ${error}`);
  });
}

export {
  auth,
  loginComEmailESenha,
  logout
}


// const registrarComEmailESenha = async (email, password) => {
//   auth.createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in 
//       var user = userCredential.user;
//       console.log(`Usuário cadastrado: ${user}`);
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(`Ocorreu um erro: ${errorCode, errorMessage}`);
//       // ..
//     });
// }