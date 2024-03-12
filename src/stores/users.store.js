import { defineStore } from 'pinia';

import { fetchWrapper } from '../helpers/fetch-wrapper.js';

const baseUrl = `${import.meta.env.VITE_API_URL}/a_users`;

export const useUsersStore = defineStore({
    id: 'a_users',
    state: () => ({
        users: {}
    }),
    actions: {
        async getAll() {
            this.users = { loading: true };
            fetchWrapper.get(baseUrl)
                .then(users => this.users = users)
                .catch(error => this.users = { error })
        }
    }
});
