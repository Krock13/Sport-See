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
    }, 300); // Simule un délai pour rendre l'expérience plus réaliste
  });
};
