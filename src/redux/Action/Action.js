import {getProduct} from '../Actiontype/Actiontype'
import axios from 'axios'

export const getdata = ()=> async (dispatch) => {
      try {

        const res = await axios.get( "http://192.168.3.31:3333/api/getallpost" )
        dispatch( {
            type: getProduct,
            payload: res.data
        })
       
      } catch (error) {
        console.error(error);
      }
  };
  