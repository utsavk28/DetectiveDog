import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class ColoredScrollbars extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    renderView({ style, ...props }) {
        const viewStyle = {
            padding: 15,
        };
        return (
            <div
                className='box'
                style={{ ...style, ...viewStyle }}
                {...props}
            />
        );
    }

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            borderRadius: 10,
            backgroundColor: `rgb(255,255,255)`,
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                {...this.props}
            />
        );
    }
}
