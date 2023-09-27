const user1 = {
  userId: 1,
  sessions: [
    {
      day: '2023-02-01',
      kilogram: 85,
      calories: 260,
    },
    {
      day: '2023-02-02',
      kilogram: 84,
      calories: 250,
    },
    {
      day: '2023-02-03',
      kilogram: 86,
      calories: 310,
    },
    {
      day: '2023-02-04',
      kilogram: 86,
      calories: 320,
    },
    {
      day: '2023-02-05',
      kilogram: 85,
      calories: 180,
    },
    {
      day: '2023-02-06',
      kilogram: 83,
      calories: 182,
    },
    {
      day: '2023-02-07',
      kilogram: 81,
      calories: 420,
    },
  ],
};

const user2 = {
  userId: 2,
  sessions: [
    {
      day: '2023-02-01',
      kilogram: 75,
      calories: 260,
    },
    {
      day: '2023-02-02',
      kilogram: 74,
      calories: 240,
    },
    {
      day: '2023-02-03',
      kilogram: 75,
      calories: 300,
    },
    {
      day: '2023-02-04',
      kilogram: 75,
      calories: 520,
    },
    {
      day: '2023-02-05',
      kilogram: 74,
      calories: 180,
    },
    {
      day: '2023-02-06',
      kilogram: 74,
      calories: 182,
    },
    {
      day: '2023-02-07',
      kilogram: 74,
      calories: 410,
    },
  ],
};

export const getUserActivity = (userId) => {
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
