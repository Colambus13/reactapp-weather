import React from 'react';
import { AppBar, IconButton, Typography, Tooltip, Toolbar  } from '@material-ui/core';
import { Cloud as CloudIcon, Visibility as VisibilityIcon } from '@material-ui/icons';
import './Header.css';

const Header: React.FC = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <CloudIcon className="logo-icon" />
                <Typography variant="h6" noWrap>
                    Weather Plus
                </Typography>
                <div className="grow" />
                <Tooltip title="Visually impaired version">
                    <IconButton color="inherit">
                        <VisibilityIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default Header;