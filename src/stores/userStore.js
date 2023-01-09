import { defineStore } from "pinia";

const API_URL = "http://localhost:8083/api"

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        user: {
            name: '',
            username: '',
            profileImg: '',
            email: '',
            password: '',
            birthDate: '',
            bio: '',
        }
    }),
    actions: {
        async getAllUsers() {
            const response = await fetch(`${API_URL}/user/all`)
            const data = await response.json()
            this.users = data
        },
        async getUserById(user_id) {
            const response = await fetch(`${API_URL}/user/${user_id}`)
            const data = await response.json()
            this.user = data
        },
        async updateUserInfo(user_id) {
            try {
                const requestOptions = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        name: this.user.name,
                        username: this.user.username,
                        profileImg: this.user.profileImg,
                        email: this.user.email,
                        password: this.user.password,
                        birthDate: this.user.birthDate,
                        bio: this.user.bio
                    })
                }
                const response = await fetch(`${API_URL}/user/${user_id}`, requestOptions)
                this.getAllUsers()
                return await response.json()
            } catch (err) {
                console.log(err)
            }
        },
        async createUser(user) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                       ...user,
                       profileImg: "https://pbs.twimg.com/profile_images/1012362101510160384/EjayQ10E_400x400.jpg"
                    })
                }
                const response = await fetch(`${API_URL}/user`, requestOptions)
                this.getAllUsers()
                return await response.json()
            } catch (err) {
                console.log(err)
            }
        },
        modifyStatus(status) {
            this.userOnline = status
        }
    }
})