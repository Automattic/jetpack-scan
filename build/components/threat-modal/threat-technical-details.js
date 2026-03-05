import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, Button, DiffViewer, MarkedLines } from '@automattic/jetpack-components';
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronUp, Icon } from '@wordpress/icons';
import { useState, useCallback, useContext } from 'react';
import { ThreatModalContext } from './index.js';
import styles from './styles.module.scss';
/**
 * ThreatTechnicalDetails component
 *
 * @return {JSX.Element | null} The rendered technical details or null if no details are available.
 */
const ThreatTechnicalDetails = () => {
    const { threat } = useContext(ThreatModalContext);
    const [open, setOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);
    if (!threat.filename && !threat.context && !threat.diff) {
        return null;
    }
    return (_jsxs("div", { className: styles.section, children: [
            _jsx("div", { className: styles.section__title, children: _jsx(Button, { variant: "link", className: styles.section__toggle, "aria-expanded": open, "aria-controls": `threat-details-${threat.id}`, onClick: toggleOpen, children: _jsxs("div", { className: styles.section__toggle__content, children: [
                            _jsx(Text, { variant: "title-small", mb: 0, children: open
                                    ? __('Hide the technical details', 'jetpack-scan')
                                    : __('Show the technical details', 'jetpack-scan') }), _jsx(Icon, { icon: open ? chevronUp : chevronDown, size: 24 })
                        ] }) }) }), open && (_jsxs("div", { className: open ? styles.section__open : styles.section__closed, id: `threat-details-${threat.id}`, children: [threat.filename && (_jsxs(_Fragment, { children: [
                            _jsx(Text, { children: __('Threat found in file:', 'jetpack-scan') }), _jsx("pre", { className: styles.filename, children: threat.filename })
                        ] })), threat.context && _jsx(MarkedLines, { context: threat.context }), threat.diff && _jsx(DiffViewer, { diff: threat.diff })] }))] }));
};
export default ThreatTechnicalDetails;
