import css from './Header.module.css';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

    const StyledLink = styled(NavLink)`
    text-decoration: none;
    display:block;
    color: inherit;
    padding: 24px 10px;
    font-weight: 200;
    font-size: 32px;
    text-align: center;
    color: rgb(51, 51, 51);
    transition-duration: 300ms;
    border-radius: 10px;
  &.active {
    font-weight: 600;
    background-color: rgb(51, 51, 51);
    color: #ffffffbf;
    scale: 1.1;
  }
  &:hover {
    scale: 1.1;

  }
`;

export function HeaderNav() {

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
        <nav className={css.navigation}>
            {isLoggedIn && <ul className={css.navigationList}>
                <li className={css.navigationItem}>
                    <StyledLink to="/">Home</StyledLink></li>
                <li className={css.navigationItem}>
                    <StyledLink to="/contacts">Contacts</StyledLink></li>
            </ul>}
        </nav>
    )
}