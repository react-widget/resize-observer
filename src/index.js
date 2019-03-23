import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import ResizeObserver from 'resize-observer-polyfill';

class ReactResizeObserver extends React.Component {

    static propTypes = {
        children: PropTypes.element,
        disabled: PropTypes.bool,
        onResize: PropTypes.func,
    }

    resizeObserver = null;

    componentDidMount() {
        this.onComponentUpdated();
    }

    componentDidUpdate() {
        this.onComponentUpdated();
    }

    componentWillUnmount() {
        this.destroyObserver();
    }

    onComponentUpdated() {
        const { disabled } = this.props;
        const element = findDOMNode(this);
        if (!this.resizeObserver && !disabled && element) {
            // Add resize observer
            this.resizeObserver = new ResizeObserver(this.onResize);
            this.resizeObserver.observe(element);
        } else if (disabled) {
            // Remove resize observer
            this.destroyObserver();
        }
    }

    onResize = () => {
        const { onResize } = this.props;
        if (onResize) {
            onResize();
        }
    };

    destroyObserver() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

export default ReactResizeObserver;
