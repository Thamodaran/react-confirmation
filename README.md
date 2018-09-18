# React Users Avatar
## Install
```
npm install react-confirmation --save

```
## Demo
<img src="https://github.com/Thamodaran/react-confirmation/raw/master/demo.gif" alt="demo" width="100%" />

## Usage
```
React confirmation dialog example
```
```js
import React, { Component } from 'react';
import Confirmation from 'react-confirmation';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirm: false
    };
  }
  handelConfirmation = () => {
    this.setState({ showConfirm: !this.state.showConfirm });
  }
  render() {
    const confirmOptions = {
      title: 'Confirm to submit',
      message: 'Are you sure want to do this..?',
      buttons: [
        {
          label: 'Cancel',
          onClick: () => {
            this.setState({ showConfirm: false });
          }
        },
        {
          label: 'Ok',
          onClick: () => { alert("ok") }
        }
      ]
    };
    return (
      <React.Fragment>
        {this.state.showConfirm ? <Confirmation options={confirmOptions} /> : ''}
      </React.Fragment>
    );
  }
}
```
## PROPTYPES
| Prop | Type | Required |
| ---- | ---- | ------- |
| options | Object | Yes |
# react-confirmation
