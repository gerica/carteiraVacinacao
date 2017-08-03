import { AsyncStorage } from 'react-native';

const STATE_STORAGE_KEY = 'carteiraVacinacao:UtilsDao';

/* global __DEV__ */
export default class UtilsDao {
    async find(key) {
        const state = await this.reads(key);
        if (state) {
            return state;
        }

        return null;
    }

    async save(key, state) {
        await this.persist(key, state);
    }

    async delete(key) {
        await this.clear(key);
    }

    /**
     * Saves provided state object to async storage
     *
     * @returns {Promise}
     */
    async persist(key, state) {
        try {
            // console.log(JSON.stringify(state));
            await AsyncStorage.setItem(`${STATE_STORAGE_KEY}:${key}`, JSON.stringify(state));
        } catch (e) {
            console.error('Error persisting application state', e);
        }
    }

    /**
     * Reads state object from async storage
     *
     * @returns {Promise}
     */
    async reads(key) {
        try {
            const state = await AsyncStorage.getItem(`${STATE_STORAGE_KEY}:${key}`);
            // console.log(state);
            // console.log(JSON.parse(state));
            return state
                ? JSON.parse(state)
                : null;
        } catch (e) {
            console.error('Error reading persisted application state', e);
            return null;
        }
    }

    async clear(key) {
        try {
            await AsyncStorage.removeItem(`${STATE_STORAGE_KEY}:${key}`);
        } catch (e) {
            console.error('Error clearing peristed application state', e);
        }
    }
}
