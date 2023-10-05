/**
 * Mock data for user performance information.
 */

// Mock data for user performance with ID 1
const user1 = {
  userId: 1,
  kind: {
    1: 'cardio',
    2: 'energy',
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity',
  },
  data: [
    {
      value: 85,
      kind: 1,
    },
    {
      value: 125,
      kind: 2,
    },
    {
      value: 145,
      kind: 3,
    },
    {
      value: 55,
      kind: 4,
    },
    {
      value: 205,
      kind: 5,
    },
    {
      value: 95,
      kind: 6,
    },
  ],
};

// Mock data for user performance with ID 2
const user2 = {
  userId: 2,
  kind: {
    1: 'cardio',
    2: 'energy',
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity',
  },
  data: [
    {
      value: 205,
      kind: 1,
    },
    {
      value: 245,
      kind: 2,
    },
    {
      value: 85,
      kind: 3,
    },
    {
      value: 85,
      kind: 4,
    },
    {
      value: 225,
      kind: 5,
    },
    {
      value: 115,
      kind: 6,
    },
  ],
};

/**
 * Simulates fetching user performance data based on user ID.
 * @param {number} userId - The ID of the user.
 * @returns {Promise} - Resolves with the user performance data or rejects with an error.
 */
export const getUserPerformance = (userId) => {
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
