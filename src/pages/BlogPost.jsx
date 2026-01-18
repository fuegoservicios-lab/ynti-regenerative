import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className="blog-post-page container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>Artículo no encontrado</h2>
                <Link to="/blog" className="btn-secondary">Volver al Blog</Link>
            </div>
        );
    }

    return (
        <article className="blog-post-page">
            <div className="blo-post-hero" style={{ backgroundImage: `url(${blog.image})` }}>
                <div className="blo-post-overlay">
                    <div className="container">
                        <span className="blog-category-tag">{blog.category}</span>
                        <h1 className="blo-post-title">{blog.title}</h1>
                    </div>
                </div>
            </div>

            <div className="container blo-post-container">
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={20} /> Volver a todos los artículos
                </Link>

                <div className="blo-post-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
        </article>
    );
};

export default BlogPost;
