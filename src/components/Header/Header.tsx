import React from 'react';
import { AppBar, IconButton, Typography, Tooltip, Toolbar  } from '@material-ui/core';
import { Cloud as CloudIcon, Visibility as VisibilityIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { actions as appActions } from '../../redux/reducers/app-reducers';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <AppBar position="relative">
            <Toolbar>
                <CloudIcon className="logo-icon" />
                <Typography variant="h6" noWrap>
                    Weather Plus
                </Typography>
                <div className="grow" />
                <Tooltip title="Visually impaired version">
                    <IconButton color="inherit" onClick={() => dispatch(appActions.toggleVisuallyImpaired())}>
                        <VisibilityIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default Header;