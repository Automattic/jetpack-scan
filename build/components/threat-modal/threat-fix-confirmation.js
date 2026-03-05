import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { __ } from '@wordpress/i18n';
import { useContext } from 'react';
import { ThreatModalContext } from './index.js';
import ThreatActions from './threat-actions.js';
import ThreatFixDetails from './threat-fix-details.js';
import ThreatNotice from './threat-notice.js';
import ThreatSummary from './threat-summary.js';
import ThreatTechnicalDetails from './threat-technical-details.js';
/**
 * ThreatFixConfirmation component
 *
 * @return {JSX.Element} The rendered fix confirmation.
 */
const ThreatFixConfirmation = () => {
    const { userConnectionNeeded, siteCredentialsNeeded } = useContext(ThreatModalContext);
    return (_jsxs(_Fragment, { children: [
            _jsx(ThreatSummary, {}), _jsx(ThreatTechnicalDetails, {}), _jsx(ThreatFixDetails, {}), siteCredentialsNeeded && userConnectionNeeded && (_jsx(ThreatNotice, { title: 'Additional connections needed', content: __('A user connection and server credentials provide Jetpack the access necessary to ignore and auto-fix threats on your site.', 'jetpack-scan') })), !siteCredentialsNeeded && userConnectionNeeded && (_jsx(ThreatNotice, { title: __('User connection needed', 'jetpack-scan'), content: __('A user connection provides Jetpack the access necessary to ignore and auto-fix threats on your site.', 'jetpack-scan') })), siteCredentialsNeeded && !userConnectionNeeded && (_jsx(ThreatNotice, { title: __('Site credentials needed', 'jetpack-scan'), content: __('Your server credentials allow Jetpack to access the server that’s powering your website. This information is securely saved and only used to ignore and auto-fix threats detected on your site.', 'jetpack-scan') })), _jsx(ThreatActions, {})
        ] }));
};
export default ThreatFixConfirmation;
