import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade }  from 'polished'

import { Container } from './styles';

import Context from '../../Context/AuthContext';

const Header: React.FC = () => {

  const { colors, title } = useContext(ThemeContext);

  const { toggleTheme } = useContext(Context);

  return (
    <Container>
      

      < Switch 
        checked={title === 'dark'}
        onChange={toggleTheme }
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
}

export default Header;