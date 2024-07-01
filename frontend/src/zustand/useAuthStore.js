import create from 'zustand';


const useAuthStore = create((set) => ({
    authUser: JSON.parse(localStorage.getItem("invoice-app-user")) || null,
    setAuthUser: (user) => {
        localStorage.setItem("invoice-app-user", JSON.stringify(user));
        set({ authUser: user });
    },
}));

export default useAuthStore;