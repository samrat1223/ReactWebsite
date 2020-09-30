import React from 'react';
import CradItem from './CardItem';
import './Card.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Welcome you to the City Of Joy !</h1>
            <div className="cards__container">
                <div class="cards__wrapper">
                    <ul class="cards__items">
                        <CradItem 
                        src = 'images/img-9.jpg'
                        text="The Victoria Memorial is a large marble building in Kolkata, 
                        West Bengal, India, which was built between 1906 and 1921. 
                        It is dedicated to the memory of Queen Victoria, then Empress 
                        of India, and is now a museum and tourist destination under the 
                        auspices of the Ministry of Culture"
                        label='Monument'
                        path='/services'
                        />
                        <CradItem 
                        src = 'images/img-2.jpg'
                        text="The Eden Gardens is an iconic cricket ground in Kolkata, India. Established in 1864, it is the oldest and second largest cricket stadium in India after the newly built Sardar Patel Stadium and third in the world after Sardar Patel Stadium and Melbourne Cricket Ground. The stadium currently has a capacity of 80,000."
                        label='Sports'
                        path='/services'
                        />
                    </ul>
                    <ul class="cards__items">
                        <CradItem 
                        src = 'images/img-5.jpg'
                        text="The Indian Museum in Kolkata, West Bengal, India, also referred to as the Imperial Museum at Calcutta in colonial-era texts, is the ninth oldest museum of the world, oldest museum in India and the largest museum in India. "
                        label='Adventure'
                        path='/services'
                        />
                        <CradItem 
                        src = 'images/img-4.jpg'
                        text="Central Dharmatala is known for its monumental colonial landmarks, such as the baroque-style Metropolitan Building from 1905. Opened in 1874, the redbrick New Market shopping arcade is packed with stalls for clothing, jewelry, flowers, and local cheeses, as well as street food stands and venerable confectioners. Exhibits at the massive Indian Museum, founded in 1814, range from traditional masks to printed fabrics. "
                        label='Luxury'
                        path='/services'
                        />
                        <CradItem 
                        src = 'images/img-7.jpg'
                        text="The Salt Lake Stadium, officially Vivekananda Yuba Bharati Krirangan, is a multipurpose stadium in Bidhannagar, Kolkata, with a current capacity of 85,000. The Salt Lake Stadium is the main home of ATK Mohun Bagan, East Bengal FC. It is the second largest stadium in India by seating capacity. "
                        label='Sports'
                        path='/services'
                        />
                    </ul>
                    <ul class="cards__items">
                        <CradItem 
                        src = 'images/img-10.jpg'
                        text="The Shaheed Minar, formerly known as the Ochterlony Monument, is a monument in Kolkata that was erected in 1828 in memory of Major-general Sir David Ochterlony, commander of the British East India "
                        label='Monument'
                        path='/services'
                        />
                        <CradItem 
                        src = 'images/img-11.jpg'
                        text="Howrah Bridge is a bridge with a suspended span over the Hooghly River in West Bengal, India. Commissioned in 1943, the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking the two cities of Howrah and Kolkata. "
                        label='communication'
                        path='/services'
                        />
                        <CradItem 
                        src = 'images/img-12.jpg'
                        text="The tram system in the city of Kolkata, West Bengal, India, operated by West Bengal Transport Corporation after Calcutta Tramways Company was dissolved, is the only tram network operating in India. Started in 1902, it is the second oldest electric tramway in India."
                        label='Communication'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
