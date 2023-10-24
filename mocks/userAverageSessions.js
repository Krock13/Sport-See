/**
 * Mock data for user average session information.
 */

// Mock data for user average sessions with ID 1
const user1 = {
  userId: 1,
  sessions: [
    {
      day: 1,
      sessionLength: 35,
    },
    {
      day: 2,
      sessionLength: 28,
    },
    {
      day: 3,
      sessionLength: 32,
    },
    {
      day: 4,
      sessionLength: 40,
    },
    {
      day: 5,
      sessionLength: 24,
    },
    {
      day: 6,
      sessionLength: 18,
    },
    {
      day: 7,
      sessionLength: 31,
    },
  ],
};

// Mock data for user average sessions with ID 2
const user2 = {
  userId: 2,
  sessions: [
    {
      day: 1,
      sessionLength: 32,
    },
    {
      day: 2,
      sessionLength: 42,
    },
    {
      day: 3,
      sessionLength: 52,
    },
    {
      day: 4,
      sessionLength: 35,
    },
    {
      day: 5,
      sessionLength: 38,
    },
    {
      day: 6,
      sessionLength: 55,
    },
    {
      day: 7,
      sessionLength: 58,
    },
  ],
};

/**
 * Simulates fetching user average session data based on user ID.
 * @param {number} userId - The ID of the user.
 * @returns {Promise} - Resolves with the user average session data or rejects with an error.
 */
export const getUserAverageSessions = (userId) => {
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
