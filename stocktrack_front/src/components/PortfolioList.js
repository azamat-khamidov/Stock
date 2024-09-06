import React, { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import apiService from '../services/apiService';

const PortfolioList = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        apiService.getPortfolio().then(data => setPortfolioItems(data));
    }, []);

    return (
        <div>
            <h2>Portfolio</h2>
            <ul>
                {portfolioItems.map(item => (
                    <PortfolioItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default PortfolioList;
