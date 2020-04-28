import React from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_KEYS } from '../../utils/constants';

const News = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t(I18N_KEYS.NEWS)}
    </div>
  );
};

export default News;
