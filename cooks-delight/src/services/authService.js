// Storage key for user data
const STORAGE_KEY = 'users';

export const authService = {
  // Register a new user with Email uniqueness check
  register: (userData) => {
    // Get existing users from storage
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    
    //  Check if the email already exists in our "database"
    const isEmailTaken = users.some(user => user.email === userData.email);

    if (isEmailTaken) {
      throw new Error("This email is already registered. Please use another one or login.");
    }

    //  If email is unique, add the new user
    users.push({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password
    });
    
    //  Save updated list back to storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    return true;
  },

  // Login verification using Email
  // login verification
login: async (email, password) => {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  
  const userByEmail = users.find(u => u.email === email);

  if (!userByEmail) {
    throw new Error("This account doesn't exist. Please register first.");
  }

  if (userByEmail.password !== password) {
    throw new Error("Incorrect password. Please try again.");
  }

  const token = "session-" + Math.random();
  localStorage.setItem('userToken', token);
  localStorage.setItem('userData', JSON.stringify(userByEmail));
  return userByEmail;
},
  logout: () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
  }
};

export default authService;