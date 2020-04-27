import React from 'react';
import { useTranslation } from 'react-i18next';

const Music = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('profile')}
        </div>
    )
};

export default Music;
