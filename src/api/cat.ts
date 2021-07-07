import axios from 'axios'

export const getCat = () => axios("https://api.thecatapi.com/v1/images/search")