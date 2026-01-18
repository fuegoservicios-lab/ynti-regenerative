import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { blogs } from '../data/blogs';
import './BlogFeed.css';

const BlogFeed = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [likesState, setLikesState] = useState(() => {
        // Initialize from localStorage or generate defaults
        const savedLikes = localStorage.getItem('blogLikesState');
        if (savedLikes) {
            return JSON.parse(savedLikes);
        }

        // Generate random initial likes if not exists
        const initialLikes = {};
        blogs.forEach(blog => {
            initialLikes[blog.id] = {
                liked: false,
                count: Math.floor(Math.random() * (150 - 20 + 1)) + 20 // Random between 20 and 150
            };
        });
        return initialLikes;
    });

    const totalBlogs = blogs.length;

    useEffect(() => {
        localStorage.setItem('blogLikesState', JSON.stringify(likesState));
    }, [likesState]);

    const toggleLike = (id) => {
        setLikesState(prev => {
            const current = prev[id] || { liked: false, count: 0 };
            const isLiked = !current.liked;
            const newCount = isLiked ? current.count + 1 : current.count - 1;

            return {
                ...prev,
                [id]: {
                    liked: isLiked,
                    count: newCount
                }
            };
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalBlogs - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalBlogs - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPaused, totalBlogs]);

    return (
        <section id="blog" className="blog section-padding">
            <div className="container">
                <div className="blog-header">
                    <div className="header-content">
                        <h2 className="section-title">ACTUALIDAD MÉDICA</h2>
                        <p className="section-subtitle">Ciencia, longevidad y bienestar: descubra el futuro de su salud.</p>
                    </div>
                    <div className="slider-controls">
                        <button onClick={prevSlide} className="slider-btn" aria-label="Anterior">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className="slider-btn" aria-label="Siguiente">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    className="blog-slider-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="blog-slider-track"
                        style={{ '--current-index': currentIndex }}
                    >
                        {blogs.map((post) => {
                            const postLikes = likesState[post.id] || { liked: false, count: 0 };

                            return (
                                <div key={post.id} className="blog-slide">
                                    <article className="blog-card">
                                        <div className="blog-img">
                                            <img src={post.image} alt={post.title} />
                                            <button
                                                className={`like-btn ${postLikes.liked ? 'liked' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleLike(post.id);
                                                }}
                                                aria-label={postLikes.liked ? "Quitar me gusta" : "Me gusta"}
                                            >
                                                <Heart size={20} fill={postLikes.liked ? "currentColor" : "none"} />
                                                <span className="like-count">{postLikes.count}</span>
                                            </button>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta">
                                                <span className="blog-category">{post.category}</span>
                                                <span className="blog-date">{post.date}</span>
                                            </div>
                                            <h3>{post.title}</h3>
                                            <p>{post.excerpt}</p>
                                            <div className="blog-footer-meta">
                                                <span className="blog-author">{post.author}</span>
                                                <span className="blog-read-time">{post.readTime}</span>
                                            </div>
                                            <Link to={`/blog/${post.id}`} className="read-more">Leer noticia completa →</Link>
                                        </div>
                                    </article>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="slider-dots">
                    {blogs.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogFeed;
