import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: 'modals',
    initialState: {
        isProfileOpen: false,
        isPasswordOpen: false,
        isInterestOpen: false,
    },
    reducers: {
        toggleProfileModal: (state) => {
            state.isProfileOpen = !state.isProfileOpen;
        },
        togglePasswordModal: (state) => {
            state.isPasswordOpen = !state.isPasswordOpen;
        },
        toggleInterestModal: (state) => {
            state.isInterestOpen = !state.isInterestOpen;
        },
    },
});

export const { toggleProfileModal, togglePasswordModal, toggleInterestModal } = modalSlice.actions;
export default modalSlice.reducer;