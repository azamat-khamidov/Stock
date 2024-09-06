import React from 'react';

const PortfolioItem = ({ item }) => {
    return (
        // TODO: Determine what to display with each security in list
        <li>
            {item.name} - {item.quantity} shares @ ${item.price} each
        </li>
    );
};

export default PortfolioItem;