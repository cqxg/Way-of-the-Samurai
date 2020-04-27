import React from 'react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('NEWS')}
    </div>
  );
};

export default News;
