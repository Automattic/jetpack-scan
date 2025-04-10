import { type ThreatFixStatus } from '../types/fixers.ts';
import { type Threat } from '../types/threats.ts';
export declare const getThreatType: (threat: Threat) => "plugins" | "themes" | "core" | "file";
export declare const fixerTimestampIsStale: (lastUpdatedTimestamp: string) => boolean;
export declare const fixerIsInError: (fixerStatus: ThreatFixStatus) => boolean;
export declare const fixerIsInProgress: (fixerStatus: ThreatFixStatus) => boolean;
export declare const fixerStatusIsStale: (fixerStatus: ThreatFixStatus) => boolean;
export declare const getFixerState: (fixerStatus: ThreatFixStatus) => {
    inProgress: boolean;
    error: boolean;
    stale: boolean;
};
export declare const getFixerAction: (threat: Threat) => string;
export declare const getDetailedFixerAction: (threat: Threat) => string;
export declare const getFixerDescription: (threat: Threat) => string;
