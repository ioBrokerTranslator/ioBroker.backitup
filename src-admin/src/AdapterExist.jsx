import React from 'react';
import PropTypes from 'prop-types';

import { I18n } from '@iobroker/adapter-react-v5';
import { Checkbox, FormControlLabel } from '@mui/material';
import BaseField from './BaseField';

class AdapterExist extends BaseField {
    renderItem() {
        return <>
            <FormControlLabel
                control={<Checkbox
                    onChange={async e => {
                        if (e.target.checked) {
                            if (this.props.schema.adapter) {
                                this.checkAdapterInstall(this.props.schema.adapter)
                                    .catch(err => console.error(err));
                            } else if (this.props.schema.alert) {
                                const text = I18n.t(this.props.schema.alert);
                                const lines = text.split('\n').map(line => <div key={line} style={{ minHeight: 24 }}>{line}</div>);
                                this.setState({ message: { text: lines, title: I18n.t(this.props.schema.title) } });
                            }
                        }
                        this.props.onChange(this.props.attr, e.target.checked);
                    }}
                />}
                label={I18n.t(this.props.schema.label || this.props.schema.adapter)}
            />
            {this.renderMessage()}
        </>;
    }
}

AdapterExist.propTypes = {
    socket: PropTypes.object.isRequired,
    themeType: PropTypes.string,
    themeName: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    attr: PropTypes.string,
    schema: PropTypes.object,
    onError: PropTypes.func,
    onChange: PropTypes.func,
};

export default AdapterExist;
