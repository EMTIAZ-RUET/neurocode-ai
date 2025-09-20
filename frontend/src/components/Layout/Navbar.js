import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavbarContainer = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textWhite};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: bold;
  text-decoration: none;
  
  i {
    font-size: ${props => props.theme.fontSizes['2xl']};
    color: ${props => props.theme.colors.accent};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: ${props => props.theme.spacing.lg};
    border-radius: 0 0 ${props => props.theme.borderRadius.lg} ${props => props.theme.borderRadius.lg};
  }
`;

const NavLink = styled(Link)`
  color: ${props => {
    if (props.isActive) return props.theme.colors.accent;
    if (props.highlight) return '#FFD700';
    return props.theme.colors.textWhite;
  }};
  text-decoration: none;
  font-weight: ${props => props.isActive || props.highlight ? 'bold' : 'normal'};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};
  position: relative;
  background: ${props => props.highlight ? 'rgba(255, 215, 0, 0.1)' : 'transparent'};
  border: ${props => props.highlight ? '1px solid rgba(255, 215, 0, 0.3)' : 'none'};
  
  &:hover {
    color: ${props => props.highlight ? '#FFD700' : props.theme.colors.accent};
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  }
`;

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: ${props => props.theme.colors.textWhite};
    border-radius: 2px;
    transition: all ${props => props.theme.transitions.fast};
    transform-origin: center;
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/system-design', label: '🏗️ System Design', icon: 'fas fa-project-diagram', highlight: true },
    { path: '/dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { path: '/analysis', label: 'Analysis', icon: 'fas fa-chart-bar' },
    { path: '/insights', label: 'Insights', icon: 'fas fa-lightbulb' },
    { path: '/ui-ux-design', label: 'UI/UX Design', icon: 'fas fa-palette' },
    { path: '/settings', label: 'Settings', icon: 'fas fa-cog' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/">
          <i className="fas fa-brain"></i>
          <span>NeuroCode</span>
        </Logo>
        
        <NavMenu isOpen={isOpen}>
          {navItems.map((item) => (
            <motion.li
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                isActive={location.pathname === item.path || (item.path === '/system-design' && location.pathname === '/')}
                highlight={item.highlight}
                onClick={() => setIsOpen(false)}
              >
                <i className={item.icon}></i> {item.label}
              </NavLink>
            </motion.li>
          ))}
        </NavMenu>
        
        <MobileToggle isOpen={isOpen} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileToggle>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;