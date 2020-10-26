import React from "react";
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export default class row extends React.Component {

    render() {

        return (
            <div className="row">
                <TextField
                    type="number"
                    className="input"
                    label="Amount"
                    variant="outlined"
                    value={this.props.number}
                    onChange={this.props.onChangeNumber} />

                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
                    <Select
                        value={this.props.option}
                        label="Currency"
                        onChange={this.props.onChange}>
                        {this.props.currencyOptions.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
        );
    };
}