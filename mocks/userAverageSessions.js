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
      sessionLength: 48,
    },
    {
      day: 4,
      sessionLength: 55,
    },
    {
      day: 5,
      sessionLength: 5,
    },
    {
      day: 6,
      sessionLength: 10,
    },
    {
      day: 7,
      sessionLength: 65,
    },
  ],
};

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
    }, 300); // Simule un délai pour rendre l'expérience plus réaliste
  });
};
