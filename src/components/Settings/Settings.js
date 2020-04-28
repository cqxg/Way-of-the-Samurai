import React from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_KEYS } from '../../utils/constants';

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t(I18N_KEYS.SETTINGS)}
    </div>
  );
};

export default Settings;
