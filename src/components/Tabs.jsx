import React, { useState } from 'react'
import { CiPizza } from 'react-icons/ci'
import { GiFruitBowl, GiNoodles, GiCheckMark } from 'react-icons/gi'
import { MdOutlineIcecream } from 'react-icons/md'
// import { CiIconName } from 'react-icons/ci'; 

import './Tabs.css'

function Tabs() {
    const [selectedTab, setSelectedTab] = useState('pizza')

    const renderContent = () => {
        switch (selectedTab) {
            case 'pizza':
                return (
                    <>
                        <div className="left-col">
                            <span className='badge'>Italian</span>
                            <h1>White Pizza</h1>
                            <p><strong>Recipe by:</strong><small>Food52</small></p>
                            <h3>Ingredients</h3>
                            <div className='ingredients'>
                                <ul>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Olive oil</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Garlic</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Mozzarella cheese</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Ricotta cheese</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Parmesan cheese</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Pizza dough</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="image-wrapper">
                                <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk=" alt="White Pizza" />
                            </div>
                        </div>
                    </>
                )
            case 'noodles':
                return (
                    <>
                        <div className="left-col">
                            <span className='badge'>Asian</span>
                            <h1>Stir-fried Noodles</h1>
                            <p><strong>Recipe by:</strong><small>Tasty</small></p>
                            <h3>Ingredients</h3>
                            <div className='ingredients'>
                                <ul>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Soy sauce</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Garlic</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Ginger</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Vegetable oil</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Noodles</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Vegetables (carrots, bell peppers, etc.)</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Green onions</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Sriracha (optional)</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="image-wrapper">
                                <img src="https://img.freepik.com/premium-photo/bowl-fried-noodles-with-pile-parsley-top_893055-88.jpg" alt="Stir-fried Noodles" />
                            </div>
                        </div>
                    </>
                )
            case 'desert':
                return (
                    <>
                        <div className="left-col">
                            <span className='badge'>Dessert</span>
                            <h1>Fruit Bowl</h1>
                            <p><strong>Recipe by:</strong><small>Healthy Eats</small></p>
                            <h3>Ingredients</h3>
                            <div className='ingredients'>
                                <ul>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Mixed fruits (berries, kiwi, banana, etc.)</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Honey</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Lemon juice</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Mint leaves</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="image-wrapper">
                                <img src="https://www.refreshmyhealth.com/wp-content/uploads/2022/05/colorful-real-deal-raw-fruit-bowl-vegan-low-carb-dessert_122-main_img_9401.jpg" alt="Fruit Bowl" />
                            </div>
                        </div>
                    </>
                )
            case 'icecream':
                return (
                    <>
                        <div className="left-col">
                            <span className='badge'>Dessert</span>
                            
                            <h1>Ice Cream</h1>
                            <p><strong>Recipe by:</strong><small>Cool Treats</small></p>
                            <h3>Ingredients</h3>
                            <div className='ingredients'>
                                <ul>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Milk</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Sugar</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Heavy cream</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Vanilla extract</span></li>
                                    <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Salt</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="image-wrapper">
                                <img src="https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Ficecream_sushinair_cover_3152023-1200.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100" alt="Ice Cream" />
                            </div>
                        </div>
                    </>
                )
            default:
                return null
        }
    }

    return (
        <div className="container">
            <h1 className='recipeHeading'>What would you like to have!</h1>
            <div className="tabs">
                <div className={`tablist ${selectedTab === 'pizza' ? 'active' : ''}`} onClick={() => setSelectedTab('pizza')}>
                    <CiPizza />
                    <span>Pizza</span>
                </div>
                <div className={`tablist ${selectedTab === 'noodles' ? 'active' : ''}`} onClick={() => setSelectedTab('noodles')}>
                    <GiNoodles />
                    <span>Noodles</span>
                </div>
                <div className={`tablist ${selectedTab === 'desert' ? 'active' : ''}`} onClick={() => setSelectedTab('desert')}>
                    <GiFruitBowl />
                    <span>Dessert</span>
                </div>
                <div className={`tablist ${selectedTab === 'icecream' ? 'active' : ''}`} onClick={() => setSelectedTab('icecream')}>
                    <MdOutlineIcecream />
                    <span>Ice Cream</span>
                </div>
            </div>
            <div className='recipe_banner'>
                {renderContent()}
            </div>
        </div>
    )
}

export default Tabs
