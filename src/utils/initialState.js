import { AVATAR_DEFAULT } from './url-utils';

const initialState = {
  users: [
    {
      id: '1',
      photoUrl: { AVATAR_DEFAULT },
      followed: true,
      fullName: 'Vasiliy',
      status: 'vasiliy propionate',
      location: {
        city: 'Giran Harbor',
        country: 'Elmoraden',
      },
    },
    {
      id: '2',
      photoUrl: { AVATAR_DEFAULT },
      followed: true,
      fullName: 'Gennadiy',
      status: 'vse dl9 pacanov',
      location: {
        city: 'Vorota Diona',
        country: 'Dion',
      },
    },
    {
      id: '3',
      photoUrl: { AVATAR_DEFAULT },
      followed: true,
      fullName: 'Tatiyana',
      status: 'Tanysha podai grabli!!!1',
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
  ],
};

export { initialState };
