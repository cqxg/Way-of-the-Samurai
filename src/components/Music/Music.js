import React from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_KEYS } from '../../utils/constants';

const Music = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t(I18N_KEYS.MUSIC)}
    </div>
  );
};

export default Music;
