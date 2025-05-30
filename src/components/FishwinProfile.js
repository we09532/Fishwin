import React from 'react';

const FishwinProfile = () => {
    return (
        <div className="fishwin-profile">
            <h1>Meet Fishwin</h1>
            <img src="/images/fishwin.png" alt="Fishwin" className="fishwin-image" />
            <p>
                Fishwin is a unique character, part fish and part force of nature. Known for their 
                distinctive floral-patterned shirt, Fishwin embodies a charming personality that 
                balances humor with professionalism. Whether navigating the waters or engaging 
                with visitors, Fishwin brings a refreshing perspective to the Jurassic Park experience.
            </p>
            <h2>Fun Facts about Fishwin:</h2>
            <ul>
                <li>Favorite food: Seaweed salad</li>
                <li>Hobby: Collecting rare shells</li>
                <li>Superpower: Creating waves of laughter</li>
            </ul>
        </div>
    );
};

export default FishwinProfile;