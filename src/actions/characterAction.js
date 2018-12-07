import { GET_HEROES, GET_VILAINS } from './types';

export const getHeroes = () => dispatch => {
    dispatch({
        type:GET_HEROES
    })
}

export const getVilains = () => dispatch => {
    dispatch({
        type:GET_VILAINS
    })
}