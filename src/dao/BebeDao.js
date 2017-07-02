import { AsyncStorage } from 'react-native';
import { fromJS } from 'immutable';

const STATE_STORAGE_KEY = 'carteiraVacinacao:BebeDao';

/* global __DEV__ */
export default class BebeDao {
    async find() {
        const state = await this.reads();
        if (state) {
            return fromJS(state);
        }

        return null;
    }

    async save(state) {
        await this.persist(state);
    }

    async delete() {
        await this.clear();
    }

    /**
     * Saves provided state object to async storage
     *
     * @returns {Promise}
     */
    async persist(state) {
        try {
            await AsyncStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error('Error persisting application state', e);
        }
    }

    /**
     * Reads state object from async storage
     *
     * @returns {Promise}
     */
    async reads() {
        try {
            const state = await AsyncStorage.getItem(STATE_STORAGE_KEY);
            return state
                ? JSON.parse(state)
                : null;
        } catch (e) {
            console.error('Error reading persisted application state', e);
            return null;
        }
    }

    async clear() {
        try {
            await AsyncStorage.removeItem(STATE_STORAGE_KEY);
        } catch (e) {
            console.error('Error clearing peristed application state', e);
        }
    }
}
