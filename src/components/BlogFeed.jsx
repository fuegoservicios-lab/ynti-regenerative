import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { blogs } from '../data/blogs';
import './BlogFeed.css';

const BlogFeed = () => {
    // Clone first 3 posts for seamless loop (since we show 3 at a time on desktop)
    const CLONES_COUNT = 3;
    const extendedBlogs = [...blogs, ...blogs.slice(0, CLONES_COUNT)];

    // Total legitimate slides (before clones)
    const totalOriginal = blogs.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
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

    const handleTransitionEnd = () => {
        // If we have reached the cloned slides (index >= totalOriginal)
        if (currentIndex >= totalOriginal) {
            setIsTransitioning(false); // Disable transition for instant jump
            setCurrentIndex(currentIndex - totalOriginal); // Jump back to original
        }
    };

    // Re-enable transition after index reset
    useEffect(() => {
        if (!isTransitioning) {
            // Force a small delay to allow DOM to update before re-enabling transition
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }
    }, [currentIndex, isTransitioning]);


    const nextSlide = () => {
        if (currentIndex >= extendedBlogs.length - CLONES_COUNT) return; // Prevention
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            // Jump to the end (clones) instantly, then slide back
            setIsTransitioning(false);
            setCurrentIndex(totalOriginal);
            // Verify logic: instant jump to clone position, then slide back to totalOriginal - 1
            // But usually prevSlide simply goes to max index. 
            // For seamless backwards:
            // 1. Jump to `totalOriginal` (clone start) without transition
            // 2. Then slide to `totalOriginal - 1` with transition
            // This is complex one-step. Simplified: Just loop normally for now or:
            setCurrentIndex(totalOriginal - 1);
            setIsTransitioning(true); // Normal transition
            return;
        }
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    // Auto-play
    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                // Seamless logic: 
                // We always increment. If we are at the end (controlled by handleTransitionEnd), we reset.
                // But we need to check bounds here too.
                setCurrentIndex(prev => {
                    // If we are already at the end of clones, we should have reset.
                    // Just increment.
                    return prev + 1;
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isPaused]);


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
                        className={`blog-slider-track ${!isTransitioning ? 'no-transition' : ''}`}
                        style={{ '--current-index': currentIndex }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedBlogs.length === 0 && (
                            <div style={{ padding: '2rem', textAlign: 'center', width: '100%' }}>
                                <p>No hay noticias disponibles en este momento.</p>
                            </div>
                        )}
                        {extendedBlogs.map((post, index) => {
                            // Use original ID for likes lookup, but use index for key to handle clones
                            const originalId = post.id;
                            const postLikes = likesState[originalId] || { liked: false, count: 0 };
                            // Unique key composed of ID and index to differentiate clones
                            const uniqueKey = `${originalId}-${index}`;

                            return (
                                <div key={uniqueKey} className="blog-slide">
                                    <Link to={`/blog/${post.id}`} className="blog-card-link">
                                        <article className="blog-card">
                                            <div className="blog-img">
                                                <img src={post.image} alt={post.title} />
                                                <button
                                                    className={`like-btn ${postLikes.liked ? 'liked' : ''}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        toggleLike(originalId);
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
                                                <span className="read-more">Leer noticia completa →</span>
                                            </div>
                                        </article>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="slider-dots">
                    {blogs.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === (currentIndex % totalOriginal) ? 'active' : ''}`}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentIndex(index);
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogFeed;
