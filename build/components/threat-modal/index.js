import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from '@automattic/jetpack-components';
import { Modal } from '@wordpress/components';
import { createContext } from 'react';
import ThreatSeverityBadge from "../threat-severity-badge/index.js";
import styles from './styles.module.scss';
import ThreatFixConfirmation from "./threat-fix-confirmation.js";
export const ThreatModalContext = createContext(null);
/**
 * ThreatModal component
 *
 * @param {object}   props                           - The props.
 * @param {object}   props.threat                    - The threat.
 * @param {boolean}  props.isUserConnected           - Whether the user is connected.
 * @param {boolean}  props.hasConnectedOwner         - Whether the user has a connected owner.
 * @param {boolean}  props.userIsConnecting          - Whether the user is connecting.
 * @param {Function} props.handleConnectUser         - The handleConnectUser function.
 * @param {object}   props.credentials               - The credentials.
 * @param {boolean}  props.credentialsIsFetching     - Whether the credentials are fetching.
 * @param {string}   props.credentialsRedirectUrl    - The credentials redirect URL.
 * @param {Function} props.handleUpgradeClick        - The handleUpgradeClick function.
 * @param {Function} props.handleFixThreatClick      - The handleFixThreatClick function.
 * @param {Function} props.handleIgnoreThreatClick   - The handleIgnoreThreatClick function.
 * @param {Function} props.handleUnignoreThreatClick - The handleUnignoreThreatClick function.
 *
 * @return {JSX.Element} The threat modal.
 */
export default function ThreatModal({ threat, isUserConnected, hasConnectedOwner, userIsConnecting, handleConnectUser, credentials, credentialsIsFetching, credentialsRedirectUrl, handleUpgradeClick, handleFixThreatClick, handleIgnoreThreatClick, handleUnignoreThreatClick, ...modalProps }) {
    const userConnectionNeeded = !isUserConnected || !hasConnectedOwner;
    const siteCredentialsNeeded = !credentials || credentials.length === 0;
    return (_jsx(Modal, { title: _jsxs("div", { className: styles.title, children: [_jsx(Text, { variant: "title-small", children: threat.title }), !!threat.severity && _jsx(ThreatSeverityBadge, { severity: threat.severity })] }), size: "large", ...modalProps, children: _jsx("div", { className: styles['threat-details'], children: _jsx(ThreatModalContext.Provider, { value: {
                    closeModal: modalProps.onRequestClose,
                    threat,
                    handleUpgradeClick,
                    userConnectionNeeded,
                    handleConnectUser,
                    userIsConnecting,
                    siteCredentialsNeeded,
                    credentialsIsFetching,
                    credentialsRedirectUrl,
                    handleFixThreatClick,
                    handleIgnoreThreatClick,
                    handleUnignoreThreatClick,
                }, children: _jsx(ThreatFixConfirmation, {}) }) }) }));
}
