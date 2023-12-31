/**
 * Mock data for user information.
 */

// Mock data for user with ID 1
const user1 = {
  id: 1,
  userInfos: {
    firstName: 'MockfirstName1',
    lastName: 'MocklastName1',
    age: 40,
  },
  todayScore: 0.28,
  keyData: {
    calorieCount: 2500,
    proteinCount: 180,
    carbohydrateCount: 350,
    lipidCount: 70,
  },
};

// Mock data for user with ID 2
const user2 = {
  id: 2,
  userInfos: {
    firstName: 'MockfirstName2',
    lastName: 'MocklastName2',
    age: 45,
  },
  score: 0.5,
  keyData: {
    calorieCount: 2800,
    proteinCount: 120,
    carbohydrateCount: 200,
    lipidCount: 150,
  },
};

/**
 * Simulates fetching user data based on user ID.
 * @param {number} userId - The ID of the user.
 * @returns {Promise} - Resolves with the user data or rejects with an error.
 */
export const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (userId) {
        case 1:
          resolve({ data: user1 });
          break;
        case 2:
          resolve({ data: user2 });
          break;
        default:
          reject(new Error('Utilisateur non trouvé'));
      }
    }, 300); // Simulates a delay to make the experience more realistic
  });
};
