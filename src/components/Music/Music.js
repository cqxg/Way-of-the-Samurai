import React from 'react';
import { useTranslation } from 'react-i18next';

const Music = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('MUSIC')}
        </div>
    )
};

export default Music;
