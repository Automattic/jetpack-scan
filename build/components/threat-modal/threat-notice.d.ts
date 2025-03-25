/// <reference types="react" resolution-mode="require"/>
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
declare const ThreatNotice: ({ status, title, content, }: {
    status?: 'warning' | 'error' | 'success' | undefined;
    title: string;
    content: string;
}) => JSX.Element;
export default ThreatNotice;
