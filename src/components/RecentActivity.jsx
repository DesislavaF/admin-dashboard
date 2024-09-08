import React, { useState, useEffect } from 'react';
import './recentActivity.css';  
import CardFilter from './CardFilter';  
import RecentActivityItem from './RecentActivityItem';  

function RecentActivity() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('http://localhost:4000/recentactivity')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    const filterItems = () => {
        let filteredItems = items;

        if (filter === 'Today') {
            filteredItems = items.filter(item => {
                const time = item.time.toLowerCase();
                return (
                    time.includes('min') ||
                    time.includes('hrs') ||
                    (time.includes('day') && parseInt(time) === 1)
                );
            });
        } else if (filter === 'This Month') {
            filteredItems = items.filter(item => {
                const time = item.time.toLowerCase();
                return (
                    (time.includes('day') && parseInt(time) <= 30) ||
                    (time.includes('week') && parseInt(time) <= 4)
                );
            });
        } else if (filter === 'This Year') {
            filteredItems = items.filter(item => {
                const time = item.time.toLowerCase();
                return (
                    (time.includes('month') && parseInt(time) <= 12) ||
                    (time.includes('week') && parseInt(time) > 4)
                );
            });
        }

        return filteredItems;
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Activity <span>| {filter}</span>
                </h5>

                <div className="activity">
                    {filterItems().length > 0 ? (
                        filterItems().map(item => (
                            <RecentActivityItem key={item._id} item={item} />
                        ))
                    ) : (
                        <p>No activities found for {filter}.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RecentActivity;


