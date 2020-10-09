import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';


function Give(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [avatar, setAvatar] = useState('');
    const [experience, setExperience] = useState('');

    const [category, setCategory] = useState('');
    const [cost, setCost] = useState('');

    const [neighborhood, setNeighborhood] = useState('');
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemsValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateUsers(e: FormEvent){
        e.preventDefault();

        api.post('service', {
            name,
            lastname,
            avatar,
            email,
            whatsapp,
            experience,
            category,
            cost: Number(cost),
            neighborhood,
            uf,
            city,
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/landing');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return (
        <div id="page-give">
            <PageHeader 
                title="Que incrível que você quer ofentar seus serviços."
                description="Preencha esse formulário."
            />
            
            <div className="container-give">
                <main>
                    <form onSubmit={handleCreateUsers}>
                        <fieldset>
                            <legend>Seus Dados</legend>
                            <div className="schedule-name">
                                <Input 
                                    name="name"
                                    label="Nome"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                                <Input 
                                    name="lastname"
                                    label="Sobrenome"
                                    value={lastname}
                                    onChange={(e) => { setLastname(e.target.value) }}
                                />
                            </div>
                            <div className="schedule-email">
                                <Input
                                    name="email"
                                    label="E-mail"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <Input
                                    name="whatsapp"
                                    label="Whatsapp"
                                    value={whatsapp}
                                    onChange={(e) => { setWhatsapp(e.target.value) }}
                                />
                            </div>
                                <Input
                                    name="avatar"
                                    label="Avatar"
                                    value={avatar}
                                    onChange={(e) => { setAvatar(e.target.value) }}
                                />

                                <Textarea
                                    name="experience"
                                    label="Experience"
                                    value={experience}
                                    onChange={(e) => { setExperience(e.target.value) }}
                                />
                            
                        </fieldset>

                        <fieldset>
                            <legend>Serviço</legend>
                            <div className="schedule-category">
                                <Select 
                                    name="category" 
                                    label="Categoria"
                                    value={category}
                                    onChange={(e) => { setCategory(e.target.value) }}
                                    options={[
                                        { value: 'Diarista', label: 'Diarista' },
                                        { value: 'Elétrica', label: 'Elétrica' },
                                        { value: 'Fretes', label: 'Fretes' },
                                        { value: 'Obras Gerais', label: 'Obras Gerais' },
                                        { value: 'pedreiro', label: 'pedreiro' }
                                    ]}
                                />

                                <Input 
                                    name="cost"
                                    label="Preço/Hora"
                                    value={cost}
                                    onChange={(e) => { setCost(e.target.value) }}
                                />
                            </div>
                            
                        </fieldset>

                        <fieldset>
                            <legend>Local de Atendimento</legend>

                            <div className="schedule-city">
                                <Input
                                    name="neighborhood"
                                    label="Bairro(os)"
                                    value={neighborhood}
                                    onChange={(e) => { setNeighborhood(e.target.value) }}
                                />

                                <Input 
                                    name="uf"
                                    label="Estado"
                                    value={uf}
                                    onChange={(e) => { setUf(e.target.value) }}
                                />

                                <Input 
                                    name="city"
                                    label="Cidade"
                                    value={city}
                                    onChange={(e) => { setCity(e.target.value) }}
                                />
                            </div>
                            
                        </fieldset>

                        <fieldset>
                            <legend>
                                Horários Disponíveis
                                <button type="button" onClick={addNewScheduleItem}>
                                    + Novo Horário 
                                </button>
                            </legend>
                            
                            {scheduleItems.map((scheduleItem, index) => {
                                return(
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select 
                                            name="week_day" 
                                            label="Dia da Semana"
                                            value={scheduleItem.week_day}
                                            onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                            options={[
                                                { value: '0', label: 'Domingo' },
                                                { value: '1', label: 'Segunda-feira' },
                                                { value: '2', label: 'Terça-feira' },
                                                { value: '3', label: 'Quarta-feira' },
                                                { value: '4', label: 'Quinta-feira' },
                                                { value: '5', label: 'Sexta-feira' },
                                                { value: '6', label: 'Sábado' }
                                            ]}
                                        />
                                        <Input 
                                            name="from" 
                                            label="Das" 
                                            type="time"
                                            value={scheduleItem.from}
                                            onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                                        />
                                        <Input 
                                            name="to" 
                                            label="Até" 
                                            type="time"
                                            value={scheduleItem.to}
                                            onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                                        />
                                    </div>
                                );
                            })}

                            
                        </fieldset>

                        <footer>
                            <p>
                                <img src={warningIcon} alt="Aviso Importante"/>
                                Importante! <br />
                                Preencha todos os dados
                            </p>
                            <button type="submit">
                                Salvar cadastro
                            </button>
                        </footer>
                    </form>
                </main>
            </div>

        </div>
    );
}

export default Give;