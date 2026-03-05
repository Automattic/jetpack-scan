import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Text } from '@automattic/jetpack-components';
import { __ } from '@wordpress/i18n';
import { useContext } from 'react';
import { ThreatModalContext } from './index.js';
import styles from './styles.module.scss';
/**
 * ThreatSummary component
 *
 * @return {JSX.Element} The rendered threat summary.
 */
const ThreatSummary = () => {
    const { threat } = useContext(ThreatModalContext);
    return (_jsxs("div", { className: styles.section, children: [!!threat.description && _jsx(Text, { children: threat.description }), !!threat.source && (_jsx("div", { children: _jsx(Button, { variant: "link", isExternalLink: true, weight: "regular", href: threat.source, children: __('See more technical details of this threat', 'jetpack-scan') }) }))] }));
};
export default ThreatSummary;
