import { createSlice } from '@reduxjs/toolkit'

import decToRomFunc from './decToRom';
import RomToDecFunc from './RomToDec';

export const convertSlice = createSlice({
  name: 'convert',
  initialState: {
    value: '',
  },
  reducers: {
    romanToDecimal: (state, action) => {
      state.value = RomToDecFunc(action.payload);
    },
    decimalToRoman: (state, action) => {
      state.value = decToRomFunc(action.payload);
    }
  },
})

export const { romanToDecimal, decimalToRoman } = convertSlice.actions

export default convertSlice.reducer