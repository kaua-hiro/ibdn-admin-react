import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

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
                        <a href="#">www.facebook.com/ibdn</a>
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

export default SocialAccounts