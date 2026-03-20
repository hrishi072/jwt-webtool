import { create } from 'zustand';

export const useGlobalStore = create((set) => ({
  jwtState: {
    variant: 'signed',
    encodedJwt: '',
    decodedHeader: '',
    decodedPayload: '',
    publicKey: '',
    privateKey: '',
    symmetricKey: '',
    directKey: '',
    symmetricKeyCoding: 'UTF-8',
    directKeyCoding: 'UTF-8',
    pbkdf2Salt: 'abcdefghijkl',
    pbkdf2SaltCoding: 'UTF-8',
    pbkdf2Iterations: 10000,
    algSigned: 'RS256',
    algEncrypted: 'RSA-OAEP-256',
    enc: 'A256GCM',
    expiry: 10,
    checkIat: true,
    checkTyp: true,
    darkMode: true
  },
  setJwtState: (updates) => set((state) => ({
    jwtState: { ...state.jwtState, ...updates }
  })),
  toastMessage: null,
  setToastMessage: (message) => set({ toastMessage: message }),
}));
