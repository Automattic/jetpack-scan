/**
 * FixerStateNotice component
 *
 * @param {object}  props                       - The component props.
 * @param {object}  props.fixerState            - The state of the fixer (inProgress, error, stale).
 * @param {boolean} props.fixerState.inProgress - Whether the fixer is in progress.
 * @param {boolean} props.fixerState.error      - Whether the fixer encountered an error.
 * @param {boolean} props.fixerState.stale      - Whether the fixer is stale.
 *
 * @return {JSX.Element | null} The rendered fixer notice or null if no notice is available.
 */
declare const FixerStateNotice: ({ fixerState, }: {
    fixerState: {
        inProgress: boolean;
        error: boolean;
        stale: boolean;
    };
}) => import("react/jsx-runtime").JSX.Element;
export default FixerStateNotice;
