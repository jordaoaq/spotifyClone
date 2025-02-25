import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const { pathname } = useLocation();
    const hideSidebar = pathname !== '/' && pathname !== '/artists' && pathname !== '/songs';

    if (hideSidebar) {
        return null;
    }

    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <ul>
                    <li>
                        <Link to="/">
                            <span className="fa fa-home"></span>
                            <span>Início</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            <span className="fa fa-search"></span>
                            <span>Buscar</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua Biblioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É rápido, vamos te ajudar!</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <Link to="/cookies">Cookies</Link>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;