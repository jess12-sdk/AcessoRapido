import React from 'react';

import PageHeader from '../../components/PageHeader';
import ProfileWeek from '../../components/ProfileWeek';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface ProfileService {
    id: number;
    avatar: string;
    experience: string;
    cost: number;
    name: string;
    lastname: string;
    category: string;
    email: string;
    whatsapp: string;
    neighborhood: string;
    uf: string;
    city: string;
}

interface ProfileServiceProps {
    profile: ProfileService;
}

const Profile: React.FC<ProfileServiceProps> = ({ profile }) => {

    return(
        <div id="page-profile">
            <PageHeader title="Sua busca foi realizada!!!" />
            <div className="container-profile">
                <article className="profile-item">
                    <header>
                        <img src={profile.avatar} alt={profile.name} />
                        <div>
                            <strong>{profile.name} {profile.lastname}</strong>
                            <span>{profile.category}</span>
                        </div>
                    </header>

                    <p>{profile.experience}</p>

                    <h2>Local de atendimento: <p>{profile.neighborhood} de {profile.city}</p></h2>

                    <main className="container-profile-week">
                        <ProfileWeek dayWeek="Segunda" time="8h - 18h" />
                        <ProfileWeek dayWeek="Terça" time="12h - 18h" />
                        <ProfileWeek dayWeek="Quarta" time="8h - 18h" />
                        <ProfileWeek dayWeek="Quinta" time="12h - 18h" />
                        <ProfileWeek dayWeek="Sexta" time="-" />
                    </main>
                    

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ {profile.cost}</strong>
                        </p>

                        <a
                            target="_blank"
                            href={`https://wa.me/${profile.whatsapp}`}
                        >
                            <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </a>
                    </footer>
                </article>
            </div>
        </div>
    );

}

export default Profile;
