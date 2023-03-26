import { ILogin } from '@core/store/auth/auth.types';
import { API } from '@core/config/api';
import { logErrors } from '@core/utils/logErrors';

export const Auth = {
    async register(data: ILogin) {
        try {
            const res = await fetch(`${API.auth}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                logErrors(await res.json());
                return false;
            }
            return res.json();
        } catch (err) {
            logErrors(err);
            return false;
        }
    },
    async login(data: ILogin) {
        try {
            const res = await fetch(`${API.login}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                logErrors(await res.json());
                return false;
            }
            return res.json();
        } catch (err) {
            logErrors(err);
            return false;
        }
    },
    async me() {
        try {
            const res = await fetch(`${API.me}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET',
                credentials: 'include'
            });
            if (!res.ok) {
                logErrors(await res.json());
                return false;
            }
            return res.json();
        } catch (err) {
            logErrors(err);
            return false;
        }
    },
    async logout() {
        try {
            const res = await fetch(`${API.logout}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET',
                credentials: 'include'
            });
            if (!res.ok) {
                logErrors(await res.json());
                return false;
            }
            return res.json();
        } catch (err) {
            logErrors(err);
            return false;
        }
    }
};
