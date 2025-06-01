"use client"
import { useEffect, useRef } from 'react'
import Glider from 'glider-js'
import 'glider-js/glider.min.css'
import '../styles/CompanyGallery.css'
const companies = [
    {
        id: 1,
        name: 'Microsoft',
        image: 'p1.jpg',
        description: 'Bucuresti, Romania'
    },
    {
        id: 2,
        name: 'Tenaris',
        image: 'p2.jpg',
        description: 'Zalau, Romania'
    },
    {
        id: 3,
        name: 'Endava',
        image: 'p3.jpg',
        description: 'Cluj, Romania'
    },
    {
        id: 4,
        name: 'Bitdefender',
        image: 'p4.jpg',
        description: 'Cluj, Romania'
    },
    {
        id: 5,
        name: 'IBM',
        image: 'p5.jpg',
        description: 'Cluj, Romania'
    }
]

export default function CompanyGallery() {
    const gliderRef = useRef(null)

    useEffect(() => {
        new Glider(gliderRef.current, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '#glider-dots',
            arrows: {
                prev: '#glider-prev',
                next: '#glider-next'
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        })
    }, [])

    return (
        <div className="glider-container">
            <div className="glider" ref={gliderRef}>
                {companies.map(company => (
                    <div key={company.id} className="glider-slide">
                        <div className="slide-content">
                            <img
                                src={company.image}
                                alt={company.name}
                                className="company-image"
                                loading="lazy"
                            />
                            <div className="slide-caption">
                                <h3>{company.name}</h3>
                                <p>{company.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glider-controls">
                <button id="glider-prev" aria-label="Previous">
                    ❮
                </button>
                <div id="glider-dots" className="glider-dots"></div>
                <button id="glider-next" aria-label="Next">
                    ❯
                </button>
            </div>
        </div>
    )
}