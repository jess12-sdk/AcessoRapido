import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import SearchItem, { Item } from '../../components/SearchItem';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function Search(){

    const [item, setItem] = useState([]);

    const [category, setCategory] = useState('');
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');

    async function searchItens(e: FormEvent){
        e.preventDefault();

        const response = await api.get('services', {
            params: {
                category,
                uf,
                city,
            }
        });
        setItem(response.data);
    }

    return(
        <div id="page-search">
            <PageHeader title="Estes são os profissionais disponíveis.">

            <form id="search-content" onSubmit={searchItens}>
                <Select
                    name="category" 
                    label="Categoria"
                    value={category}
                    onChange={ (e) => { setCategory(e.target.value) }}
                    options={[
                        { value: 'Diarista', label: 'Diarista' },
                        { value: 'Elétrica', label: 'Elétrica' },
                        { value: 'Fretes', label: 'Fretes' },
                        { value: 'Obras Gerais', label: 'Obras Gerais' },
                        { value: 'pedreiro', label: 'pedreiro' }
                    ]}
                />

                <Select
                    name="uf" 
                    label="Estado"
                    value={uf}
                    onChange={ (e) => { setUf(e.target.value) }}
                    options={[
                        { value: 'SP', label: 'SP' },
                        { value: 'CE', label: 'CE' },
                        { value: 'MG', label: 'MG' }
                    ]}
                />
                
                <Select
                    name="city" 
                    label="Cidade"
                    value={city}
                    onChange={ (e) => { setCity(e.target.value) }}
                    options={[
                        { value: 'russas', label: 'russas' },
                        { value: 'Ribeirão Pires', label: 'Ribeirão Pires' },
                        { value: 'Aracati', label: 'Aracati' }
                    ]}
                />

                <button type="submit" >
                    Buscar
                </button>

            </form>

            </PageHeader>
            <div className="container-body">
                <p>Os melhores de sua região</p>
                <main className="main-content">
                    {item.map((itens: Item) => {
                        return <SearchItem key={itens.id} item={itens}/>;
                    })}
                </main>
            </div>
        </div>
    );
}

export default Search;