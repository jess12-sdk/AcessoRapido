import React from 'react';

import './styles.css';

interface ProfileWeekProps {
    dayWeek: string;
    time: string;
}

const ProfileWeek: React.FC<ProfileWeekProps> = (props) => {
    return(
        <article className="profile-week">
            <p>Dia</p>
            <strong>{props.dayWeek}</strong>
            <p>Horário</p>
            <strong>{props.time}</strong>
        </article>
    );
}

export default ProfileWeek;