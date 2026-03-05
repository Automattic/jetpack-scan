import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, Button } from '@automattic/jetpack-components';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Icon, cautionFilled as warning } from '@wordpress/icons';
import { useContext } from 'react';
import { ThreatModalContext } from './index.js';
import styles from './styles.module.scss';
/**
 * ThreatNotice component
 *
 * @param {object} props         - The component props.
 * @param {string} props.status  - The status of the notice.
 * @param {string} props.title   - The title of the notice.
 * @param {string} props.content - The content of the notice.
 *
 * @return {JSX.Element} The rendered ThreatNotice component.
 */
const ThreatNotice = ({ status = 'warning', title, content, }) => {
    const { userConnectionNeeded, userIsConnecting, handleConnectUser, siteCredentialsNeeded, credentialsRedirectUrl, credentialsIsFetching, } = useContext(ThreatModalContext);
    return (_jsx(Notice, { status: status, isDismissible: false, children: _jsxs("div", { className: styles.notice, children: [
                _jsxs("div", { className: styles.notice__title, children: [status === 'success' ? (_jsx(Spinner, { className: styles.spinner })) : (_jsx(Icon, { icon: warning, size: 30 })), _jsx(Text, { variant: "title-small", mb: 2, children: title })
                    ] }), _jsx(Text, { children: content }), _jsxs("div", { className: styles.notice__actions, children: [userConnectionNeeded && (_jsx(Button, { className: styles.notice__action, isExternalLink: true, weight: "regular", isLoading: userIsConnecting, onClick: handleConnectUser, children: __('Connect your user account', 'jetpack-scan') })), siteCredentialsNeeded && (_jsx(Button, { className: styles.notice__action, isExternalLink: true, weight: "regular", href: credentialsRedirectUrl, isLoading: credentialsIsFetching, children: __('Enter server credentials', 'jetpack-scan') }))] })
            ] }) }));
};
export default ThreatNotice;
