import { defineStore } from "pinia";

export default defineStore('userStore', {
    state: () => ({
        name: 'Rory',
        email: 'princess@msn.es',
        password: '12345',
        userOnline: true
    }),
    actions: {
        modifyStatus(status) {
            this.userOnline = status
        }
    }
})