import React, { Component } from 'react';
import {withStyles} from "@material-ui/styles";
import {TextField} from "@material-ui/core";
import style from "./style";
class Search extends Component {
    render() {
        const {handleChange, classes} = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    className={classes.textField}
                    onChange={handleChange}
                    margin="normal"
                    placeholder="Search for you"
                />
            </form>
        );
    }
}

export default withStyles(style)(Search);