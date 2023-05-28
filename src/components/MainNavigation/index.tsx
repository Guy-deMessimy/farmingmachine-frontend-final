import { HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem } from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import { Button } from 'baseui/button';
import * as Styled from './styled';
import styles from './styles';

const MainNavigation = () => {
  return (
    <HeaderNavigation overrides={styles.headerNavigation}>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Styled.NavLink to="/">Farming Machine</Styled.NavLink>
        </StyledNavigationItem>
      </StyledNavigationList>

      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem></StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Styled.NavLink to="/category">Services</Styled.NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Styled.NavLink to="/rent">Rent</Styled.NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Styled.NavLink to="/share">Share</Styled.NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Styled.NavLink to="/blog">Blog</Styled.NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Styled.NavLink to="/configuration">Configuration</Styled.NavLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button>Créer un compte</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};
export default MainNavigation;
