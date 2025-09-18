import React from 'react';
import { useTranslation } from 'react-i18next';

import omerYilmazImage from '../assets/images/pp.png';


const memberImages = {
    omerYilmaz: omerYilmazImage,
    ayseKaya: omerYilmazImage
};


const TeamPage = () => {
    const { t } = useTranslation();
    const teamMembers = t('team_page.members', { returnObjects: true }) || [];

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="section-title">{t('team_page.title')}</h1>
                <p className="section-subtitle">
                    {t('team_page.subtitle')}
                </p>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            {/* DEĞİŞİKLİK 3: 'src' özniteliğini dinamik olarak ayarlayın */}
                            <img
                                src={memberImages[member.imageKey]}
                                alt={member.name}
                                className="team-member-image"
                            />
                            <h3>{member.name}</h3>
                            <p className="team-member-title">{member.title}</p>
                            <p>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamPage;