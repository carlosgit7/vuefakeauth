import {ref} from "vue";

const isAuthenticated = ref(false);

const user = ref("");

const usersFromDB = [
    { username: "admin", password: "admin", name: "Administrator"},
    { username: "carlos1", password: "carlos1", name: "Carlos G"},
];
const userAuth = () => {
    const login = (username, password) => {
        const userDB = usersFromDB.find(
            (user) => user.username === username && user.password === password
        );

        if(userDB){
            isAuthenticated.value = true;
            user.value = userDB.name;
        }
    };
    const logout = () => {
        isAuthenticated.value = false;
        user.value = "";
      };

    return { isAuthenticated, login, logout, user };
}; 

export default userAuth;