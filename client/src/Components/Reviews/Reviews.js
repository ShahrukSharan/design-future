import React from 'react';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    var currentSlide = 1;


    function showSlide(slideIndex) {
        const slides = document.getElementsByClassName('carouselItem');
        if (slideIndex > slides.length) { currentSlide = 1 }
        if (slideIndex < 1) { currentSlide = slides.length }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'
        }
        slides[currentSlide - 1].style.display = 'block'
    }


    function nextSlide() {
        showSlide(currentSlide += 1);
    }

    function previousSlide() {
        showSlide(currentSlide -= 1);
    }

    window.onload = function () {
        showSlide(currentSlide);
        document.getElementById('prev').addEventListener('click', function () {
            previousSlide();
        })
        document.getElementById('next').addEventListener('click', function () {
            nextSlide();
        })
    }
    return (
        <div className="reviews">
            <div className="review-title pt-5">
                <h3 className="text-center mb-5">What Our Happy Clients Say</h3>
            </div>
            <div className="carouselContainer">

                <div className="carouselItem slide1">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste perferendis nulla reiciendis esse repudiandae fugit vitae ab consequuntur ducimus nobis quas autem eaque, dolorum sunt. Facilis natus quo similique!</p>
                    <FontAwesomeIcon icon={faUserTie} />
                    <h5>Client's Name</h5>
                    <p>Entreupreuner</p>
                </div>
                <div className="carouselItem slide2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste perferendis nulla reiciendis esse repudiandae fugit vitae ab consequuntur ducimus nobis quas autem eaque, dolorum sunt. Facilis natus quo similique!</p>
                    <FontAwesomeIcon icon={faUserTie} />
                    <h5>Client's Name</h5>
                    <p>Entreupreuner</p>
                </div>
                <div className="carouselItem slide3">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste perferendis nulla reiciendis esse repudiandae fugit vitae ab consequuntur ducimus nobis quas autem eaque, dolorum sunt. Facilis natus quo similique!</p>
                    <FontAwesomeIcon icon={faUserTie} />
                    <h5>Client's Name</h5>
                    <p>Entreupreuner</p>
                </div>
                <div className="carouselItem slide4">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste perferendis nulla reiciendis esse repudiandae fugit vitae ab consequuntur ducimus nobis quas autem eaque, dolorum sunt. Facilis natus quo similique!</p>
                    <FontAwesomeIcon icon={faUserTie} />
                    <h5>Client's Name</h5>
                    <p>Entreupreuner</p>
                </div>
                <span className="prev" id="prev"> <FontAwesomeIcon icon={faArrowLeft} /> </span>
                <span className="next" id="next"> <FontAwesomeIcon icon={faArrowRight} /> </span>
            </div>
        </div>
    );
};

export default Reviews;