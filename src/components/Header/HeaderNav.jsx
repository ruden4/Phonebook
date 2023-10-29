import css from './Header.module.css';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export function HeaderNav() {

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
  &.active {
    font-weight: 600;;
  }
  &:hover {
    scale: 1.1;
  }
`;

    return (
        <nav className={css.navigation}>
            <ul className={css.navigationList}>
                <li className={css.navigationItem}>
                    <StyledLink to="/">Home</StyledLink></li>
                <li className={css.navigationItem}>
                    <StyledLink to="/contacts">Contacts</StyledLink></li>
            </ul>
        </nav>
    )
}