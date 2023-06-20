import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase'


export const useUserStore = defineStore('users', () => {

  const user = ref(null);
  const errorMessage = ref("");

  const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
    )
  }

  const handleLogin = () => {

  }

  const handleSignup = (credentials) => {
    const {email, password, username} = credentials

    if (password.length < 6){
      console.log("Password too short")
      return errorMessage.value = "Password length is too short"
    }

    if (username.length < 6){
      return errorMessage.value = "Username length is too short"
    }

    if (!validateEmail(email)){
      return errorMessage.value = "Email is invalid"
    }

  }

  const handleLogout = async () => {

  }

  const getUser = () => {}


  return {user, loading, errorMessage, handleLogin, handleSignup, handleLogout, getUser}
})
