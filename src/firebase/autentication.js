import { auth } from './config';

import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// const db = getFirestore(firebase);

const loginComEmailESenha = async (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('Usuário logado!!');
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`Ocorreu um erro: ${errorCode, errorMessage}`);
    });
}

const registrarComEmailESenha = async (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(`Usuário cadastrado: ${user}`);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`Ocorreu um erro: ${errorCode, errorMessage}`);
      // ..
    });
}

const logout = () => { // Adicionamos um parâmetro para a função de redirecionamento
  const user = auth.currentUser;
  console.log(user);
  auth.signOut().then(() => {
    // Sign-out successful.
    const user = auth.currentUser;
    console.log('Sign-out successful.');
    console.log(user);

  }).catch((error) => {
    // An error happened.
    console.log(`Error: ${error}`);
  });
}



export {
  auth,
  loginComEmailESenha,
  registrarComEmailESenha,
  logout
}