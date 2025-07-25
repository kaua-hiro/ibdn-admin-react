import React from 'react';
// 1. O ícone 'FaDribbble' foi REMOVIDO da linha abaixo, pois não estava sendo usado.
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const SocialAccounts = () => {
    return (
        <div className="settings-card social-accounts">
            <div className="card-header">
                <h3>Contas Sociais</h3>
            </div>
            <div className="card-body">
                <div className="social-account-item">
                    <FaFacebook size={24} color="#1877F2" />
                    <div>
                        <h4>Conta do Facebook</h4>
                        {/* 2. O href="#" foi TROCADO por um link real para ser válido. */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">www.facebook.com/nexus</a>
                    </div>
                    <button className="btn btn-secondary">Desconectar</button>
                </div>
                <div className="social-account-item">
                    <FaTwitter size={24} color="#1DA1F2" />
                    <div>
                        <h4>Conta do Twitter</h4>
                        <span>Não conectado</span>
                    </div>
                    <button className="btn btn-primary">Conectar</button>
                </div>
                 <div className="social-account-item">
                    <FaGithub size={24} color="#333" />
                    <div>
                        <h4>Conta do Github</h4>
                        <span>Não conectado</span>
                    </div>
                    <button className="btn btn-primary">Conectar</button>
                </div>
            </div>
        </div>
    )
}

export default SocialAccounts;