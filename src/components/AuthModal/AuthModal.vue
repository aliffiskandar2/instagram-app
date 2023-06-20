<script setup>

import {ref, defineProps, reactive} from "vue";
import { storeToRefs } from 'pinia'
import {useUserStore} from "@/stores/user"

const userStore = useUserStore()
const {errorMessage} = storetoRefs(userStore);

const props = defineProps(['isLogin'])
const visible = ref(false);

const userCredentials = reactive ({
  email: "",
  password: "",
  usernam: ""

})
  
const showModal = ()=> {
  visible.value = true;
};

const handleOk = (e) => {
  console.log("okkk")
  userStore.handleSignup(userCredentials) 
};

const title = props.isLogin ? 'Login' : 'Signup'

</script>

<template>
    <div>
      <a-button class="btn" type="primary" @click="showModal">{{title}}</a-button>
      <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
        <div v-if="!loading" class="input-container">
          <a-input v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" class="input" />
          <a-input v-model:value="userCredentials.email" placeholder="Email" class="input" />
          <a-input v-model:value="userCredentials.password" placeholder="Password" type="password" class="input" />
          <a-typography-text> v-if = "errorMessage" type="danger"</a-typography-text>
        </div>
      </a-modal>
    </div>
  </template>


<style scoped>
.btn{
  margin-left: 10px;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px
}

.input-container {
  height: 120px
}

.input {
  margin-top: 4px;
}
</style>


