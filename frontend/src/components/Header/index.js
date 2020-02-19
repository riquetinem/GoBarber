import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Henrique</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="/home/lil_tinem/Downloads/1581709738113-attachment.svg"
              alt="Henrique"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
