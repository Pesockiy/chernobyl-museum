import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleOpen(state) {
            state.menu.isOpen = !state.menu.isOpen;
        }
    }
});

export default menuSlice.reducer
export const { toggleOpen } = menuSlice.actions
