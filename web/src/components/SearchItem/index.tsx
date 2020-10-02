import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export interface Item {
    id: number;
    avatar: string;
    category: string;
    neighborhood: string;
    city: string;
}

interface SearchItemProps {
    item: Item;
}

const SearchItem: React.FC<SearchItemProps> = ({item}) => {

    return(
        <article className="search-item">
                <Link to="/profile">
                    <header>
                        <img src={item.avatar} alt={item.category} />
                    </header>

                    <h2>{item.category}</h2>
                    

                    <h3>{item.neighborhood}<br/>{item.city}</h3>
                </Link>
        </article>
    );
}

export default SearchItem;